/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const hlff = require('./hlf_functions.js');
const db = require('./db_functions');
// const express = require('express');
// const app = express();
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const bodyParser = require('body-parser');
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

async function ioQueryDb(dbQuery, pId) {
    let data;
    if (pId) {
    	data = await db.db_getData(dbQuery, pId);
    	console.log("db done (meds): " + data);
    	io.emit('meds', data);
    } else {
    	data = await db.db_getData(dbQuery);
    	console.log("db done: " + data);
    	io.emit('patients', data);
    }    
}

app.get('/', function (req, res) {
	// Return the basic HTML page
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	// socket.emit('news', 'Hello World!');
	socket.on('getPatients', function () {
		ioQueryDb("patients");
	});
	socket.on('getMeds', function (pId) {
		ioQueryDb("meds", pId.pId);
	});
});

app.post('/patients', async (req, res) => {
	const { did } = req.body;
	console.log(did);
	if (did)
		res.send('OK'); // ALL GOOD, Lambda can stop processing now
	else {
		res.status(500).send("Missing Doctor Id as 'did'")
		return;
	}
	
	const result = await hlff.patientList(did);

    let record;
    try {
        record = JSON.parse(result);
    } catch (err) {
        console.log(err);
        record = result;
    }
    
    // Need to include the doctorid included in the call so Telegram knows which chat to send the data back to
    var returnData = record;
    // Will be calling Lambda SDK here eventually to return the requested data
    console.log(JSON.stringify(returnData));
    var payload = { doctorid: did, command: "patients", data: returnData };
    console.log(JSON.stringify(payload));
    hlff.sendDataToLambda(payload);
});

app.post('/medlist', async (req, res) => {
	const { did, pid } = req.body;
	console.log(did, pid);
	if (did && pid)
		res.send('OK'); // ALL GOOD, Lambda can stop processing now
	else {
		res.status(500).send("Missing Doctor Id as 'did' and Patient Id as 'pid'")
		return;
	}

	const result = await hlff.medicationList(did, pid);

    let record;
    try {
        record = JSON.parse(result);
    } catch (err) {
        console.log(err);
        record = result;
    }
    
    // Need to include the doctorid included in the call so Telegram knows which chat to send the data back to
    var returnData = record;
    // Will be calling Lambda SDK here eventually to return the requested data
    console.log(JSON.stringify(returnData));
    var payload = { doctorid: did, command: "medlist", data: returnData };
    hlff.sendDataToLambda(payload);
});

app.post('/meddetail', async (req, res) => {
	const { did, mid } = req.body;
	console.log(did, mid);
	if (did && mid)
		res.send('OK'); // ALL GOOD, Lambda can stop processing now
	else {
		res.status(500).send("Missing Doctor Id as 'did' and Medication Id as 'mid'")
		return;
	}
	
	const result = await hlff.medicationDetail(did, mid);

    let record;
    try {
        record = JSON.parse(result);
    } catch (err) {
        console.log(err);
        record = result;
    }
    
    var escalations = [];
    var missedDoses = [];

    if (record.take_history) {
    	record.take_history.forEach(history => {
	        if (history.timeliness == "9") {
	        	missedDoses.push(history.time)
	        }
	        if (history.escalation != "0") {
	        	escalations.push(history.time)
	        }
	    })
    }
    
    // Need to include the doctorid included in the call so Telegram knows which chat to send the data back to
    var escalationText = escalations.length > 0 ? " - Escalations: " + escalations : " - Escalations: 0";
    var missedText = missedDoses.length > 0 ? " - Missed Doses: " + missedDoses : " - Missed Doses: 0";
    var medRecord = record.medication + " - " + record.dosage + " - " + record.frequency + escalationText + missedText;
    var returnData = medRecord;
    // Will be calling Lambda SDK here eventually to return the requested data
    console.log(JSON.stringify(returnData));
    var payload = { doctorid: did, command: "meddetail " + mid, data: returnData };
    hlff.sendDataToLambda(payload);
});

app.post('/progress', async (req, res) => {
	const { did, pid } = req.body;
	console.log(did, pid);
	if (did && pid)
		res.send('OK'); // ALL GOOD, Lambda can stop processing now
	else {
		res.status(500).send("Missing Doctor Id as 'did'")
		return;
	}
	
	const result = await hlff.patientProgress(did, pid);

    let record;
    try {
        record = JSON.parse(result);
    } catch (err) {
        console.log(err);
        record = result;
    }
    
    // Need to include the doctorid included in the call so Telegram knows which chat to send the data back to
    var returnData = record;
    // Will be calling Lambda SDK here eventually to return the requested data
    console.log(JSON.stringify(returnData));
    var payload = { doctorid: did, command: "progress", data: returnData };
    hlff.sendDataToLambda(payload);
});

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
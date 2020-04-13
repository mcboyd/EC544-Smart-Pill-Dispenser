/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const hlff = require('./hlf_functions.js')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));


var patientId = 0;

app.get('/', async (req, res) => {
	const result = await hlff.patientList(1);

    let record;
    try {
        record = JSON.parse(result);
    } catch (err) {
        console.log(err);
        record = result;
    }

    console.log("Transaction evaluated and parsed.");

	// res.send('Hello World!\n' + JSON.stringify(patList));
	res.send('Hello World!\n' + JSON.stringify(record));
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
    hlff.sendDataToLambda(payload);
});

app.post('/medlist', async (req, res) => {
	const { did, pid } = req.body;
	console.log(did, pid);
	if (did && pid)
		res.send('OK'); // ALL GOOD, Lambda can stop processing now
	
	patientId = pid;

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
	const { did } = req.body;
	console.log(did);
	if (did)
		res.send('OK'); // ALL GOOD, Lambda can stop processing now
	
	const result = await hlff.patientProgress(did, patientId);

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

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
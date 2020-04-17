const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: 'localhost', 
     user:'******', 
     password: '******',
     database: 'ec544',
     connectionLimit: 5
});

const queryMap = new Map();
queryMap.set('patients', 'SELECT * from patient');
queryMap.set('meds', 'SELECT * from medication where PatientId = ?');

async function db_getData(mapKey, pId) {
  let conn;
  let rows;
  try {
	conn = await pool.getConnection();
	if (pId) {
		rows = await conn.query(queryMap.get(mapKey), pId);
	} else {
		rows = await conn.query(queryMap.get(mapKey));
	}
	return JSON.stringify(rows);
  } catch (err) {
	throw err;
  } finally {
	if (conn) conn.end();
  }
  
}

module.exports = {
	db_getData
};
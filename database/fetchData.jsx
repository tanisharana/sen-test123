const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'Nippon@123',
  server: '14.97.24.100',
  database: 'ShereNippon_31May23',
};

async function fetchData(table) {
  try {
    await sql.connect(config);
    const result = await sql.query(`SELECT * FROM dbo.${table}`);
    sql.close();
    return result.recordset;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  fetchData
};

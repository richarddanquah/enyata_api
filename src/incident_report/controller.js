const pool = require("../../db");
const queries = require('./queries');
const axios = require('axios');

const getIncidentReport = (req, res) => {
  pool.query(queries.getIncidentReport , (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addIncidentReport =(req,res)=> {
 const { clientId, incidentDesc, city, country, date} = req.body; 
 axios.get('https://api.openweathermap.org/data/2.5/weather?q=accra&appid=bcd88021b1f9382c97bbbd457eac06cd')
 .then(function (response) {
   // handle success
   console.log(response);
 })
 .catch(function (error) {
   // handle error
   console.log(error);
 })
 .then(function () {
   // always executed
 });

};

module.exports = {
  getIncidentReport,
  addIncidentReport
};

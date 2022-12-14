const pool = require("../../db");
const queries = require("./queries");
const validation = require("../../validation");
const axios = require("axios");
require("dotenv").config();

// get all incident report
const getIncidentReport = (req, res) => {
  pool.query(queries.getIncidentReport, (error, results) => {
    if (error) throw error;

    res.status(200).send({
      status: true,
      message: "success",
      data: results.rows,
    });
  });
};

// post incedent report
const addIncidentReport = (req, res) => {
    // checking all required fields
  const { error } = validation.incidentReportValidation(req.body);
  if (error)
    return res.status(400).send({
      status: false,
      message: "failed",
      data: error.details[0].message,
    });

  const { clientId, incidentDesc, city, country, date } = req.body;

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APIKEY}`
    )
    .then(function (response) {
      if (response.status == 200) {
        pool.query(
          queries.addIncidentReport,
          [clientId, incidentDesc, city, country, date, response.data],
          (error, results) => {
            if (error) throw error;

            res.status(200).send({
              status: true,
              message: "success",
            });
          }
        );
      } else {
        res.status(400).send({
          status: false,
          message: response.data.message,
          data: response.data.cod,
        });
      }
    })
    .catch(function (error) {
      // handle error
      res.status(400).send({
        status: false,
        message: "failed",
        data: error.message,
      });
    })
    .then(function () {
      // always executed
    });
};

module.exports = {
  getIncidentReport,
  addIncidentReport,
};

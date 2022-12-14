const getIncidentReport = "SELECT * FROM incidents";
const addIncidentReport =
  "INSERT INTO incidents (client_id,incident_desc,city,country,date,weather_report) VALUES ($1,$2,$3,$4,$5,$6)";

module.exports = {
  getIncidentReport,
  addIncidentReport,
};

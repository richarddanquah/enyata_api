const express = require("express");
const incidentReportRoutes = require("./src/incident_report/routes");
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.get("/", (req, res) => {
  res.send("enyata home test api v1");
});

// routes
app.use("/api/v1/incidentreport", incidentReportRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

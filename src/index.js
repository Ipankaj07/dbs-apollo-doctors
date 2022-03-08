const express = require("express");

const clinicController = require("./controllers/clinic.controller");
const doctorController = require("./controllers/doctor.controller");

const app = express();
app.use(express.json());

app.use("/clinic", clinicController);
app.use("/doctor", doctorController);

module.exports = app;
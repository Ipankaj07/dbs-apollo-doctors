const express = require("express");

const clinicController = require("./controllers/clinic.controller");
const doctorController = require("./controllers/doctor.controller");

const app = express();
app.use(express.json());

/* cors */
const cors = require("cors");
app.use(cors({
    origin: "*",
    credentials: true
}));


app.use("/clinic", clinicController);
app.use("/doctor", doctorController);

module.exports = app;
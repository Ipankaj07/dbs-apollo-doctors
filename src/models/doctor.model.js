const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    speciality: { type: String, required: true },
    availability: { type: Array, required: true },
    cost_per_appointment: { type: Number, required: true },
    max_no_of_appointements: { type: Number, required: true },
    gender: { type: String, required: true },
    experience: { type: String, required: true },
    image: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("Doctor", doctorSchema)


/* here clinic details with populate doctor details */

const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }]
}, {
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("Clinic", clinicSchema) 
const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor.model');

router.post('/add', async (req, res) => {
    const doctor = new Doctor(req.body);
    try {
        const newDoctor = await doctor.save();
        res.status(200).json({
            message: 'Doctor added successfully',
            newDoctor
        })
    } catch (err) {
        res.status(500).json({
            message: 'Doctor not added',
            err
        })
    }
}
);

router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json({
            message: 'Doctors fetched successfully',
            doctors
        })
    } catch (err) {
        res.status(500).json({
            message: 'Doctors not fetched',
            err
        })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        res.status(200).json({
            message: 'Doctor fetched successfully',
            doctor
        })
    } catch (err) {
        res.status(500).json({
            message: 'Doctor not fetched',
            err
        })
    }
});


/* filter by speciality */
router.get('/speciality/:speciality', async (req, res) => {
    try {
        const doctors = await Doctor.find({ speciality: req.params.speciality });
        res.status(200).json({
            message: 'Doctors fetched successfully',
            doctors
        })
    } catch (err) {
        res.status(500).json({
            message: 'Doctors not fetched',
            err
        })
    }
});

/* filter by gender and speciality */
router.get('/speciality-:speciality/gender-:gender', async (req, res) => {
    try {
        const doctor = await Doctor.find({ speciality: req.params.speciality, gender: req.params.gender });
        res.status(200).json({
            message: 'Doctors fetched successfully',
            doctor
        })
    } catch (err) {
        res.status(500).json({
            message: 'Doctors not fetched',
            err
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            message: 'Doctor updated successfully',
            updatedDoctor
        })
    } catch (err) {
        res.status(500).json({
            message: 'Doctor not updated',
            err
        })
    }
});

/* patch */
router.patch('/:id', async (req, res) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            message: 'Doctor updated successfully',
            updatedDoctor
        })
    } catch (err) {
        res.status(500).json({
            message: 'Doctor not updated',
            err
        })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Doctor deleted successfully'
        })
    } catch (err) {
        res.status(500).json({
            message: 'Doctor not deleted',
            err
        })
    }
});

module.exports = router;
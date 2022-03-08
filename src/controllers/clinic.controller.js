const express = require('express');
const router = express.Router();
const Clinic = require('../models/clinic.model');

router.post('/add', async (req, res) => {
    const clinic = new Clinic(req.body);
    try {
        const newClinic = await clinic.save();
        res.status(200).json({
            message: 'Clinic added successfully',
            newClinic
        })
    } catch (err) {
        res.status(500).json({
            message: 'Clinic not added',
            err
        })
    }
});

router.get('/', async (req, res) => {
    try {
        const clinics = await Clinic.find().populate('doctors');
        res.status(200).json({
            message: 'Clinics fetched successfully',
            clinics
        })
    } catch (err) {
        res.status(500).json({
            message: 'Clinics not fetched',
            err
        })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const clinic = await Clinic.findById(req.params.id);
        res.status(200).json({
            message: 'Clinic fetched successfully',
            clinic
        })
    } catch (err) {
        res.status(500).json({
            message: 'Clinic not fetched',
            err
        })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const clinic = await Clinic.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Clinic deleted successfully',
            clinic
        })
    } catch (err) {
        res.status(500).json({
            message: 'Clinic not deleted',
            err
        })
    }
});

module.exports = router;
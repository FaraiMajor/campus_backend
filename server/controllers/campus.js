const express = require('express')
const router = express.Router()

// handle CRUD operations for campus
const { Student, Campus } = require('../db/models')

// Get all campuses

router.get('/', (req, res) => {
    try {
        const campuses = await Campus.findAll()
        res.status(200).send(campuses)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

// get campus by name

// router.get('/new', (req, res) =>{
//     res.send('render student registration form')

// })
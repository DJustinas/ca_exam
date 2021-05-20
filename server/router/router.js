const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const userValidator = require('../middle/validateUser')


router.post('/adduser', userValidator, controller.saveUser)
router.get('/getusers',  controller.getUsers)


module.exports = router
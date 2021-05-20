const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const userValidator = require('../middle/validateUser')

// const validateRecipe = require('../middle/validateRecipe')
// const validateReview = require('../middle/validateReview')
//
router.post('/adduser', userValidator, controller.saveUser)
// router.get('/getrecipes',  controller.getRecipes)
// router.get('/singleRecipe/:id',  controller.getSingleRecipe)
// router.post('/makeReview', validateReview,  controller.makeReview)

module.exports = router
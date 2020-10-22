const router = require('express').Router()

const User = require('../models/Users.js')

let currentTime = new Date().toLocaleString()

// @desc		Test end is working
// @route		/test
router.get('/test', (req, res) => {
  res.send(`GET for Users /test is currently running at ${currentTime}`)
})

// @desc		Get all users
// @route		GET /
router.get('/', (req, res) => {
  User.find(req.query)
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(`Error: ${err}`))
})

// @desc		Get a user by id
// @route		GET /:id
router.get('/:id', (req, res) => {})

// @desc		Add a new user
// @route		POST /
router.post('/', (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    message: req.body.message,
  })
  newUser
    .save()
    .then(() => res.json(newUser))
    .catch((err) => res.status(500).json(`Error: ${err}`))
})

// @desc		Update a user by id
// @route		PATCH /:id
router.patch('/:id', (req, res) => {})

// @desc		Remove a user by id
// @route		DELETE /:id
router.delete('/:id', (req, res) => {})

module.exports = router

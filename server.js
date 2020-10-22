const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const connectDB = require('./utils/db.js')
const UserRouter = require('./routes/users')

require('dotenv').config()
require('colors')

connectDB()
const server = express()
server.use(cors())
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

const currentTime = new Date().toLocaleString()

// @desc		Test server is working
// @route		/
server.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Server is live!',
    dataTime: currentTime,
    author: 'GitHub: @MrZacSmith',
  })
})

server.use('/api/users', UserRouter)

const PORT = process.env.PORT || 3550
server.listen(PORT, () => {
  console.log(`\n** Zoho practice API is running on port ${PORT}`.rainbow)
})

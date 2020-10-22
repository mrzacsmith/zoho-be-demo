const express = require('express')

require('dotenv').config()
require('colors')

const server = express()

const PORT = process.env.PORT || 3550
server.listen(PORT, () => {
  console.log(`\n** Zoho practice API is running on port ${PORT}`.rainbow)
})

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const blogRouter = require('./controllers/blog')
const logger = require('./utils/logger')

const app = express()

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('Failed to connect to MongoDB', error.message)
  })
app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

module.exports = app

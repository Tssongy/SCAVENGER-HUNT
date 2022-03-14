// a back-end web framework for building web apps in jS
const express = require('express')

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers
const treasuresController = require('./controllers/treasure_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')

// access app object
const app = express()

const port = process.env.PORT || 3001;

// start the web server
app.listen(port,
    () => console.log(`listening on port ${port}`)
)

// workflow of express: starts from receiving user request, and goes until we provide a response.
// Each step in the workflow is a middleware function that has access to the req, res, next:
// -- receive request (from browser)
//      |
//      V
// (middleware) log request info in the terminal
app.use(logger)
//     |
//     V
// (middleware) built-In mini router for static files - this is our SPA(Single-Page Application)
app.use(express.static('client'))
//      |
//      V
// parse json body in a POST, PUT, or DELETE request, and it assigns the data to req.body
// middleware function
app.use(express.json())
//     |
//     V
// enalbe sessions
app.use(sessions)
//     |
//     V
// API routes - controller files
app.use('/api/treasures', treasuresController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)
//     |
//     V
// send response to browser






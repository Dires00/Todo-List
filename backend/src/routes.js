const express = require('express')
const ContentController = require('./controllers/ContentController')
const HideController = require('./controllers/HideController')
const DoneController = require('./controllers/DoneController')
const routes = express.Router()

const TodoListController = require('./controllers/TodoListController')

// Rota TodoList
routes.post('/todolist', TodoListController.create)
routes.get('/todolist', TodoListController.read)
routes.delete('/todolist/:id', TodoListController.delete)

// Rota Hide
routes.get('/hide', HideController.read)
routes.post('/hide/:id', HideController.update)

// Rota Done
routes.get('/done', DoneController.read)
routes.post('/done/:id', DoneController.update)

// Rota Content
routes.post('/content/:id', ContentController.update)

module.exports = routes
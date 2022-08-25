 const express = require('express')
 const routes = express.Router()

 const TodoListController = require('./controllers/TodoListController')

// Rota TodoList
 routes.post('/todolist', TodoListController.create)
 routes.get('/todolist', TodoListController.read)
 routes.delete('/todolist/:id', TodoListController.delete)
 routes.patch('/todolist/:id', TodoListController.update)

 module.exports = routes
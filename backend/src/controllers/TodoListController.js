const { json } = require('express')
const TodoList = require('../models/TodoListData')

module.exports = {
    
    async read(request, response){
        const todolistArray = await TodoList.find()
        return response.json(todolistArray)
    },

    async create(request, response){
        const {description, duedate} = request.body
        const done = false, hide = false

        if(!description || !duedate){
            return response.status(400).json({
                error: "Necessario preencher os campos"
            })
        }
        
        const todolistCreated = await TodoList.create({
            description,
            duedate,
            done,
            hide
        })

        return response.json(todolistCreated)
    },

    async delete(request, response){
        const { id } = request.params
        
        const todolistDeleted = await TodoList.findOneAndDelete({_id : id})

        if(todolistDeleted){
            return response.json(todolistDeleted)
        }
        return response.status(401).json({error: "Registro não encontrado"})

    },

}
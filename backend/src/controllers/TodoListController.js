const { json } = require('express')
const TodoList = require('../models/TodoListData')

module.exports = {
    
    async read(request, response){
        const todolistArray = await TodoList.find()
        console.log(todolistArray)

        return response.json(todolistArray)
    },

    async create(request, response){
        const {description, duedate, done, hide} = request.body
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

    async update(request, response){
        let {description, duedate, done, hide} = request.body
        const {id} = request.params
        let todolistExist = await TodoList.findOne({_id: id})
        
        if(!todolistExist){
            return response.status(401).json({error: "Registro não encontrado"})
        }
        todolistExist = json(todolistExist)
        description = (description)? description : todolistExist.description
        duedate = (duedate)? duedate : todolistExist.duedate
        
        const todolistUpdated = await TodoList.updateOne({_id : id}, {
            description,
            duedate,
            done,
            hide
        })

        return response.json(todolistUpdated)
    }
}
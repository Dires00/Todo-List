const { json } = require('express')
const TodoList = require('../models/TodoListData')

module.exports = {

    async update(request, response){
        const {description, duedate} = request.body
        const {id} = request.params
        const item = await TodoList.findOne({_id: id})
        
        if(!item){
            return response.status(401).json({error: "Registro não encontrado"})
        }

        if(!description || !duedate){
            return response.status(400).json({error: "Necessário preencher todos os campos"})
        }

        item.description = description
        item.duedate = duedate
        
        await item.save()
        
        return response.json(item)
    },

    async read(request, response){
        allTasks = await TodoList.find()
        const description = request.query
        const itens = allTasks.filter(task => task.description.includes(description.description))

        if(!itens){
            return response.status(401).json({error: "Registro não encontrado"})
        }

        return response.json(itens)
    }
}

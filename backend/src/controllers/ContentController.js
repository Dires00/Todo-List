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
    }
}

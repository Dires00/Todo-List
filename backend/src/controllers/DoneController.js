const { json } = require('express')
const TodoList = require('../models/TodoListData')

module.exports = {
    async read(request, response){
        const done = request.query

        const itens = await TodoList.find(done)

        return response.json(itens)
    },

    async update(request, response){
        const {id} = request.params
        const item = await TodoList.findOne({_id: id})
        
        if(!item){
            return response.status(401).json({error: "Registro não encontrado"})
        }

        item.done = !item.done
        if(!item.done && item.hide){
            item.hide = false
        }
        await item.save()
        
        return response.json(item)

    }
}
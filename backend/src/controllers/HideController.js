const { json } = require('express')
const TodoList = require('../models/TodoListData')

module.exports = {
    async read(request, response){
        const hide = request.query

        const hideNotes = await TodoList.find(hide)

        return response.json(hideNotes)
        
    },

    async update(request, response){
        const {id} = request.params
        const item = await TodoList.findOne({_id: id})
        if(!item){
            return response.status(401).json({error: "ID não encontrado"})
        }
        if(item.done){
            item.hide = !item.hide
        }
        else{
            return response.status(400).json({error: "Itens que não foram concluidos não podem ser arquivados"})
        }

        await item.save()
        return response.json(item)
    }
}
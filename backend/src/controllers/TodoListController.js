const TodoList = require('../models/TodoListData')

module.exports = {
    
    async read(request, response){
        const todolistArray = await TodoList.find()
        console.log(todolistArray)

        return response.json(todolistArray)
    },

    create(request, response){
        const {id, description, duedate, done, hide} = request.body
    }
}
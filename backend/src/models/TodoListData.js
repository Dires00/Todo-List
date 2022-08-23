const mongoose = require('mongoose')

const TodoListDataSchema = new mongoose.Schema({
    id: Number,
    description: String,
    duedate: ISODate(),
    done: Boolean,
    hide: Boolean
})

modele.exports = mongoose.model('TodoList', TodoListDataSchema)
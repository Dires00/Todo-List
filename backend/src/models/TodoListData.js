const mongoose = require('mongoose')

const TodoListDataSchema = new mongoose.Schema({
    description: String,
    duedate: Date,
    done: Boolean,
    hide: Boolean
})

module.exports = mongoose.model('task', TodoListDataSchema)
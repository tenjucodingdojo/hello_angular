var mongoose = require('mongoose')

var TaskSchema = new mongoose.Schema({
    title: {type:String},
    description: {type:String,default:" "},
    completed: {type: Boolean, default:false},
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})

var Task = mongoose.model('Task', TaskSchema)

module.exports = Task
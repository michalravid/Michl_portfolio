const mongoose = require('mongoose')

const TaskSchema=new mongoose.Schema({
    taskId: String,
    taskTypeId: String, 
    taskName: String, 
    contactTaskId: String, 
    contactTaskName: String
})



module.exports=mongoose.model('taskList',TaskSchema)

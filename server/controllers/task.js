const Task = require('../models/task')

exports.addTask = async(req,res)=>{
    console.log(req.body);
    // const {taskId,taskTypeId,taskName,contactTaskId, contactTaskName} = req.body;
    const task = await Task.create(req.body);
    res.json(task)
};

exports.deleteTaskById = async (req, res) => {
    const  taskId  = req.params.taskId;
  console.log(taskId);
    try {
      const deleteTaskById = await Task.findOneAndDelete({ taskId: taskId });
      if (!deleteTaskById) {
        return res.status(404).json({ massage: 'Task not found' });
      }
      res.json({ massage: 'Task deleted successfully' });
    } catch (error) {
      console.error('Failed to delete task:', error);
      res.status(500).json({ massage: 'Failed to delete task' });
    }
  };

  exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      console.error('Failed to get contacts:', error);
      res.status(500).json({ message: 'Failed to get tasks' });
    }
  };

  exports.getAllTasksById = async (req, res) => {
    try {
      const id=req.params.id;
      const tasks = await Task.find({contactTaskId:id});
      res.json(tasks);
    } catch (error) {
      console.error('Failed to get contacts:', error);
      res.status(500).json({ message: 'Failed to get tasks' });
    }
  };
  
  //לטפל בפונקציה
  exports.updateTaskById = async (req, res) => {
    // const { taskId } = req.params;
    console.log("taskId");
    const taskId = req.body.taskId;
    const taskTypeId = req.body.taskTypeId;
    console.log(taskTypeId);
    const query = { taskId: taskId };
    const update = { $set: { taskTypeId: taskTypeId } };
    // const { taskTypeId,taskName,contactTaskId, contactTaskName } = req.body;
    try {
      const updateTaskById = await Task.findOneAndUpdate( query,update);
      if (!updateTaskById) {
        return res.status(404).json({ massage: 'Task not found' });
      }
      res.json(updateTaskById);
    } catch (error) {
      console.error('Failed to update task:', error);
      res.status(500).json({ massage: 'Failed to update task' });
    }
  };
  

  // exports.getTaskByName = async (req, res) => {
  //   const { taskName } = req.params;
  
  //   try {
  //     const task = await Task.findOne({ taskName });
  //     if (!task) {
  //       return res.status(404).json({ massage: 'Task not found' });
  //     }
  //     res.json(task);
  //   } catch (error) {
  //     console.error('Failed to get task:', error);
  //     res.status(500).json({ massage: 'Failed to get task' });
  //   }
  // };









// const taskList = [
//     { taskId: '1', taskTypeId: '2', taskName: 'exception' }
// ]

// exports.addTask = (req, res) => {
//     taskList.push(req.body)
//     res.send(taskList)
// }

// exports.getAllTasks = (req, res) => {
//     res.send(taskList)
// }

// exports.deleteTaskById = (req, res) => {
//     const { id } = req.params
//     const task = taskList.find(t => t.taskId === id)
//     if(!task){
//         res.status(404).json({massage:"task undefinded"})
//     }
//     else{
//         taskList.splice(task,1)
//     }
//     res.send(taskList)
// }

// exports.updateTaskById=(req,res)=>{
//     const { id } = req.params
//     const { typeId } = req.params
//     const { name } = req.params
//     const task = taskList.find(t => t.taskId === id)
//     if(!task){
//         res.status(404).json({massage:"task undefinded"})
//     }
//     else{
//         taskList[task].taskName=name;
//         taskList[task].taskName=typeId;
//         res.status(200).json({massage:"successed"})
//     }
// }
const express = require('express');
const router = express.Router();
const { addTask,getAllTasks ,deleteTaskById,updateTaskById,getAllTasksById} = require('../controllers/task')

router.post('/',addTask)
router.get('/',getAllTasks)
router.get('/:id',getAllTasksById)
router.delete('/:taskId',deleteTaskById)
router.put('/',updateTaskById)

module.exports=router
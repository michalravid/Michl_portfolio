import { produce } from 'immer';

const initialState = {
    taskType: [
        // { taskTypeId: '1', taskTypeName: 'bug' },
        // { taskTypeId: '2', taskTypeName: 'task' }
    ],
    taskList: [
        // { taskId: '1', taskTypeId: '1', taskName: 'exceptionArray', contactTaskId: '1212', contactTaskName: 'Avi Levi' },
        // { taskId: '2', taskTypeId: '2', taskName: 'lcreate_login', contactTaskId: '123', contactTaskName: 'Avi Levi' },
        // { taskId: '3', taskTypeId: '2', taskName: 'create_homePage', contactTaskId: '147', contactTaskName: 'Michael Rov' }
    ]
}

export default produce((state, action) => {
    switch (action.type) {
        // case 'ADD_TYPE_OF_TASK':
        //     { state.taskType.push(action.payload) }
        //     break;
        case 'ADD_TASK_TO_LIST':
            {
                debugger
                state.taskList.push(action.payload)
            }
            break;
        case 'UPDATE_TASK':
            {
                const index = state.taskList.findIndex(num => num.taskId === action.payload.taskId)
                state.taskList[index].taskTypeId = action.payload.taskTypeId
            }
            break;

        case 'DELETE_TASK':
            {
                const index = state.taskList.findIndex(num => num.taskId === action.payload.taskId)
                state.taskList.splice(index, 1);
            }
            break;
        case 'GET_ALL_TASKS':
            { state.tasksList = action.payLoad }
            break;
    }
}, initialState)
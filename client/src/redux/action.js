export function addContact(data) {
    return { type: 'ADD_CONTACT', payload: data }
}
export function updateContact(data) {
    return { type: 'UPDATE_CONTACT', payload: data }
}
export function deleteContact(data) {
    return { type: 'DELETE_CONTACT', payload: data }
}
export function updateCntOfContact(data) {
    return { type: 'UPDATE_CNT_OF_CONTACT', payload: data }
}
export function addTypeOfTask(data) {
    return { type: 'ADD_TYPE_OF_TASK', payload: data }
}
export function updateTask(data) {
    return { type: 'UPDATE_TASK', payload: data }
}
export function deleteTask(data) {
    return { type: 'DELETE_TASK', payload: data }
}
export function addTaskToList(data) {
    return { type: 'ADD_TASK_TO_LIST', payload: data }
}
export function getAllContacts(contacts){
    return{type:'GET_ALL_CONTACTS',payLoad: contacts}
}
export function getAllTasks(data){
    return{type:'GET_ALL_TASKS',payLoad: data}
}
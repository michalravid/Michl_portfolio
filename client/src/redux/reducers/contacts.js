import { produce } from 'immer';

const initialState = {
    contactsList: [
        // { id: '123', name: 'Avi Levi', phone: '0587152265', email: 'avi058@gmail.com' },
        // { id: '456', name: 'Dov Yager', phone: '0536587712', email: 'dov053@gmail.com' },
        // { id: '789', name: 'Eli Cohen', phone: '0527601091', email: 'eli052@gmail.com' },
        // { id: '147', name: 'Michael Rov', phone: '0504503369', email: 'mich050@gmail.com' }
    ],

    cntOfContacts: 4
};

export default produce((state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            { state.contactsList.push(action.payload) }
            break;
        case 'GET_ALL_CONTACTS':
            { state.contactsList = action.payLoad }
            break;
        case 'UPDATE_CONTACT':
    {
        // איך מעדכנים פרטי משתמש מסויים
        var contact = state.contactsList.find(num => num.id == action.payload.id)
        contact.name = action.payload.name
        contact.manager = action.payload.manager
        contact.phone = action.payload.phone
        contact.email = action.payload.email
    }
    break;
        case 'DELETE_CONTACT':
    { state.contactsList.remove(state.contactsList.find(num => num.id == action.payload.id)) }
    break;
        case 'UPDATE_CNT_OF_CONTACT':
    { state.cntOfContacts = action.payload }
    break;
}
}, initialState)


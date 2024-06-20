import { createStore,combineReducers ,applyMiddleware} from "redux";
import contacts from "./reducers/contacts"
import tasks from "./reducers/tasks";

const reducer=combineReducers({contacts,tasks});

const delete_task = (store) => (next) => (action) => {
        console.log('action: ' , action);
        return next(action);
    }
    

const store = createStore(reducer,applyMiddleware(delete_task));
window.store = store;
export default store;
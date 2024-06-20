import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginData from './component/login';
import Connect from './component/connect';
import TaskData from './component/task';
import ShowTaskList from './component/presentationTasks';
import Carrousel from './component/carrousel';
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Connect />}></Route>
          <Route path="/login" element={<LoginData />}></Route>
          <Route path="/connect" element={<Connect />}></Route>
          <Route path="/presentationTasks" element={<ShowTaskList />}></Route>
          <Route path="/task" element={<TaskData />}></Route>
          <Route path="/carrousel" element={<Carrousel />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

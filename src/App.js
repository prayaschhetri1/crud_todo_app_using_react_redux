import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import { Route, Routes } from 'react-router-dom';
import SingleTodo from './components/SingleTodo';
import EditPage from './components/EditPage';
import Navbar from './components/navbar/Navbar';
import Authfile from './components/Auth/Authfile';

function App() {
  return (
    <div className="App">
      {/* <Authfile/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Todos/>} />
        <Route path="/todos/:id" element={ <SingleTodo/>} />
        <Route path="/todo/:id/edit" element={ <EditPage/>} />

        </Routes>
        
    </div>
  );
}

export default App;

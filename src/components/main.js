import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form'
import TodoList from "./TodoList";
import './App.css'

function Main() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [isActive, setActive] = useState("false");
    useEffect(()=>{
        const filterHandler = () => {
            switch (status) {
                case "completed":
                    setFilteredTodos(todos.filter(todo => todo.completed === true));
                    break;
                case 'uncompleted':
                    setFilteredTodos(todos.filter(todo => todo.completed === false));
                    break;
                default:
                    setFilteredTodos(todos);
                    break;
            }
        };
        filterHandler();
    },[todos,status]);

    return (
        <div className='main'>
            <h1 className='main_header'>Your to do list</h1>
            <Form setStatus={setStatus} inputText={inputText}  setInputText={setInputText} todos={todos}
                  setTodos={setTodos}/>
            <TodoList isActive={isActive} setActive ={setActive} setTodos={setTodos} todos={todos}  filteredTodos={filteredTodos}/>
        </div>
    );
}

export default Main;
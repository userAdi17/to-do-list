import React from 'react';

const Todo = ({text, todos, setTodos, todo,isActive, setActive}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((er) => {
            return er.id !== todo.id
        }))
    };
    const completeHandler = () => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id) {
                return {
                    ...el, completed: !el.completed
                }
            }return el
        }));
    };
    const handleToggle = () => {
        setActive(isActive==='styled_btn');
    };
    return (
        <div className='todo_lists'>
            <ul className={`todo_list ${todo.completed ? 'styled_btn' : ''}`}>{text}</ul>
            <div className='todo_btn'>
                <button  className='todo_form_done btn btn-success' id='btn_done' onChange={handleToggle ? 'styled_btn' : null} onClick={completeHandler}><i
                    className="far fa-calendar-check"></i></button>
                <button className='todo_form btn btn-danger' onClick={deleteHandler}><i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
};
export default Todo;
import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos,isActive, setActive}) => {
    return (
        <div>
            <ul className='todo_ul'>
                {filteredTodos.map((todo) => (
                    <Todo isActive={isActive} setActive ={setActive}setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} todo={todo}/>
                ))}
            </ul>

        </div>
    );
};
export default TodoList;
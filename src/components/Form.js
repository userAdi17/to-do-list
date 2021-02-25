import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText,setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.round(Math.random() * 10)}])
        setInputText("")
    };
    const statusHandler=(e)=>{
        setStatus(e.target.value);
    };
    return (
        <div>
            <form action="">
                <input className='form_input' value={inputText} type="text" placeholder='Type a todo' onChange={inputTextHandler}/>
                <button  className='btn btn-warning form_btn' onClick={submitTodoHandler}><i className="fas fa-plus-square"></i></button>
                <select  className = 'form_select' onChange={statusHandler} >
                    <option >all</option>
                    <option>completed</option>
                    <option>uncompleted</option>
                </select>
            </form>
        </div>
    );
};
export default Form;
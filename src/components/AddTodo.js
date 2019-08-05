import React, { useState } from 'react'
import uniqid from 'uniqid';


const AddTodo = ({ getTodo }) => {
    const [todo, setTodo] = useState({ id: null, text: '' });

    const handleInput = e => {
        e.preventDefault();

        if (todo.text) {
            const createdTodo = {
                id: uniqid(),
                text: todo.text
            }
            getTodo(createdTodo);
            setTodo({text:''})
        } else {
            alert('Invalid input. Please re-enter task');
        }


    }

    return ( 
        <div className = "input-field col s6" >
        <form onSubmit = { handleInput } >
        <input type = "text"
            className = "validate"
            autoFocus value = { todo.text }
            onChange = {(e) => setTodo({ text: e.target.value }) }
        /> 
        <button className = "btn waves-effect waves-light" type = "submit" > 
            Add New Task 
        </button> 
        </form> 
        </div>
    )
}


export default AddTodo;
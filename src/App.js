import React, { useState, useEffect } from 'react'
import AddTodo from './components/AddTodo';
import ListGroup from './components/ListGroup';

const  App = () => {
  
  const [todos, setTodos] = useState([]);
  
  useEffect(()=>{
    const todos = localStorage.getItem('todos');
    if(todos){
      setTodos(JSON.parse(todos));
      return
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  })



  const getTodo = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) =>{
    const modifiedTodos = todos.filter(todo =>{
      return todo.id !== id;
    });

    setTodos([...modifiedTodos]);
  }

  return (
      <div className="container">
        <h2
          className="teal lighten-1 white-text center-align"
          style={{padding: "2rem 0"}}
        >
          Task Manager Lite
        </h2>
        <AddTodo getTodo={getTodo} />
        <ListGroup todos = {todos} deleteTodo = {deleteTodo}/>
      </div>
    )
  }



export default App;
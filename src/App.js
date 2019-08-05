import React, { useState, useEffect } from 'react'
import {Link, Route} from 'react-router-dom';

import Indecision from './components/Indecision';
import Home from './components/Home';

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

  // To retrieve todos from the addtodo component
  const getTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }
  // delete todos 
  const deleteTodo = (id) =>{
    const modifiedTodos = todos.filter(todo =>{
      return todo.id !== id;
    });

    setTodos([...modifiedTodos]);
  }

  return (
      <div>
        <nav className="nav-wrapper teal darken-2">
           <ul className="right ">
              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/decide" className="center">Indecision</Link></li>
          </ul>
        </nav>
        <div>
            <Route path='/' exact render={()=> (<Home todos={todos} deleteTodo={deleteTodo} getTodo={getTodo} />)} />
            <Route path='/:anything' exact render={()=>(<Indecision todos={todos}/>)}/>
            
        </div>

        <footer className="teal darken-2 white-text center" style={{position:"fixed", bottom:"0",left:"0",right:"0",padding:"1rem 0"}}>
          <span className="center"> Created by Sounak {new Date().getUTCFullYear()}</span>
        </footer>
      </div>
    )
  }



export default App;
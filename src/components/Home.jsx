import React from 'react'
import AddTodo from './AddTodo';
import ListGroup from './ListGroup';

const Home = ({todos,deleteTodo,getTodo}) => {
    return (
        <div>
          <h2 className="teal lighten-1 white-text center-align"style={{padding: "2rem 0"}}>
            Task Manager Lite
          </h2>
          <div className="container">
                <AddTodo getTodo={getTodo} />
                <ListGroup todos = {todos} deleteTodo = {deleteTodo}/>
          </div>
        </div>
    )
}

export default Home

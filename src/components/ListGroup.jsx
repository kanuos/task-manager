import React from 'react'
// import ListItem from './ListItem';

const ListGroup = ({todos, deleteTodo}) => {

    
    const list = todos.map( todo =>{
        return (
            <li className="collection-item green-text text-darken-2" 
                key={todo.id}
                style={{textTransform: "capitalize", cursor:"default"}} 
                >
                    {todo.text}  
                <i className="material-icons right red-text text-darken-4"
                   key={todo.id}
                   style={{cursor:"pointer"}}
                   onClick = {() => deleteCurrentTodo(todo.id)}
                >
                    delete
                </i>
            </li>
        )
    });

    const deleteCurrentTodo = id =>{
        deleteTodo(id);
    }

    return (
        <div>
            <h4>
                <span className="left-align">No of tasks : {todos.length}</span>
            </h4>
            <ul className="collection">
                {list}
            </ul>
        </div>
    )
}

export default ListGroup


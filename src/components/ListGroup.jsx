import React from 'react'

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
                   onClick = {() => deleteTodo(todo.id)}
                >
                    delete
                </i>
            </li>
        )
    });


    return (
        <div>
            <h4>
                <span className="left-align">Tasks left : {todos.length}</span>
            </h4>
            <ul className="collection">
                {list}
            </ul>
        </div>
    )
}

export default ListGroup


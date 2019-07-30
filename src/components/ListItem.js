import React from 'react';

const ListItem = (props) => {
    const completeTask = () =>{
        console.table(props);
        props.completeTask()
    }

    
    const removedTodos =() => {
        const updatedTodo = props.todo.filter(todo =>{
            return !todo.isComplete;
        });
        console.log(updatedTodo);
    }

    return ( 
        <li className = "collection-item green-text darken-4"
         onClick = { completeTask }
         > 
            { props.todo.text }
            <i className="material-icons right red-text" onClick={removedTodos}>delete</i>
        </li>  

    )
}

export default ListItem;
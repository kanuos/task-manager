import React, {useState} from 'react'

const Indecision = ({todos}) => {
    const [decision,setDecision] = useState('');
    const [color,setColor] = useState('');
    const decide = () =>{
        if(todos.length){
            const randomIndex = Math.floor(Math.random() * todos.length);
            return  todos[randomIndex].text;
        }
        
    }

    return (
        <div>
            <h2 className="center teal white-text"style={{padding: "2rem 0",margin:0, fontSize:"2.5rem"}}>Indecision</h2>
            <p className="center teal-text text-darken-3 flow-text">
                Let the computer decide your next task...
            </p>
            <div className="container">
                {todos.length ? <h5>{todos.length} tasks left</h5> : <h5>No tasks left.. Phew!</h5>}

                <button className="btn pulse center" style={{margin:"2rem auto"}}
                    onClick={()=>{
                        setDecision(decide());
                        const colors = ['teal','green','red','orange'];
                        const randomColorIndex = Math.floor(Math.random()*colors.length);
                        setColor(colors[randomColorIndex])
                    }}
                >
                    Decide</button>
                <div>
                    {decision ? 
                        <h4 className="center-align">
                            Your next task is &darr; 
                            <div className={`${color}-text`}
                                style={{textTransform: "capitalize"}}>
                                {decision}
                            </div>
                        </h4> : <span></span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Indecision

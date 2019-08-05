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
            <h2 className="center teal white-text" style={{padding:"2rem 0"}}>Indecision</h2>
            
            <div className="container">
                {todos.length ? <h3>{todos.length} tasks left</h3> : <h3>No tasks left.. Phew!</h3>}

                <button className="btn pulse center" 
                    onClick={()=>{
                        setDecision(decide());
                        const colors = ['teal','green','red','orange'];
                        const randomColorIndex = Math.floor(Math.random()*colors.length);
                        setColor(colors[randomColorIndex])
                    }}
                >
                    Decide</button>
                <div>
                    {decision ? <h3>Your next task is : <span className={`${color}-text`}
                    style={{textTransform: "capitalize"}}
                    >{decision}</span></h3> : 
                        <h3></h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default Indecision

import { useState } from "react";
import "../App.css"
function GeeksterPlanner(){

    const [Sub,setSub]=useState("");
    const [hours,setHours]=useState("");
    const [Tasks,setTasks]=useState([]);
   
 
    const handleSubChange = (event) => {
        setSub(event.target.value);
      };
    
      
      const handlehoursChange = (event) => {
        setHours(event.target.value);
      };

     function addTask(e){
        e.preventDefault();
        setTasks([...Tasks,{Sub:Sub , hours:parseInt(hours)}]);
        setSub("");
        setHours("");
     }
     const handleIncrement = (ind) => {
        const updatedTasks = Tasks.map((task, i) => {
            if (i === ind) {
                return { ...task,hours:task.hours + 1 };
            }
            return task;
        });
        setTasks(updatedTasks);
    };
    const handleDecrement = (ind) => {
        const updatedTasks = Tasks.map((task, i) => {
            if (i === ind) {
                return { ...task,hours:task.hours - 1 };
            }
            return task;
        });
        setTasks(updatedTasks);
    };
    
    
    return (
  
       
        <>
          <div className="main-wrapper">
            <h1>Geekster Education Planner</h1>
            <form action="" onSubmit={addTask}>

                <input 
                    type="text" 
                    value={Sub}
                    onChange={ handleSubChange}
                    />

                <input 
                   type="number"
                   value={hours}
                   onChange={handlehoursChange } 
                   />

                <button className="addButton" onClick={addTask}>ADD</button>
                
            </form>
            {Tasks.map((tasks,index)=>(
                    <div className="wrapper" key={index}>
                        <h2 >{tasks.Sub} - {tasks.hours} hours 
                              <span > <button className="change"
                              onClick={()=>handleIncrement(index)}>+
                              </button></span>
                               <span>
                               <button className="change"
                              onClick={()=>handleDecrement(index)}>-
                              </button>
                                </span>
                        </h2>
                    </div>
                ))}
          </div>
        </>
    )
}
export default GeeksterPlanner;
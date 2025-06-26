import React, { useState } from 'react';
export default function TodoApp(){
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const addTask =() =>{
        if(task.trim()){
            setTasks([...tasks, task]);
            setTask('');
        }
    };
    return (
        <div>
            <input type ="text"
            placeholder="Enter Task"
            value ={task}
            onChange ={(e)=>setTask(e.target.value)}/>
            <button onClick={addTask}>Add</button>
            <ol>
                {tasks.map((t,index)=>(
                    <li key={index}>{t}</li>))}
            </ol>
        </div>
    );
}
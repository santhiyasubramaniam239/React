import React, { useReducer, useState } from 'react';
const initialState = [];
function reducer(state,action){
    switch(action.type){
        case 'ADD_TASK':
            return [...state,{id:state.length+1,name:action.payload}];

        case 'DELETE_TASK':
            return state.filter((task)=>task.id !== action.payload);
        default:
            return state;
    }
}
function init(initialState){
    const data = [...initialState,{id:1, name:"Reading"}];
    return data;
}
export default function Todos(){
    

  const[todos,dispatch]=useReducer(reducer, initialState,init);
 
  const AddTask = (e)=>{
    //console.log(e.target.value);
    if(e.key==="Enter"){
        dispatch({type:"ADD_TASK",payload:e.target.value})
      
    }
  }
 
 
   return(
    <div>

      <h3>Task List {todos.length}</h3>
      <label htmlFor="task">Enter Task</label>
      <input type="text" id="task" onKeyDown={(e)=>AddTask(e)}/>
      <ul>
        
           {todos.map(todo=>(
            <li key = {todo.id}>{todo.id}.{todo.name}
            <button onClick={()=> dispatch({type:"DELETE_TASK",payload:todo.id})}>Delete</button>
            </li>))
        }
      </ul>
    </div>
    
   );
   

}
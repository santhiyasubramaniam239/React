import React, {useState, useEffect} from "react";
export default function Counter(){
    const[count, setCount]= useState(0);
    useEffect(()=>{
        document.title = `Count: ${count}`;
        
    },[count]);
    return (
        <div>
           <h1>{count}</h1> 
           <button onClick={()=> setCount(count +1)}>Increment</button>
        </div>
    );
}
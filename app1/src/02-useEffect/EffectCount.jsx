import React, {useState, useEffect} from "react";
export default function Counter1(){
    const[count, setCount]= useState(0);
  
       useEffect(()=>{
         
           console.log("Effect ran!");
        return ()=>{
            console.log("Cleaning up before next effect runs...")
        };

       },[count]);
       return (
           <div>
              <h1>{count}</h1> 
              <button onClick={()=> setCount(count +1)}>Increment</button>
           </div>
       );
   }
    

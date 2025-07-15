import React, { useEffect, useState } from 'react';
export default function UseState(){
  let [number, setNumber]=useState(0);
  useEffect(()=>{
    console.log("Component Rendered")
  })
   return(
    <div>
      <button onClick={()=>setNumber(number+1)}>Click Me <span>{number}</span></button>
     
    </div>
    
   );
   

}
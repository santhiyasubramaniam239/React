import React, { useEffect, useRef } from 'react';
export default function UsingRef(){
  const countRef = useRef(0);
  const spanRef = useRef(null);
  const handle=()=>{
    countRef.current++;
    spanRef.current.innerText=countRef.current
  };

  useEffect(()=>{
    console.log("useRef Component Rendered")
  })
   return(
    <div>
      <button onClick={handle}>useRef <span ref={spanRef}>0</span></button>
     
    </div>
    
   );
   

}
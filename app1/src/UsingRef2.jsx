import React, {  useRef } from 'react';
export default function Focus(){
  
  const inputRef1=useRef(null)
  const inputRef2=useRef(null)
  const inputRef3=useRef(null)
  const handle1=()=>{
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor="gray";
    inputRef2.current.style.backgroundColor="white";
    inputRef3.current.style.backgroundColor="white";
  }
  const handle2=()=>{
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor="blue";
    inputRef1.current.style.backgroundColor="white";
    inputRef3.current.style.backgroundColor="white";
  }
  const handle3=()=>{
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor="yellowgreen";
    inputRef1.current.style.backgroundColor="white";
    inputRef2.current.style.backgroundColor="white";
  }
   return(
    <div>
     <input type ="text" ref={inputRef1}/>
     <button onClick={handle1}>Click</button>
     <br/>
     <input type ="text" ref={inputRef2}/>
     <button onClick={handle2}>Click</button>
     <br/>
     <input type ="text" ref={inputRef3}/>
     <button onClick={handle3}>Click</button>
     <br/>
    </div>
    
   );
   

}
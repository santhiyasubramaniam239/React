import React, { useState } from 'react';
export default function NameForm(){
   const [name, setName] = useState('');
   return(
    <div>
        <input type ="text" placeholder="Enter your name"
        value={name}
        onChange={(e)=> setName(e.target.value)}/>
        <p>Hello , {name}!</p>
    </div>
   );
   

}
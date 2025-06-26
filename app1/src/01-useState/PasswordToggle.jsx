import React, { useState } from 'react';
export default function ShowPassword(){
     const [show, setShow]=useState(false);
     return(
        <div>
            <input type = {show ? 'text':'password'}
            placeholder="Enter password"/>
            <button onClick={()=> setShow(!show)}>
                {show ? 'Hide' : 'show'} Password
            </button>

        </div>
     );
    }

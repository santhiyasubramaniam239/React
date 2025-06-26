import React, { useState } from 'react';
export default function DarkToggle(){
    const [darkMode, setDarkMode] = useState(false);
    const style = {
        backgroundColor: darkMode ? '#333' : '#fff',
        color:darkMode ? '#fff': '#000',
        padding:'20px',
        textAlign:'center'
    };
    return(
        <div style={style}>
            <p>{darkMode ? "Dark Mode ON":"Light Mode ON"}</p>
         <button onClick={()=>setDarkMode(!darkMode)}>
            Toggle Mode
         </button>
        </div>
    );
}
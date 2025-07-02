import React,{useState} from "react";
export default function UseStateString(){
    const [name, setName] = useState("");
    return(
        <div>
            <h3>Name Input</h3>
            <input
            placeholder="Enter name"
            value={name}
            onChange={(e)=> setName(e.target.value)}/>
       <p>Your name:{name}</p>
        </div>
    );
}
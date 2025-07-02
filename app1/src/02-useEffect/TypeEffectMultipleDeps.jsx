import React,{useState, useEffect} from "react";
export default function EffectMultipleDeps(){
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    useEffect(()=>{
        console.log("Name or Age changed");
    },[name, age]);
    return (
        <div>
            <h3>Multiple Dependencies</h3>
            <input placeholder ="Name" onChange={(e)=>setName(e.target.value)}/>
            <input placeholder = "Age"
            type="number"
            onChange={(e)=>setAge(e.target.value)}
            style={{marginLeft:"10px"}}/>
            </div>
    );
}
import React,{useState} from "react";
export default function UseStateObject(){
    const [user, setUser]= useState({name:"", age:""});
    return (
        <div>
            <h3>User Form</h3>
            <input placeholder="Name"
            value ={user.name}
            onChange={(e)=> setUser({...user, name:e.target.value})}/>
            <input type="number"
            placeholder="Age"
            value={user.age}
            onChange={(e)=> setUser({...user, age:e.target.value})}
            style={{marginLeft:"10px"}}/>
            <p>Name:{user.name}, Age:{user.age}</p>
        </div>
    );
}
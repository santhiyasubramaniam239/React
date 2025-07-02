import React,{useState, useEffect} from "react";
export default function EffectFetchUser(){
    const [userId, setUserId]= useState(1);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log("User data fetched:", data.name);
    });
    },[userId]);
    return (
        <div>
            <h3>User ID: {userId}</h3>
            <button onClick={()=> setUserId(userId+1)}>Next User</button>
        </div>
    );
}
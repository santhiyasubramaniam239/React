import React,{useState, useEffect} from "react";
export default function EffectFetchUser(){
    const [userId, setUserId]= useState(1);
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[company, setCompany] = useState('');
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res)=>res.json())
    .then((data)=>{
        
        setName(data.name);
        setEmail(data.email);
        setCompany(data.company.name);
       
    });
    },[userId]);
   
    return (
        <div>
            <h3>User ID: {userId}</h3>
            <button onClick={()=> setUserId(userId+1)} >Next User</button>
            <div>
              <p>Name:{name}</p> 
              <p>Email:{email}</p>
              <p>Company:{company}</p>
             </div>
        </div>
       
    );
}
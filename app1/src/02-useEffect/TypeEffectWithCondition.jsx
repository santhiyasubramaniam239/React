import React,{useEffect,useState} from "react";
export default function EffectWithCondition(){
    const[isLoggedIn, setIsLoggedIn]=useState(false);
    useEffect(()=>{
        if(isLoggedIn){
            console.log("User logged in");
        }
    }, [isLoggedIn]);
    return (
      <div>
        <h3>Login Status : {isLoggedIn ? "Logged In" : "Logged Out" }</h3>
      <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      </div>
    );
   
}
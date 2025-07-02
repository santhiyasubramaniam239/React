import React,{useEffect} from "react";
export default function EffectOnce(){
    useEffect(()=>{
        console.log("useEffect - runs only once (on mount");
    },[]);

    return <h3>Effect runs once - check console</h3>;
    }

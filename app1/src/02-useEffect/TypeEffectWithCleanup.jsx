import React,{useEffect} from "react";
export default function EffectWithCleanup(){
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Timer running...");
        },1000);
        return ()=>{
            clearInterval(timer);
            console.log("Timer cleared");
        };
    }, []);
    return <h3>Timer set/cleared - check console</h3>;
}
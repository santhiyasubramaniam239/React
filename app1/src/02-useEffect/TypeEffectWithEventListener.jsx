import React, {useEffect} from "react";
export default function EffectWithEventListener(){
    useEffect(()=>{
        const handleResize=()=>{
            console.log("Window resized:", window.innerwidth);
        };
        window.addEventListener("resize", handleResize);
   return()=>{
    window.removeEventListener("resize", handleResize);
    console.log("Resize listener removed");  
};
    },[]);
    return <h3>Resize window - check console</h3>;
}
import { useEffect } from "react";

export default function Cleanup(){

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Running every second");},1000);
         return ()=>{
           clearInterval(timer); 
           console.log("Running stopped");
         };
        },[]);
    return <h1>Clock is running</h1>;
} 
import React,{useState} from "react";
function expensiveCalculation(){
    console.log("Calculating only once...");
    return 100*10;   
}
export default function UseStateFunctionInit(){
    const[result, setResult]= useState(()=>expensiveCalculation())
   return(
    <div>
        <h3>Function Initializer</h3>
        <p>Calculated result:{result}</p>
    </div>
   )
}
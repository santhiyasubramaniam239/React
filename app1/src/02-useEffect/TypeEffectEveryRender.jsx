import React,{useEffect,useState} from "react";
export default function EffectEveryRender(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect - runs after every render");
    });
    return(
        <div>
            <h3>Every Render</h3>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>

    );
}
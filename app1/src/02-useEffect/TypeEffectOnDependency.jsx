import React, {useState, useEffect} from "react";
export default function EffectOnDependency(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect - count changed to", count);
    },[count]);
    return (
        <div>
            <h3>Effect on Count Change</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
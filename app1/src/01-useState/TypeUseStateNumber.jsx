import React,{useState} from "react";
export default function UseStateNumber(){
    const[count, setCount] = useState(0);
    return (
        <div>
            <h3>Number Counter</h3>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>
                Increase
            </button>
        </div>
    );
}
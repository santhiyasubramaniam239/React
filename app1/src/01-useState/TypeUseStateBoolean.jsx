import React,{useState} from "react";
export default function UseStateBoolean(){
    const[isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <h3>Toggle Visibility</h3>
            <button onClick={()=> setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <p>Now you see me!</p>}
        </div>
    );
}
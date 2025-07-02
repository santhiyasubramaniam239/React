import React, {useState} from "react";
export default function UseStateArray(){
    const[items, setItems]= useState([]);
    const addItem = () =>{
        setItems([...items, `Item${items.length+1}`]);
    };
    return (
        <div>
            <h3>Array of Items</h3>
            <button onClick={addItem}>Add Item</button>
        <ul>
            {items.map((item, index)=>(
                <li key ={index}>{item}</li>
            ))}
        </ul>
        
        </div>
    );
}
import React, {  useState } from 'react';
export default function StateApp(){
   const [items,setItems] = useState([]);
   const addItem=(itemName)=>{
    setItems([...items,{id:Date.now(),name:itemName}])
   };
   const deleteItem=(id)=>{
    setItems(items.filter(item=>item.id!== id));
   };
   const updateItem=(id,itemName)=>{
    setItems(items.map((item)=>item.id===id?{...item,name:itemName}:item))
   };
   return(
    <div>
      <h2>Product List</h2>
      <button onClick={()=>addItem(prompt("Enter Item Name"))}>Add Item</button>
      <ul>
         {items.map((item)=><li key={item.id}>
            {item.name}
            <button onClick={()=>updateItem(item.id,prompt("Enter Item Name",item.name))}>Update</button>
            <button onClick={()=>deleteItem(item.id)}>Delete</button>
         </li>)}
      </ul>
     
    </div>
    
   );
   

}
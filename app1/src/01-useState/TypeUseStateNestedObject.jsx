import React,{useState} from "react";
export default function UseStateNestedObject(){
    const[profile, setProfile] = useState({
        name:"",
        address:{
            city:"",
            zip:""
        }
    });
    return(
        <div>
            <h3>Nested Object</h3>
            <input 
            placeholder="City"
            value={profile.address.city}
            onChange={(e)=>setProfile({
                ...profile,
                address:{...profile.address, city: e.target.value}
            })
            }/>
            <p>City:{profile.address.city}</p>
        </div>
    );
}
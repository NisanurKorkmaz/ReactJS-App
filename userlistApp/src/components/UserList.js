import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";


function UserList({setActiveUserId}){
    const [users, setUsers]= useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        //setLoading(true);
        axios(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => setUsers(res.data))
            .finally(() => setLoading(false)); 


    },[])

    return(
       <div>
        <h2>Kullanicilar</h2>
        {
            loading && <div> Yukleniyor </div>
        }
        <ul className="user-list">
        {
        users.map((user) =>(
            <li key={user.id} onClick={() => setActiveUserId(user.id)}>{user.name}</li>
            ))
        }
        </ul>
        
    </div> 
    );

    
}

export default UserList;
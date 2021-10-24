import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Users = () => {
    const [user,setuse] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:5000/users')
     .then( res => res.json())
     .then(data => setuse(data))
  },[])


 // Delete Handeler
 const handledelteuser = (id) =>{
            
    const proceed = window.confirm("Are Sure to Delete?")
     
    if(proceed){
        const url = `http://localhost:5000/users/${id}`;
        fetch(url,{
            method: 'DELETE',
        })

        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                const removeUser = user.filter(user => user._id !==id);
                setuse(removeUser)
            }
        }) 
    }


    }

    return (
        <div>
            <h2>{user.length}</h2>
          {
              user.map((user) => <li
               key={user._id}
              >Name: {user.name} email: {user.email}
               <Link to={`/users/update/${user._id}`} >update</Link>
              <button onClick={()=> handledelteuser(user._id)}>x</button>
              </li> )
          }
        </div>
    );
};

export default Users;
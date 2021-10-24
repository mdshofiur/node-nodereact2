import React, { useRef } from 'react';

const AddUser = () => {
   
    const nameRef = useRef();
    const emailRef = useRef();

    const handleUser = (e) => {
    const name = nameRef.current.value
    const email = emailRef.current.value

    const newUser = {name,email}

    fetch('http://localhost:5000/users',{
       method: 'post',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(newUser),
    })
    
    .then(res => res.json())
    .then(data => {
        if(data.insertedId) {
              alert("Successfully added the user")
              e.target.reset()
        }
    })


    e.preventDefault(); 
    }

    return (
        <div>
            <h2>This is Add User</h2>
            <form action="" onSubmit={handleUser}>
                <label htmlFor="name">Name</label> <br />
                <input ref={nameRef} type="text" /> <br />
                <label htmlFor="">Email</label>  <br />
                <input ref={emailRef} type="email" /> <br />
                <input type="submit" value="Add New" />
            </form>
        </div>
    );
};

export default AddUser;
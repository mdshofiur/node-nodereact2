import  {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';

const UpdateUser = () => {

    const {id} = useParams();
    const [user,setUser] = useState({});

    useEffect(() => {
       const url = `http://localhost:5000/users/${id}`
       fetch(url)
       .then(res => res.json())
       .then(data => setUser(data))
    },[id])



    const handleName = e => {
      const UpdateName =  e.target.value;
      const updateUser = {name: UpdateName,email: user.email}
      setUser(updateUser)
    }

    const handleemail = e => {
        const Updateemail =  e.target.value;
        const updateUser = {...user};
        updateUser.email = Updateemail;
        setUser(updateUser);
    }

    const HandleUpdate = e => {
        const proceed = window.confirm("Are Sure to to Update?")

        if(proceed){
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
              method: 'PUT',
              headers: {
               "content-Type": 'application/json'
              },
              body: JSON.stringify(user)
            })
            .then(res => res.json()
            .then( data => {
               if(data.modifiedCount > 0) {
                   alert('Updated Complete')
                   setUser({})
               }
            }))
        }
      

        e.preventDefault();
    }


 
    return (
        <div>
            <h2>This is Update User</h2>
            <small>{id}</small>
            <form action="" onSubmit={HandleUpdate}>
                 <label htmlFor="name">Name</label> <br />
                <input  type="text" onChange={handleName} value={user.name || ''} /> <br />
                <label htmlFor="">Email</label>  <br />
                <input  type="email" onChange={handleemail} value={user.email || ''}/> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};


export default UpdateUser;
import  {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';

const UpdateUser = () => {

    const {id} = useParams();
    const [user,setUser] = useState();

    useEffect(() => {
       const url = `http://localhost:5000/users/${id}`
       fetch(url)
       .then(res => res.json())
       .then(data => setUser(data))
    },[])

    console.log(user);
    return (
        <div>
            <h2>This is Update User</h2>
            <small>{id}</small>
        </div>
    );
};


export default UpdateUser;
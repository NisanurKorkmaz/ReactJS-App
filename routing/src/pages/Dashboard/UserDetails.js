import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

function UserDetails() {

    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data))
    }, [id]);
  return (
    <div>
        <h2>Kullanici Detaylari </h2>
        <pre> {JSON.stringify(user, null, 2)}</pre>

        <Link to={`/users/${Number(id) +1}`}>Sonraki Kullanici</Link>
    </div>
  )
}

export default UserDetails

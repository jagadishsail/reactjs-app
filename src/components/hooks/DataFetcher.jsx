import React, { useEffect, useState } from "react";

const DataFetcher = () => {

    const [users, setUsers] = useState(null);

    useEffect ( () => {

        //fetch users data from API
        fetch('https://reqres.in/api/users?page=2')
            .then( response => response.json())
            .then( result => setUsers(result))

    }, []) //dependancy

    return <div>
         <h3>Names</h3>
        {users ? <p>{users.data.map(user => <div>{user.last_name }</div>)}</p> : <p>Loading...</p>}

    </div>
}

export default DataFetcher;
import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiExample = () => {

    const [users, setUsers] = useState(null);
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect( ()=> {
        //GET request
        getUsers();

       //POST request
       //createNewUser();

       //Update request
      // updateUser(10);

       //DELETE request
       //deleteUser(10);

    }, []
)

const getUsers = () => {
    //API call to fetch all the users
    axios.get(url)
         .then( response => setUsers(response.data))
         .catch( error => {
            console.log(error);
         })
}

const createNewUser = () => {
    //API call to fetch all the users
    axios.post(url, {name: "Krishna 2", email: "krishna2@gmail.com", address:"Bangalore new"})
         .then( response => 
            console.log(response) //status 201, its resouce is created
        )
         .catch( error => {
            console.log(error);
         })
}

const updateUser = async (userId) => {
    //API call to fetch all the users
    //https://jsonplaceholder.typicode.com/users/10
    try {
      let response = await axios.put(url +`/`+`${userId}`, {name: "Krishna Updated", email: "krishna@gmail.com", address:"Goa 343545"})
      setUsers(response.data);
    }catch(error){
        console.log("Error occured during update user "+ userId);
    }
   
}

const deleteUser = (userId) => {
    //API call to fetch all the users
    //https://jsonplaceholder.typicode.com/users/10
    axios.delete(url +`/`+`${userId}`)
         .then( response => 
            console.log(response) //status 200, its resouce is updated successfully
        )
         .catch( error => {
            console.log(error);
         })
}



return (
    
<div>
{users && users.map(item => (
  <div key={item.id}>
    {item.name}
  </div>
))}  
</div>
)


}

export default ApiExample;
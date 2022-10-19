import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {DatabaseNetworkPoint} from '@icon-park/react';
import axios from "axios"

export default function Register() {
    let navigate = useNavigate();
    const [register, setRegister] = useState(false);
    const [msg, setMsg] = useState("");

    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        age:1,
        gender:"",
    })
  


    const handleChange = (event) => {
      setUser({
        ...user,
        [event.target.id]: event.target.value,
      });
    }
    

    const handleSubmit = (event) => {
        event.preventDefault()
        const configuration = {
          method: "post",
          url: "http://localhost:2024/register",
          data: {
            email : user.email,
            password : user.email,
            age : user.age,
            username : user.username,
            gender : user.gender,
          },
        };
      
        axios(configuration)
  .then((result) => {
    if(result.status === 200){
      setRegister(true);
    }
    else{
      setMsg(result.data.message)
      alert(msg)
    }
  })
  .catch((error) => {
    // Error
    if (error.response) {
        alert(error.response.data.message);
    } else if (error.request) {
        console.log("The request was made but no response was received") 
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);
});

if(register){
  navigate("/home")
}


}


  
  return (
    <div className='container'>
      <div className='left'>
       <div className='logo'>
       <DatabaseNetworkPoint theme="outline" size="150" fill="#F5F5F5"/>
        <h1>WonderHit</h1>
       </div>
          <form className='form' onSubmit={handleSubmit}>
          <input placeholder='Username' id='username' value={user.username} className='field' type="text" onChange={handleChange} />
          <input placeholder='Email' id='email' value={user.email} className='field' type="email" onChange={handleChange} />
          <input placeholder='Password' id='password' value={user.password} className='field' type="password" onChange={handleChange} />
          <input placeholder='Age' id='age' value={user.age} className='field' type="number" onChange={handleChange} />
          <input placeholder='Gender' id='gender' value={user.gender} className='field' type="text" onChange={handleChange} />
          <button className='submit' type="submit">Register</button>
          <h3 className='routing1'>You already have an account ? <Link className='rot' to="/">Login</Link></h3>
        </form>
      </div>
      <img className='right' src='https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
    </div>
  )
}

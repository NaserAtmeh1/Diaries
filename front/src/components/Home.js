import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {DatabaseNetworkPoint} from '@icon-park/react';
import axios from "axios"

export default function Home() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [msg, setMsg] = useState("");


      

const handleSubmit = (event) => {
  event.preventDefault()
  const configuration = {
    method: "post",
    url: "http://localhost:2023/login",
    data: {
      email,
      password
    },
  };

  axios(configuration)
  .then((result) => {
    if(result.status === 200){
      setLogin(true)
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

if(login){
  navigate("/feed")
}


}



  return (
    <div className='container'>
      <div className='left1'>
       <div className='logo'>
       <DatabaseNetworkPoint theme="outline" size="150" fill="#F5F5F5"/>
        <h1>WonderHit</h1>
       </div>
          <form className='form1' onSubmit={(e)=>handleSubmit(e)}>
          <input placeholder='Email' id='email' value={email} className='field' type="email" onChange={(e) => setEmail(e.target.value)} />
          <input placeholder='Password' id='password' value={password} className='field' type="password" onChange={(e) => setPassword(e.target.value)} />
            <button className='submit' >Login</button>
            <h3 className='routing1'>You don't have an account ? <Link className='rot' to="/register">Register</Link></h3>
          </form>
         
      </div>
    </div>

    )
}

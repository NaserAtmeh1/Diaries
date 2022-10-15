import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {DatabaseNetworkPoint} from '@icon-park/react';
import axios from "axios"

export default function Register() {

    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        age:0,
        gender:"",
    })
    const [file, setFile] = useState(null)
    const [img,setImg] = useState("")
  


    const handleChange = (event) => {
      setUser({
        ...user,
        [event.target.id]: event.target.value,
      });
    }
      

    privewFile = file => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend(() => {
        setImg(reader.result)
        console.log(img);

      })
    }

    const handleFile = (event) => {
        const pic = event.target.files[0]
        setFile(pic)
        privewFile(file)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(user);
        console.log(file);
      }

  
  return (
    <div className='container'>
      <div className='left'>
       <div className='logo'>
       <DatabaseNetworkPoint theme="outline" size="150" fill="#333"/>
        <h1>WonderHit</h1>
       </div>
          <form className='form' onSubmit={handleSubmit}>
          <input placeholder='Username' id='username' value={user.username} className='field' type="text" onChange={handleChange} />
          <input placeholder='Email' id='email' value={user.email} className='field' type="email" onChange={handleChange} />
          <input placeholder='Password' id='password' value={user.password} className='field' type="password" onChange={handleChange} />
          <input placeholder='Age' id='age' value={user.age} className='field' type="number" onChange={handleChange} />
          <input placeholder='Gender' id='gender' value={user.gender} className='field' type="text" onChange={handleChange} />
          <div className='profilePic'>
            <div className='Photo'>
              <img className='Photo' src={img} />
            </div>
            <input className='field2' id='file' type="file" onChange={(e) => handleFile(e)} />
            <label htmlFor = "file"  className='uploadPic' >+</label>
          </div>
          <button className='submit' type="submit">Register</button>
          <h3 className='routing'>You already have an account ? <Link className='rot' to="/">Login</Link></h3>
        </form>
      </div>
      <img className='right' src='https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
    </div>
  )
}

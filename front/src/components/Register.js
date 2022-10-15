import React from 'react'
import {Link} from "react-router-dom"
import {DatabaseNetworkPoint} from '@icon-park/react';
import axios from "axios"

export default function Register() {

  return (
    <div className='container'>
      <div className='left'>
       <div className='logo'>
       <DatabaseNetworkPoint theme="outline" size="150" fill="#333"/>
        <h1>WonderHit</h1>
       </div>
          <form className='form'>
          <input placeholder='Username' className='field' type="text" />
          <input placeholder='Email' className='field' type="email" />
          <input placeholder='Password' className='field' type="password" />
          <input placeholder='Age' className='field' name='age' type="number" />
          <input placeholder='Gender' className='field' name='gender' type="text" />
          <div className='profilePic'>
            <div className='Photo'></div>
            <input className='field2' id='file' type="file" />
            <label for = "file"  className='uploadPic' >+</label>
          </div>
          <button className='submit'>Register</button>
          <h3 className='routing'>You already have an account ? <Link className='rot' to="/">Login</Link></h3>
        </form>
      </div>
      <img className='right' src='https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
    </div>
  )
}

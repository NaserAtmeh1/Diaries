import React from 'react'
import {Link} from "react-router-dom"
import {DatabaseNetworkPoint} from '@icon-park/react';

export default function Register() {
  return (
    <div className='container'>
      <div className='left'>
      <DatabaseNetworkPoint theme="outline" size="24" fill="#333"/>
          <form className='form'>
          <input className='field' type="text" />
          <input className='field' type="email" />
          <input className='field' type="password" />
          <input className='field' name='age' type="number" />
          <input className='field' name='gender' type="text" />
          <div className='profilePic'>
            <input className='field' id='file' type="file" />
            <label for = "file"  className='uploadPic' >+</label>
          </div>
          <button className='submit'>Register</button>
          <h3 className='routing'>You already hava an account ? <Link to="/">Login</Link></h3>
        </form>
      </div>
      <img className='right' src='https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
    </div>
  )
}

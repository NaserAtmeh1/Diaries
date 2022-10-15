import React from 'react'
import {Link} from "react-router-dom"
import {DatabaseNetworkPoint} from '@icon-park/react';

export default function Home() {
  return (
    <div className='container'>
      <div className='left1'>
       <div className='logo'>
       <DatabaseNetworkPoint theme="outline" size="150" fill="#333"/>
        <h1>WonderHit</h1>
       </div>
          <form className='form1'>
            <input placeholder='Email' className='field' type="email" />
            <input placeholder='Password' className='field' type="password" />
            <button className='submit'>Login</button>
            <h3 className='routing'>You don't have an account ? <Link className='rot' to="/register">Register</Link></h3>
          </form>
      </div>
      <img className='right' src='https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
    </div>

    )
}

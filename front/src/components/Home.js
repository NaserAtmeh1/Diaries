import React from 'react'
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div className='container'>
        <div className='left'>
            <img src='' className='logo' /> 
            <form className='form1'>
                <input className='field' type="email" />
                <input className='field' type="password" />
            </form>
            <button className='submit'>Login</button>
            <h3>You dont have an account ? <Link to="/register">Register</Link></h3>
        </div>
        <img className='right' src='https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />

  </div>

    )
}

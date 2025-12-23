import React from 'react'
import './AdminLogin.css'
import df from '../../../public/DF.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function AdminLogin() {
  return (
    <div className='adminPage'>
      <img className='logo' src={df} alt="" />
      <h1>Admin login</h1>
       <form  className='LoginForm'>
        <label htmlFor="adminlogin">Login:</label>
        <input id='adminlogin' placeholder='Enter your login...' type="text" />
        <label htmlFor="adminpassword">Password:</label>
        <input id='adminpassword' placeholder='Enter your password...' type="password" />

        <button type='submit'>Login</button>
       </form>
    </div>
  )
}

export default AdminLogin
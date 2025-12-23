import React from 'react'
import './AdminLogin.css'
import df from '../../../public/DF.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

function AdminLogin() {

   const navigate = useNavigate()
   const [login, setLogin] = useState("")
   const [password, setPassword] = useState("")

   const loginAdmin = async (e)=>{
     e.preventDefault();
     try {
        let res = await axios.get("https://68c65fd9442c663bd026db89.mockapi.io/admins")
        const admin = res.data.find(
          (a) => a.login === login && a.password === password
        );
        if (!admin) {
          toast.error("Admin not found or password incorrect");
          return;
        }
        localStorage.setItem("admin", JSON.stringify(admin));
        localStorage.setItem("token", admin.token)
        toast.success("Login successfully");
        navigate("/adminpanel")
     } catch (error) {
      console.error(error);
      toast.error("Server error");
     }
   }
  return (
    <div className='adminPage'>
      <img className='logo' src={df} alt="" />
      <h1>Admin login</h1>
       <form onSubmit={loginAdmin} className='LoginForm'>
        <label htmlFor="adminlogin">Login:</label>
        <input onChange={(e) => setLogin(e.target.value)} id='adminlogin' placeholder='Enter your login...' type="text" />
        <label htmlFor="adminpassword">Password:</label>
        <input onChange={(e) => setPassword(e.target.value)} id='adminpassword' placeholder='Enter your password...' type="password" />

        <button type='submit'>Login</button>
       </form>
       
    </div>
  )
}

export default AdminLogin
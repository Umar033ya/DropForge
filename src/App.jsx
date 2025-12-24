import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LayOut from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import CaseOpen from './pages/CaseOpen/CaseOpen.jsx'
import ProtectRout from './components/Protect Rout/ProtectRout.jsx'
import Login from './pages/Login/Login.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Withraw from './pages/Withdraw/Withraw.jsx'
import AdminLogin from './pages/AdminLogin/AdminLogin.jsx'
import AdminPanel from './pages/AdminPanel/Adminpanel.jsx'
import Order from './pages/Order/Order.jsx'
import Instruction from './pages/Instruction/Instruction.jsx'
import Rank from './pages/Rank/Rank.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
   const [data, setData] = useState([])

   const fetchData = async()=>{
    try {
      let res = await fetch("https://api.npoint.io/e66912ff7bfdbbef988b")
      let data = await res.json()
      setData(data.skins)
    } catch (error) {
      console.log(error, error.message);   
    }
   }
   useEffect(()=>{
    fetchData()
   }, [])
  return (
   <>
     <Routes>
      <Route path='/' element={<ProtectRout><LayOut > <Home  data={data}/></LayOut></ProtectRout>}></Route>
      <Route path='/caseopen' element={<ProtectRout><LayOut ><CaseOpen></CaseOpen></LayOut></ProtectRout>}></Route>
      <Route path='/profile' element={<ProtectRout><LayOut ><Profile></Profile></LayOut></ProtectRout>}></Route>
      <Route path='/withraw' element={<ProtectRout><LayOut ><Withraw></Withraw></LayOut></ProtectRout>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/adminlogin' element={<AdminLogin/>}></Route>
      <Route path='/adminpanel' element={<ProtectRout><AdminPanel></AdminPanel></ProtectRout>}>
        <Route path='order' element={<Order/>}/>
        <Route path='instruction' element ={<Instruction/>}/>
        <Route path='rank' element={<Rank/>}/>
      </Route>
    </Routes>
    <ToastContainer position="top-right" autoClose={3000} />
   </>
    
  )
}

export default App

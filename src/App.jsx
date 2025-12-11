import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LayOut from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import CaseOpen from './pages/CaseOpen/CaseOpen.jsx'
import ProtectRout from './components/Protect Rout/ProtectRout.jsx'
import Login from './pages/Login/Login.jsx'
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
    <Routes>
      <Route path='/' element={<ProtectRout><LayOut > <Home  data={data}/></LayOut></ProtectRout>}></Route>
      <Route path='/caseopen' element={<ProtectRout><LayOut ><CaseOpen></CaseOpen></LayOut></ProtectRout>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default App

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
function App() {
   const [coin, setCoin] = useState(0)
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
      <Route path='/' element={ <Home coin={coin} data={data}/>}></Route>
    </Routes>
  )
}

export default App

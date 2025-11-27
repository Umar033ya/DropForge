import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
function App() {
   const [coin, setCoin] = useState(0)
  return (
    <Routes>
      <Route path='/' element={ <Home coin={coin}/>}></Route>
    </Routes>
  )
}

export default App

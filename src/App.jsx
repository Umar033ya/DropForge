import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
function App() {
   const [coin, setCoin] = useState(0)
  return (
    <>
     <Header coin= {coin}/>
    </>
  )
}

export default App

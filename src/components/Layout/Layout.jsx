import React from 'react'
import Header from '../Header/Header.jsx'
function Layout({children, coin}) {
  return (
    <div>
     <Header coin= {coin}/>
     {children}
    </div>
  )
}

export default Layout
import React from 'react'
//components
import Header from '../components/Header'

function Layout({children}) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default Layout
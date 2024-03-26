import React from 'react'
//components
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
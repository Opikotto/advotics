import React from 'react'
import Header from '../view/Header'

const Layout = (props) => {
  return (
    <main>
      <Header />
       <div>
           <div className="container">{props.children}</div>
      </div>
    </main>
  )
}

export default Layout

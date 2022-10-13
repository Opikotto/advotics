import React from 'react'
import logo from '../../src/assets/icon/advotics-logo.png'
import userIcon from '../../src/assets/icon/Profile.png'
import logout from '../../src/assets/icon/logout.png'
const Header = () => {
     return (
          <header>
               <div className="container">
                    <div className="flex">
                         <div className="parent-logo">
                              <img src={logo} alt="Logo" className='logo big'/>
                              <div className="childer-smaill">power by 
                              <img className="logo smaill" src={logo} alt="Logo" />
                         </div>
                         </div>
                         <div className="profile">
                              <div className="username">
                                   <h6>Username</h6>
                                   <p>Company Name</p>
                              </div>
                              <div className="icon-name">
                                   <img src={userIcon} alt="Logo" className='logo'/>
                              </div>
                              <div className="log-out">
                                    <img src={logout} alt="Logo" className='logo'/>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     )
}

export default Header

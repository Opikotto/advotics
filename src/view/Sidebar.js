import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Dashboardicon from '../../src/assets/icon/dashboard_icon.png'

const Sidebar = () => {
  return (
     <div className="sidebar">
          <div id="sidebar-wrapper">
          <SideNav>
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
               <NavIcon>
                    <div className="icon_dashboard">
                           <img className="logo smaill" src={Dashboardicon} alt="Logo" />
                    </div>
                    
               </NavIcon>
              <NavText>Dashboard</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>

          </div> 
     </div>

  )
}

export default Sidebar

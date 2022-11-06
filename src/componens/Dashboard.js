import React from 'react'
import Layout from '../view/Layout'
import Dropdown from './Dropdown'
import GlobalData from './GlobalData'

const Dashboard = () => {
     return (
          <Layout>
               <div className="container content">
                    <>
                         <div className="row"> 
                              <div className="col-12 timepicker">
                              <GlobalData />
                              <Dropdown />
                              </div>
                         </div>
                    </>
               </div>
          </Layout>
     )
}

export default Dashboard

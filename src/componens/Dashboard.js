import React, { useState, useRef, useEffect } from 'react'
import Layout from '../view/Layout'
import { DateRangePicker,createStaticRanges  } from 'react-date-range';
import Sidebar from '../view/Sidebar'
import help from '../../src/assets/icon/Help.png'
import format from 'date-fns/format'
import IconMoreFilled from '../assets/icon/IconMoreFilled.png'
import SalesTurnover from '../assets/icon/SalesTurnover.png'
import DownArrow from '../assets/icon/DownArrow.png'
import {
     addDays,
     endOfDay,
     startOfDay,
     startOfMonth,
     endOfMonth,
     addMonths,
     startOfWeek,
    } from "date-fns";
import Chart from './Chart';
import Product from './Product';
import Competitor from './Competitor';

const Dashboard = () => {

     const defineds = {
          startOfWeek: startOfWeek(new Date()),
          startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
          startOfToday: startOfDay(new Date()),
          startOfLastSevenDay: startOfDay(addDays(new Date(), -7)),
          endOfToday: endOfDay(new Date()),
          startOfYesterday: startOfDay(addDays(new Date(), -1)),
          endOfYesterday: endOfDay(addDays(new Date(), -1)),
          startOfMonth: startOfMonth(new Date()),
          endOfMonth: endOfMonth(new Date()),
          startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
          endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
      };
      const sideBarOptions = () => {
          const customDateObjects = [
             
              {
                  label: 'Today',
                  range: () => ({
                      startDate: defineds.startOfToday,
                      endDate: defineds.endOfToday,
                  })
              },
              {
               label: 'Yesterday',
               range: () => ({
                   startDate: defineds.startOfYesterday,
                   endDate: defineds.startOfYesterday
               })
           },
              {
                  label: 'Last 7 Days',
                  range: () => ({
                      startDate: defineds.startOfLastSevenDay,
                      endDate: defineds.endOfToday
                  })
              },
            
              {
                  label: 'This Month',
                  range: () => ({
                      startDate: defineds.startOfMonth,
                      endDate: defineds.endOfMonth
                  })
              },
              {
                  label: 'Last Month',
                  range: () => ({
                      startDate: defineds.startOfLastMonth,
                      endDate: defineds.endOfLastMonth
                  })
              },
              {
               label: 'Custom',
               range: () => ({
                    startDate: defineds.startOfToday,
                    endDate: defineds.endOfToday
                })
           }
          ];
       
          return customDateObjects;
      };
     
     const [range, setRange] = useState([
          {
               startDate: new Date(),
               endDate: addDays(new Date(), 0),
               key: 'selection'
          }
     ])
    
     const sideBar = sideBarOptions();
     const staticRanges = [
          ...createStaticRanges(sideBar)
      ];
     const [open, setOpen] = useState(false);
     const refOne = useRef(null);
     const [getclickperiod,getClickPeriod] = useState("");
    
     useEffect(() => {
          document.addEventListener("keydown", handleHidden, true);
          document.addEventListener("click", hideClickOut, true);
     }, []);

     const handleHidden = (e) => {
          if (e.key === "Escape") {
               setOpen(false)
          }
     }
    
     const hideClickOut = (e) => {
          if (refOne.current && !refOne.current.contains(e.target)) {
               setOpen(false)
               setRange([{
                    startDate: new Date(),
                    endDate: addDays(new Date(), 0),
                    key: 'selection'
               }])
          }       
     }
     const apply = () => {
          setOpen(false)
          getClickPeriod(`${format(range[0].startDate, "MMMM dd yyyy")} - ${format(range[0].endDate, "MMMM dd yyyy")}`)
     }
     const close = () => {
          setOpen(false)
          setRange([{
               startDate: new Date(),
               endDate: addDays(new Date(), 0),
               key: 'selection'
          }])
          getClickPeriod(`${format( new Date(), "MMMM dd yyyy")} - ${format(new Date(), "MMMM dd yyyy", "MMMM dd yyyy")}`)
     }
     const handleOnChange = (range)=> {
          setRange([range.selection])
     }
   
     return (
          <Layout>
               <div className="container content">
                    <>
                         <div className="row">
                              <div className="col-3">
                              <Sidebar />
                              <div className="dashboard">
                                  <h3>Dashboard</h3>
                              </div>
                              </div>
                              <div className="col-9 timepicker">
                                  <span>
                                   <input     
                                        value={getclickperiod ? getclickperiod :`${format( new Date(), "MMMM dd yyyy")} - ${format(new Date(), "MMMM dd yyyy", "MMMM dd yyyy")} `}
                                        readOnly
                                        id="timePicker"
                                        onChange={hideClickOut}
                                        className="form-control"
                                        onClick={() => setOpen(open => !open)}
                                   />
                                   </span>
                                   <div ref={refOne} className="parent-date-range">
                                        {open &&
                                        <div className="content-date">
                                             <DateRangePicker
                                                  onChange={handleOnChange}
                                                  editableDateInputs={true}
                                                  allowClear={false}
                                                  moveRangeOnFirstSelection={false}
                                                  ranges={range}
                                                  selected={new Date()}
                                                  months={2}
                                                  direction="horizontal"
                                                  maxDate={startOfDay(addDays(new Date(),-1))}
                                                  minDate={endOfMonth(addMonths(new Date(), -6))}
                                                  className="calendarElement"
                                                  rangeColors={['#fff', '#fff', '#fff']}
                                                  staticRanges={staticRanges}
                                             />
                                             <div>
                                                  <button className="btn btn-success" onClick={apply}>Apply</button>
                                                  <button className="btn btn-danger" onClick={close}>X</button>
                                             </div>
                                        </div>
                                        }
                                   </div>
                              </div>
                              <div className="content-market">
                                   <div className="market insights">
                                        <h2>MARKET INSIGHTS</h2>
                                        <span>
                                        <img src={help} alt="Logo" className='logo'/> 
                                        Click Here for Help <span className="button-up"></span></span>
                                   </div>
                              </div>
                              <div className="flex sales">
                                   <div className="sales-child">
                                        <h3>Sales Turnover</h3>
                                        <img src={IconMoreFilled} alt="Logo" className='logo'/>
                                   </div>
                                   <div className="sales-child-2">
                                   <h3>Rp 3,600,000
                                       <span>
                                        <em>
                                             <img src={DownArrow} alt="Logo" className='logo'/>
                                       13.8%
                                       </em>
                                       last period in product sold
                                       </span> 
                                   </h3>
                                        <img src={SalesTurnover} alt="Logo" className='logo'/>
                                   </div>
                              </div>
                              <div className="parent chart">
                              <div className="chart__">
                                   <Chart />
                              </div>
                              <div className="product-best">
                                   <Product/>
                              </div>
                              <div className="product-competitor">
                                    <Competitor/>
                              </div>
                         </div>
                         </div>
                    </>
               </div>
          </Layout>
     )
}

export default Dashboard

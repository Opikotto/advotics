import React from 'react'
import IconMoreFilled from '../assets/icon/IconMoreFilled.png'

import {
     ComposedChart,
     Line,
     Bar,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
     Legend
} from "recharts";

const data = [
     {
          name: "Jan 12",
          uv: 1520,
          pv: 800,
          amt: 1400,
          cnt: 490
     },
     {
          name: "Tue",
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590
     },
     {
          name: "Wed",
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350
     },
     {
          name: "Thu",
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480
     },
     {
          name: "Fri",
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460
     },
     {
          name: "Sat",
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380
     },
     {
          name: "Sun",
          uv: 1300,
          pv: 680,
          amt: 1700,
          cnt: 380
     }
];



const Chart = () => {
     return (
          <div className="data-chart">
               <div className="sales-child">
                    <h3>AVERAGE PURCHASE VALUE</h3>
                    <select className="form-select">
                         <option>Last 6 month</option>
                         <option>Last 3 month</option>
                    </select>
                    <img src={IconMoreFilled} alt="Logo" className='logo' />
               </div>
               <ComposedChart
                    width={590}
                    height={350}
                    data={data}
                    margin={{
                         top: 60,
                         right: 0,
                         bottom: 0,
                         left: 0,
                    }}
               >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" barSize={33} fill="#37B04C" />
                    <Line type="monotone" dataKey="uv" stroke="#FFE854" />
               </ComposedChart>
          </div>
     )
}

export default Chart

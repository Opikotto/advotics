import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";

function CountryDetail({ countries }) {
     const countryData = useSelector((state) => state.countryData.countryData);
     const [data, setData] = useState([])
     useEffect(() => {
          setData(countryData['response'])
     }, [countryData]);


     return (
          <>
          <div className="data_get_country">
          <div className="mt-8 country">
                    {countries}
               </div>

               <div className="flex">
                    {data?.map((data, index) => (
                         <div key={index} className="parent-box">
                              <div className="flex box_">
                              <h1>CONFIRMED</h1>
                                   <CountUp
                                        start={0}
                                        end={data.cases.active}
                                        separator="."
                                   />
                              </div>
                              <div className="flex box_">
                              <h1>recovered</h1>
                                   <CountUp
                                        start={0}
                                        end={data.cases.recovered}
                                        separator="."
                                   />
                              </div>
                              <div className="flex box_">
                              <h1>critical</h1>
                                   <CountUp
                                        start={0}
                                        end={data.cases.critical}
                                        separator="."
                                   />
                              </div>
                              <div className="flex box_">
                              <h1>deaths</h1>
                                   <CountUp
                                        start={0}
                                        end={data.deaths.total}
                                        separator="."
                                   />
                              </div>
                         </div>
                    ))}
               </div>
          </div>
            
          </>

     );
}

export default CountryDetail;

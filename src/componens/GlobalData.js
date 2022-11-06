import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalCovidData } from "../redux/globalData/services";
import CountUp from "react-countup";

function GlobalData() {
     
     const globalDataCovid = useSelector(
          (state) => state.globalData.globalDataCovid
        );
        const globalDataCovidStatus = useSelector(
          (state) => state.globalData.globalDataCovidStatus
        );
        const dispatch = useDispatch();
        useEffect(() => {
          if (globalDataCovidStatus === "idle") {
            dispatch(getGlobalCovidData());
          }
        }, [globalDataCovidStatus, dispatch]);
     return (
          <>
          <h1>Covid Tracker</h1>
          <div className="data-box">
               
               <div className="flex box">
                    <h1>CONFIRMED</h1>
               {globalDataCovid && (
                      <CountUp
                        start={0}
                        end={globalDataCovid.cases.active}
                        separator="."
                      />
                    )}
               </div>
               <div className="flex box">
               <h1>recovered</h1>
               {globalDataCovid && (
                      <CountUp
                        start={0}
                        end={globalDataCovid.cases.recovered
                        }
                        separator="."
                      />
                    )}
               </div>
               <div className="flex box">
               <h1>critical</h1>
               {globalDataCovid && (
                      <CountUp
                        start={0}
                        end={globalDataCovid.cases.critical
                        }
                        separator="."
                      />
                    )}
               </div>
               <div className="flex box">
               <h1>deaths</h1>
               {globalDataCovid && (
                      <CountUp
                        start={0}
                        end={globalDataCovid.deaths.total
                        }
                        separator="."
                      />
                    )}
               </div>
          </div>
          </>
        
     )
}

export default GlobalData

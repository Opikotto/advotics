import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGlobalCountries } from "../redux/globalData/services";
import { getCountryCovidData } from "../redux/countryData/services";
import CountryDetail from "./CountryDetail";

function Dropdown() {
     const [countries, setCountries] = useState("Indonesia");
     const country = useSelector((state) => state.globalData.country);
     const dispatch = useDispatch();
   
     useEffect(() => {
          dispatch(getGlobalCountries());
     }, [dispatch]);

     useEffect(() => {
          if (countries) {
               dispatch(getCountryCovidData(countries));
          }
     }, [countries, dispatch]);

     const handleCountries = (e) => {
          setCountries(e.target.value);
     };

     return (
          <>
               <div className="mt-10 select-countries">
                    <select
                         value={countries}
                         onChange={handleCountries}
                         className="handle-countries">
                         {country &&
                              country.countries.map((count, index) => (
                                   <option value={count.name} key={index}>
                                        {count.name}
                                   </option>
                              ))}
                    </select>
               </div>
               <CountryDetail countries={countries} />
          </>
     );
}

export default Dropdown;

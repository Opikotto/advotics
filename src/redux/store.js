import { configureStore } from "@reduxjs/toolkit";
import countryCovidData from "./countryData/countryCovidData";
import globalCovidData from "./globalData/globalCovidData";

export const store = configureStore({
  reducer: {
    globalData: globalCovidData,
    countryData: countryCovidData,
  },
});

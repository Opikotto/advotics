import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountryCovidData = createAsyncThunk(
  "covid/getCountriesData",
  async (country) => {

     const options = {
          method: 'GET',
          params: {country:country},
          headers: {
            'X-RapidAPI-Key': '936546258dmshe485e11adbadd36p179971jsn45dd0214ce25',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
          }
        };

    const res = await axios.get(`https://covid-193.p.rapidapi.com/statistics/`,options);
    return res.data;
  }
);

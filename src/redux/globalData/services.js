import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const options = {
  method: 'GET',
  params: {country: 'ALL'},
  headers: {
    'X-RapidAPI-Key': '936546258dmshe485e11adbadd36p179971jsn45dd0214ce25',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};

export const getGlobalCovidData = createAsyncThunk(
  "covid/getGlobalData",
  async () => {
    const res = await axios.get("https://covid-193.p.rapidapi.com/history",options);
    return res.data['response']['0'];
  }
);

export const getGlobalCountries = createAsyncThunk(
  "covid/getGlobalCountry",
  async () => {
    const res = await axios.get("https://covid19.mathdro.id/api/countries");
    return res.data;
  }
);

import axios from "axios";

const RAPID_BASE_URL = process.env.REACT_APP_FOOTBALL_API_URL;
const RAPID_API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
const RAPID_API_HOST = process.env.REACT_APP_FOOTBALL_API_HOST;

export const rapidApi = axios.create({
  baseURL: RAPID_BASE_URL,
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": RAPID_API_HOST,
  },
});

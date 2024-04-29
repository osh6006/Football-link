import axios from "axios";

const RAPID_BASE_URL = import.meta.env.VITE_FOOTBALL_API_URL;
const RAPID_API_KEY = import.meta.env.VITE_APP_FOOTBALL_API_KEY;
const RAPID_API_HOST = import.meta.env.VITE_APP_FOOTBALL_API_HOST;

const globalNewsURL = import.meta.env.DEV
  ? "https://newsapi.org/v2/"
  : "/globalNews/api";

const localNewsURL = import.meta.env.DEV ? "/naverApi" : "/localNews/api";

export const rapidApi = axios.create({
  baseURL: RAPID_BASE_URL,
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": RAPID_API_HOST,
  },
});

const NAVER_API_ID = import.meta.env.VITE_APP_NAVER_CLIENT_ID;
const NAVER_CLIENT_SECRET = import.meta.env.VITE_APP_NAVER_CLIENT_SECRET;
export const naverApi = axios.create({
  baseURL: localNewsURL,
  headers: {
    "X-Naver-Client-Id": NAVER_API_ID,
    "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
  },
});

const NEWS_API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY;
export const newsApi = axios.create({
  baseURL: globalNewsURL,
  headers: {
    "X-Api-Key": NEWS_API_KEY,
  },
});

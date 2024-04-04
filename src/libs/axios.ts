import axios from "axios";

const RAPID_BASE_URL = process.env.REACT_APP_FOOTBALL_API_URL;
const RAPID_API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
const RAPID_API_HOST = process.env.REACT_APP_FOOTBALL_API_HOST;

const globalNewsURL =
  process.env.NODE_ENV === "development"
    ? "https://newsapi.org/v2/"
    : "/globalNews/api";

const localNewsURL =
  process.env.NODE_ENV === "development" ? "/naverApi" : "/localNews/api";

export const rapidApi = axios.create({
  baseURL: RAPID_BASE_URL,
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": RAPID_API_HOST,
  },
});

const NAVER_API_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const NAVER_CLIENT_SECRET = process.env.REACT_APP_NAVER_CLIENT_SECRET;
export const naverApi = axios.create({
  baseURL: localNewsURL,
  headers: {
    "X-Naver-Client-Id": NAVER_API_ID,
    "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
  },
});

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
export const newsApi = axios.create({
  baseURL: globalNewsURL,
  headers: {
    "X-Api-Key": NEWS_API_KEY,
  },
});

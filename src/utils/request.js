import { config } from "../keys/config";
import axios from "axios";

axios.defaults.baseURL = config.BASE_URL;

export const requestFetch = (request) => {
  const API_KEY = config.TMDB_API_KEY;
  if (API_KEY) {
    request.params = {
      api_key: API_KEY,
    };
  }
  return axios.request(request);
};

import axios from "axios";
import headerInterceptor from "./interceptors";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Set up the request interceptor to update header
headerInterceptor(httpClient);

export default httpClient;
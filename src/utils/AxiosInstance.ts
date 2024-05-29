import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "";

//Create a axios instance
export const axiosInstance = axios.create({
  baseURL: `${apiUrl}`,
  withCredentials: true,
});

// lib/axios.ts
import axios from "axios";
// process.env.NEXT_PUBLIC_API_BASE_URL ||
const baseURL = "https://api.gasflow.biznhand.com/v1/api";

const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://apartments.free.beeceptor.com",
});

export default axiosInstance;

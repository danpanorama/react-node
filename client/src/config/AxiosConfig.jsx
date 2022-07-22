import axios from "axios";





const axiosInstance = axios.create({
//   baseURL: "https://samia.co.il/",
  baseURL: "http://localhost:3004/",
  

});


// axiosInstance.defaults.headers.common['Authorization'] = token

export default axiosInstance;

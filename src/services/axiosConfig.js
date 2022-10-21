import axios from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  headers: {
    "Context-Type": "application/json",
  },
});
// axiosConfig.defaults.withCredentials = true;

axiosConfig.interceptors.request.use(
  function (config) {
    // if (config.method === "get" && config.url === "/refresh-token") {
    //   return config;
    // } else {
    //   const token = "";
    //   config.headers["Authorization"] = "Bearer " + token;
    // }
    console.log(config);

    return config;
  },
  function (error) {
    console.log("request error ", error);
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  function (res) {
    return res
  },
  function (error) {
    console.log("response error ", error);
    return Promise.reject(error);
  }
);

export default axiosConfig;

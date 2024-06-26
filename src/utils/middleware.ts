import { API } from "@/api";
import axios from "axios";
axios.interceptors.request.use(
    async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (!accessToken && refreshToken) {
      try {
        const response = await axios.post(API.users.refreshToken, {
          refreshToken: refreshToken,
        });
        const newAccessToken = response.data.access_token;
        localStorage.setItem("accessToken", newAccessToken);
        config.headers["Authorization"] = `Bearer ${newAccessToken}`;
      } catch (refreshError) {
      }
    } else if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axios;

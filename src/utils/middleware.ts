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
      } catch (refreshError) {}
    } else if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
      config.headers["is_guest_user"] = true;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(API.users.refreshToken, {
          refreshToken: refreshToken,
        });
        const newAccessToken = response.data.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axios(originalRequest);
      } catch (error) {}
    }
    return Promise.reject(error);
  }
);

export default axios;

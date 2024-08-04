// import { API } from "@/api";
import axios from "axios";

const createSessionInstance = axios.create({
  baseURL: "https://kafsbackend-106f.onrender.com/api/v1",
});

axios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    // const refreshToken = localStorage.getItem("refreshToken");
    let sessionId = localStorage.getItem("sessionId");
    // console.log(sessionId);
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
      config.headers["is_guest_user"] = true;
    }

    if (!sessionId && !accessToken) {
      // Fetch and store the session ID in local storage
      try {
        const res = await createSessionInstance.get("/users/create-session");
        sessionId = res.data.data.sessionId;
        if (sessionId) {
          localStorage.setItem("sessionId", sessionId);
        }
      } catch (error) {
        console.log("Error fetching session ID:", error);
        return Promise.reject(error); // Reject the request if session ID cannot be created
      }
    }

    if (sessionId && accessToken) {
      localStorage.removeItem("sessionId");
    }

    if (sessionId) {
      config.headers["sessionId"] = sessionId;
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

      // try {
      //   // const refreshToken = localStorage.getItem("refreshToken");
      //   // const response = await axios.post(API.users.refreshToken, {
      //   //   refreshToken: refreshToken,
      //   // });
      //   // const newAccessToken = response.data.data.accessToken;
      //   localStorage.setItem("accessToken", newAccessToken);

      //   originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      //   return axios(originalRequest);
      // } catch (error) {}
    }
    return Promise.reject(error);
  }
);

export default axios;

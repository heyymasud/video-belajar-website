import axios from "axios";

const api = axios.create({
  baseURL: `https://${import.meta.env.VITE_MOCKAPI_KEY}.mockapi.io/api/v1/`,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default api;

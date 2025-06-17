import { store } from '@/redux/store';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `http://localhost:8000/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// add request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const state = store.getState();

    // 💡 Add this nullish check
    const token: string | null = state?.auth?.token;

    // const token = store?.getState().auth?.token;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;

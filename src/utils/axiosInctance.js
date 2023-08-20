import axios from 'axios';
import { toast } from 'react-toastify';
const { REACT_APP_BASE_URL } = process.env;
const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

const setAuthHeader = token => {
  if (token) {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    return;
  }
  instance.defaults.headers.common.authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (
      error.response.status === 401 &&
      error.response.data.error === 'Token Error'
    ) {
      const refreshToken = localStorage.getItem('refreshToken');
      setAuthHeader(refreshToken);
      const { data } = await instance.get('api/auth/refresh');
      setAuthHeader(data.accessToken);
      error.config.headers.authorization = `Bearer ${data.accessToken}`;
      localStorage.setItem('refreshToken', data.refreshToken);
      return instance(error.config);
    }

    return toast.error(`Error: ${error.response.data.error}`);
  }
);
export { setAuthHeader, instance };

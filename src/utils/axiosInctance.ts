import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

const setAuthHeader = (token: string) => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    try {
      if (
        error.response.status === 401 &&
        error.response.data.error === 'Token Error'
      ) {
        const refreshToken = localStorage.getItem('refreshToken');
        const { data } = await instance.post('api/auth/refresh', {
          refreshToken,
        });
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('accessToken', data.accessToken);
        setAuthHeader(data.accessToken);
        error.config.headers.authorization = `Bearer ${data.accessToken}`;

        return instance(error.config);
      }
    } catch (error) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
export { setAuthHeader, instance };

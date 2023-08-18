import axios from 'axios';
const { REACT_APP_BASE_URL } = process.env;

const instance = axios.create({ baseURL: REACT_APP_BASE_URL });

const setAuthHeader = token => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  instance.defaults.headers.common.Authorization = '';
};
instance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  setAuthHeader(accessToken);
});
instance.interceptors.response.use(
  responce => responce,
  async error => {
    if (
      error.responce.status === 401 &&
      error.responce.message === 'Token Error'
    ) {
      const refreshToken = localStorage.getItem('refreshToken');
      setAuthHeader(refreshToken);
      const { data } = await instance.get('api/auth/refresh');
      setAuthHeader(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      return instance(error.config);
    }
    if (
      error.responce.status === 401 &&
      error.responce.message ===
        'Warning! Someone is trying to use your account.'
    ) {
      // create notification
      return;
    }
  }
);
export { setAuthHeader, instance };

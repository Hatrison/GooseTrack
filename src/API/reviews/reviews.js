import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}`;

export const getReviews = async () => {
  try {
    const response = await axios.get('/api/reviews');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOwnReview = async () => {
  try {
    const response = await axios.get('/api/reviews/own');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createReview = async review => {
  try {
    const response = await axios.post('/api/reviews/own', review);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateReview = async review => {
  try {
    const response = await axios.patch('/api/reviews/own', review);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteReview = async () => {
  try {
    const response = await axios.delete(`/api/reviews/own`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

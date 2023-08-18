import { instance } from 'utils/axiosInctance';

export const getReviews = async () => {
  try {
    const response = await instance.get('/api/reviews');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOwnReview = async () => {
  try {
    const response = await instance.get('/api/reviews/own');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createReview = async review => {
  try {
    const response = await instance.post('/api/reviews/own', review);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateReview = async review => {
  try {
    const response = await instance.patch('/api/reviews/own', review);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteReview = async () => {
  try {
    const response = await instance.delete(`/api/reviews/own`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

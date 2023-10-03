import { RootState } from 'redux/store';

export const selectReviews = (state: RootState) => state.reviews.reviews;

export const selectOwnReview = (state: RootState) => state.reviews.ownReview;

export const selectError = (state: RootState) => state.reviews.error;

export const selectIsLoading = (state: RootState) => state.reviews.isLoading;

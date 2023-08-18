const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const {
  getReviews,
  getOwnReview,
  createReview,
  updateReview,
  deleteReview,
} = require('./operations');

const initialState = {
  reviews: [],
  ownReview: {
    rating: 0,
    text: '',
  },
  error: null,
  isLoading: false,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(getOwnReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownReview = action.payload;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownReview = action.payload;
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownReview = action.payload;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownReview = {
          rating: 0,
          text: '',
        };
      })
      .addMatcher(
        isAnyOf(
          getReviews.pending,
          getOwnReview.pending,
          createReview.pending,
          updateReview.pending,
          deleteReview.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getReviews.rejected,
          getOwnReview.rejected,
          createReview.rejected,
          updateReview.rejected,
          deleteReview.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const reviewsReducer = reviewsSlice.reducer;

export type TReview = {
  _id: string;
  name: string;
  ownerId: string;
  text: string;
  avatarURL: string;
  rating: number;
};

export type TInitialState = {
  reviews: TReview[];
  ownReview: {
    rating: number;
    text: string;
  };
  error: null | string;
  isLoading: boolean;
};

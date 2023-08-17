import { RatingStar } from 'components/ReviewsSlider/ReviewsSlider.styled';
import React from 'react';

// import Rating from 'react-rating-stars-component';

// const RatingComponent = ({ rating }) => {
//   return (
//     <Rating
//       count={5} // Кількість зірочок
//       value={rating} // Отримане число рейтингу з бекенду
//       size={14} // Розмір зірок
//       color="#CEC9C1"
//       activeColor="#FFAC33" // Колір жовтих зірок
//       edit={false} // Вимкнути можливість редагування
//     />
//   );
// };

// export default RatingComponent;

const StarsList = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<RatingStar key={i} isyellow={i <= rating} />);
    }
    return stars;
  };

  return <ul>{renderStars()}</ul>;
};

export default StarsList;

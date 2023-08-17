// import React from 'react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import {
  Section,
  Container,
  Title,
  Name,
  Text,
  Item,
  Avatar,
  WrapAvatarNameStars,
  ArrowLeft,
  ArrowRight,
  ArrowsWrap,
  RatingStar,
  StarsList,
  SliderStyled,
} from './ReviewsSlider.styled';

export const getAllReviews = async () => {
  const response = await axios.get(
    'https://goosetrack-0ajq.onrender.com/api/reviews'
  );
  if (response.status === 404) {
    throw new Error('Something went wrong, please try again', response.status);
  }
  return response.data;
};

const ReviewsSlider = () => {
  const slider = useRef(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        // setLoading(true);
        // setError(null);
        const allReviews = await getAllReviews();
        console.log(allReviews);

        setReviews(allReviews);
        // setMovies(trendingMovies.results);
      } catch (error) {
        // setError(ERROR_MSG);
        console.log(error);
      } finally {
        // setLoading(false);
      }
    }
    getReviews();
  }, []);

  function NextArrow(props) {
    const { onClick } = props;
    return <ArrowRight onClick={onClick} />;
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return <ArrowLeft onClick={onClick} />;
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section>
      <Container>
        <Title>Reviews</Title>
        <SliderStyled ref={slider} {...settings}>
          {reviews &&
            reviews.map(review => {
              return (
                <Item key={review._id}>
                  <WrapAvatarNameStars>
                    <Avatar
                      src="https://366icons.com/media/01/profile-avatar-account-icon-16699.png"
                      alt="Avatar"
                      width="50px"
                      height="50px"
                    />
                    <div>
                      <Name>
                        {review.name} - {review.rating}
                      </Name>
                      <StarsList>
                        <li>
                          <RatingStar />
                        </li>
                        <li>
                          <RatingStar />
                        </li>
                        <li>
                          <RatingStar />
                        </li>
                        <li>
                          <RatingStar />
                        </li>
                        <li>
                          <RatingStar />
                        </li>
                      </StarsList>
                    </div>
                  </WrapAvatarNameStars>

                  <Text>{review.text}</Text>
                </Item>
              );
            })}
        </SliderStyled>

        <ArrowsWrap>
          <ArrowLeft onClick={() => slider.current.slickPrev()} />
          <ArrowRight onClick={() => slider.current.slickNext()} />
        </ArrowsWrap>
      </Container>
    </Section>
  );
};

export default ReviewsSlider;

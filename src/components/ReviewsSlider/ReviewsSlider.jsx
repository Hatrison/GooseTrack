import React, { useEffect, useRef } from 'react';
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
  SliderStyled,
  StyledRating,
} from './ReviewsSlider.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviews } from 'redux/reviews/selectors';
import { ReactComponent as Star } from 'images/svg/reviewStar.svg';
import { getReviews } from 'redux/reviews/operations';

const ReviewsSlider = () => {
  const slider = useRef(null);
  const reviews = useSelector(selectReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

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
    slidesToShow: reviews.length === 1 ? 1 : 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1500,
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
                      src={
                        review.avatar
                          ? review.avatar
                          : 'https://366icons.com/media/01/profile-avatar-account-icon-16699.png'
                      }
                      alt="Avatar"
                      width="50px"
                      height="50px"
                    />
                    <div>
                      <Name>{review.name}</Name>
                      <StyledRating
                        precision={1}
                        sx={{ display: 'flex', gap: '10px', maxWidth: '104px' }}
                        icon={
                          <Star width="14px" height="14px" fill="#FFAC33" />
                        }
                        emptyIcon={
                          <Star width="14px" height="14px" fill="#CEC9C1" />
                        }
                        value={Number(review.rating)}
                        readOnly
                      />
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

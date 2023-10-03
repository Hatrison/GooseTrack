import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from 'hooks/useDispatch';
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
  Notification,
} from './ReviewsSlider.styled';
import { useAppSelector } from 'hooks/useSelector';
import { selectReviews } from 'redux/reviews/selectors';
import { ReactComponent as Star } from 'images/svg/reviewStar.svg';
import { getReviews } from 'redux/reviews/operations';

const ReviewsSlider = () => {
  const slider = useRef(null);
  const reviews = useAppSelector(selectReviews);
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState(false);

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
        {reviews.length > 0 ? (
          <SliderStyled ref={slider} {...settings}>
            {reviews &&
              reviews.map(review => {
                return (
                  <Item key={review._id}>
                    <WrapAvatarNameStars>
                      <Avatar
                        src={
                          review.avatarURL
                            ? review.avatarURL
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
                          sx={{
                            display: 'flex',
                            gap: '10px',
                            maxWidth: '104px',
                          }}
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
                    <Text
                      onClick={() => setExpanded(!expanded)}
                      style={{
                        overflow: expanded ? 'auto' : 'hidden',
                      }}
                    >
                      {review.text}
                    </Text>
                  </Item>
                );
              })}
          </SliderStyled>
        ) : (
          <Notification>There is no reviews yet</Notification>
        )}

        {reviews.length > 0 && (
          <ArrowsWrap>
            <ArrowLeft onClick={() => slider.current.slickPrev()} />
            <ArrowRight onClick={() => slider.current.slickNext()} />
          </ArrowsWrap>
        )}
      </Container>
    </Section>
  );
};

export default ReviewsSlider;

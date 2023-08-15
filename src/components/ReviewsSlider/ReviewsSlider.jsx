// import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Section,
  Container,
  Title,
  Name,
  Text,
  Item,
  Avatar,
  WrapAvatarNameStars,
  List,
  ArrowLeft,
  ArrowRight,
  ArrowsWrap,
  RatingStar,
  StarsList,
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

  return (
    <Section>
      <Container>
        <Title>Reviews</Title>
        <List>
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
          {/* <Item>
            <WrapAvatarNameStars>
              <Avatar
                src="../../images/avatar1.jpg"
                alt="Avatar"
                width="50px"
                height="50px"
              />
              <div>
                <Name>Olena Doe</Name>
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

            <Text>
              GooseTrack is impressive, the calendar view and filter options
              make it easy to stay organized and focused. Highly recommended.
            </Text>
          </Item>
          <Item>
            <WrapAvatarNameStars>
              <Avatar
                src="../../images/avatar1.jpg"
                alt="Avatar"
                width="50px"
                height="50px"
              />
              <div>
                <Name>Olena Doe</Name>

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

            <Text>
              GooseTrack is impressive, the calendar view and filter options
              make it easy to stay organized and focused. Highly recommended.
            </Text>
          </Item> */}
        </List>
        <ArrowsWrap>
          <ArrowLeft />
          <ArrowRight />
        </ArrowsWrap>
      </Container>
    </Section>
  );
};

export default ReviewsSlider;

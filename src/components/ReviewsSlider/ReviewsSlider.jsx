import React from 'react';
import {
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

const ReviewsSlider = () => {
  return (
    <Container>
      <Title>Reviews</Title>
      <List>
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
              {/* <img src="" alt="Stars" width="110px" height="14px" /> */}
            </div>
          </WrapAvatarNameStars>

          <Text>
            GooseTrack is impressive, the calendar view and filter options make
            it easy to stay organized and focused. Highly recommended.
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
              {/* <img src="" alt="Stars" width="110px" height="14px" /> */}
            </div>
          </WrapAvatarNameStars>

          <Text>
            GooseTrack is impressive, the calendar view and filter options make
            it easy to stay organized and focused. Highly recommended.
          </Text>
        </Item>
      </List>
      <ArrowsWrap>
        <ArrowLeft />
        <ArrowRight />
      </ArrowsWrap>
    </Container>
  );
};

export default ReviewsSlider;

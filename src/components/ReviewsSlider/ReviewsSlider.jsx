import React from 'react';
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

const ReviewsSlider = () => {
  return (
    <Section>
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
          </Item>
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

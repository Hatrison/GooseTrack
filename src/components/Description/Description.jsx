import React from 'react';
import {
  Number,
  Overview,
  PreTitle,
  Title,
  Image,
  List,
  Item,
  WrapText,
} from './Description.styled';

const Description = () => {
  return (
    <div>
      <List>
        <Item>
          <WrapText>
            <Number>1.</Number>
            <PreTitle>Calendar</PreTitle>
            <Title>view</Title>
            <Overview>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </Overview>
          </WrapText>

          <Image
            src="../../images/calendar-mob.jpg"
            alt="Calendar"
            width="335px"
            height="457px"
          />
        </Item>
        <Item>
          <WrapText>
            <Number>2.</Number>
            <Title>SIDEBAR</Title>
            <Overview>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </Overview>
          </WrapText>

          <Image src="" alt="Sidebar" width="335px" height="457px" />
        </Item>
        <Item>
          <WrapText>
            <Number>3.</Number>
            <PreTitle>all in</PreTitle>
            <Title>one</Title>
            <Overview>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </Overview>
          </WrapText>

          <Image src="" alt="Sidebar-Calendar" width="335px" height="457px" />
        </Item>
      </List>
    </div>
  );
};

export default Description;

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

import Calendar1xMobPng from 'images/main-page/calendar1xMob.png';
import Calendar2xMobPng from 'images/main-page/calendar2xMob.png';
import Calendar1xMobWebp from 'images/main-page/calendar1xMob.webp';
import Calendar2xMobWebp from 'images/main-page/calendar2xMob.webp';
import Calendar1xTabPng from 'images/main-page/calendar1xTab.png';
import Calendar2xTabPng from 'images/main-page/calendar2xTab.png';
import Calendar1xTabWebp from 'images/main-page/calendar1xTab.webp';
import Calendar2xTabWebp from 'images/main-page/calendar2xTab.webp';
import Calendar1xDeskPng from 'images/main-page/calendar1xDesk.png';
import Calendar2xDeskPng from 'images/main-page/calendar2xDesk.png';
import Calendar1xDeskWebp from 'images/main-page/calendar1xDesk.webp';
import Calendar2xDeskWebp from 'images/main-page/calendar2xDesk.webp';

import Sidebar1xMobPng from 'images/main-page/sidebar1xMob.png';
import Sidebar2xMobPng from 'images/main-page/sidebar2xMob.png';
import Sidebar1xMobWebp from 'images/main-page/sidebar1xMob.webp';
import Sidebar2xMobWebp from 'images/main-page/sidebar2xMob.webp';
import Sidebar1xTabPng from 'images/main-page/sidebar1xTab.png';
import Sidebar2xTabPng from 'images/main-page/sidebar2xTab.png';
import Sidebar1xTabWebp from 'images/main-page/sidebar1xTab.webp';
import Sidebar2xTabWebp from 'images/main-page/sidebar2xTab.webp';
import Sidebar1xDeskPng from 'images/main-page/sidebar1xDesk.png';
import Sidebar2xDeskPng from 'images/main-page/sidebar2xDesk.png';
import Sidebar1xDeskWebp from 'images/main-page/sidebar1xDesk.webp';
import Sidebar2xDeskWebp from 'images/main-page/sidebar2xDesk.webp';

import All1xMobPng from 'images/main-page/all1xMob.png';
import All2xMobPng from 'images/main-page/all2xMob.png';
import All1xMobWebp from 'images/main-page/all1xMob.webp';
import All2xMobWebp from 'images/main-page/all2xMob.webp';
import All1xTabPng from 'images/main-page/all1xTab.png';
import All2xTabPng from 'images/main-page/all2xTab.png';
import All1xTabWebp from 'images/main-page/all1xTab.webp';
import All2xTabWebp from 'images/main-page/all2xTab.webp';
import All1xDeskPng from 'images/main-page/all1xDesk.png';
import All2xDeskPng from 'images/main-page/all2xDesk.png';
import All1xDeskWebp from 'images/main-page/all1xDesk.webp';
import All2xDeskWebp from 'images/main-page/all2xDesk.webp';

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

          <picture>
            <source
              srcSet={`${Calendar1xDeskWebp} 1x, ${Calendar2xDeskWebp} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Calendar1xDeskPng} 1x, ${Calendar2xDeskPng} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Calendar1xTabWebp} 1x, ${Calendar2xTabWebp} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${Calendar1xTabPng} 1x, ${Calendar2xTabPng} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${Calendar1xMobWebp} 1x, ${Calendar2xMobWebp} 2x`}
            />
            <source srcSet={`${Calendar1xMobPng} 1x, ${Calendar2xMobPng} 2x`} />
            <Image src={`${Calendar1xMobPng}`} alt="Calendar" />
          </picture>
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

          <picture>
            <source
              srcSet={`${Sidebar1xDeskWebp} 1x, ${Sidebar2xDeskWebp} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Sidebar1xDeskPng} 1x, ${Sidebar2xDeskPng} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Sidebar1xTabWebp} 1x, ${Sidebar2xTabWebp} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${Sidebar1xTabPng} 1x, ${Sidebar2xTabPng} 2x`}
              media="(min-width: 768px)"
            />
            <source srcSet={`${Sidebar1xMobWebp} 1x, ${Sidebar2xMobWebp} 2x`} />
            <source srcSet={`${Sidebar1xMobPng} 1x, ${Sidebar2xMobPng} 2x`} />
            <Image src={`${Sidebar1xMobPng}`} alt="Sidebar" />
          </picture>
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

          <picture>
            <source
              srcSet={`${All1xDeskWebp} 1x, ${All2xDeskWebp} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${All1xDeskPng} 1x, ${All2xDeskPng} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${All1xTabWebp} 1x, ${All2xTabWebp} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${All1xTabPng} 1x, ${All2xTabPng} 2x`}
              media="(min-width: 768px)"
            />
            <source srcSet={`${All1xMobWebp} 1x, ${All2xMobWebp} 2x`} />
            <source srcSet={`${All1xMobPng} 1x, ${All2xMobPng} 2x`} />
            <Image src={`${All1xMobPng}`} alt="CalendarAndSidebar" />
          </picture>
        </Item>
      </List>
    </div>
  );
};

export default Description;

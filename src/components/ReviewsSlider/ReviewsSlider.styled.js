import styled from 'styled-components';
import { ReactComponent as ArrowBack } from '../../images/svg/arrowBack.svg';
import { ReactComponent as ArrowNext } from '../../images/svg/arrowNext.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Rating } from '@mui/material';

export const Section = styled.div`
  background-color: #ffffff;
`;

export const StyledRating = styled(Rating)`
  & .MuiRating-iconFilled {
    color: '#ff6d75';
  }

  & .MuiRating-iconHover {
    color: '#ff3d47';
  }
`;

export const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding-bottom: 64px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-bottom: 100px;
    padding-left: 94px;
    padding-right: 94px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-bottom: 118px;
    padding-left: 128px;
    padding-right: 128px;
  }
`;

export const SliderStyled = styled(Slider)`
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1280px) {
    .slick-track {
      display: flex;
      gap: 24px;
    }
    display: flex;
    gap: 24px;
  }
`;

export const Item = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 24px) / 2);
  }
`;

export const WrapAvatarNameStars = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.14;
  text-transform: uppercase;
  color: #3e85f3;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 40px;
`;

export const Name = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  color: #343434;
  margin-bottom: 13px;
`;

export const Text = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #111111;
  opacity: 0.7;
  width: 100%;
  height: 72px;
  overflow-wrap: break-word;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const ArrowLeft = styled(ArrowBack)`
  width: 50px;
  height: 50px;

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 61px;
  }
`;

export const ArrowRight = styled(ArrowNext)`
  width: 50px;
  height: 50px;

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 61px;
  }
`;

export const ArrowsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const Notification = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  text-align: center;
  color: #111111;
  opacity: 0.9;
`;

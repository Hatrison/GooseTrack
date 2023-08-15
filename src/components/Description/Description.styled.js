import styled from 'styled-components';

export const Section = styled.div`
  background-color: #ffffff;
`;

export const List = styled.ul`
  max-width: 375px;
  margin: 0 auto;
  padding: 64px 20px;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 64px 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-bottom: 100px;
    padding-left: 128px;
    padding-right: 128px;
  }
`;

export const Item = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    :nth-child(2n) {
      align-items: flex-end;
    }
    :not(:last-child) {
      margin-bottom: 64px;
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 228px;
    align-items: center;

    :nth-child(2n) {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
    :nth-child(2n + 1) {
      justify-content: flex-end;
    }
  }
`;

export const WrapText = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 275px;
  }
`;

export const Number = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 80px;
  font-weight: bold;
  color: #3e85f3;
  letter-spacing: -4px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 104px;
  }
`;

export const PreTitle = styled.p`
  font-family: 'Inter', sans-serif;
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.25;
  text-transform: uppercase;
  color: #3e85f3;
  background-color: #dcebf7;
  border-radius: 44px;
  padding: 8px 18px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const Title = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.25;
  text-transform: uppercase;
  color: #171820;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 24px;
  }
`;

export const Overview = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #111111;
  opacity: 0.9;
  max-width: 335px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    max-width: 275px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

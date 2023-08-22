import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const CustomInput = styled.button`
  position: absolute;
  cursor: pointer;
  width: 150px;
  height: 35px;
  top: -50px;
  border: none;
  background-color: transparent;
`;

export const StyledDatePicker = styled(DatePicker)`
  margin-top: 8px;
   height: 30px;
  margin-bottom: 18px;
  padding: 14px 18px;
    border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  outline: none;
  }

  @media screen and (min-width: 375px) {
    width: 138px;

  }
  @media screen and (min-width: 768px) {
    width: 150px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
    width: 150px;
    
  }
  `;

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    * {
      margin: 0;
      padding: 0;
    }

        background-color: inherit;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 24px;
    border: none;
    text-align: center;

    &__year-dropdown {
      background-color: #ffffff;
    }

    &__year-option--selected_year {
      color: #3e85f3;
    }

    &__year-read-view--selected-year {
      color: #fff;
    }

    &-wrapper:hover & {
      background-color: #ffffff;
      border-radius: 50%;
    }
    &_year-read-view--selected-year {
      color: #ffff;
    }
    &-popper {
      transform: translate(881.05px, 950.217px);
      inset: 0px auto auto 50px;

      .react-datepicker__triangle::before, .react-datepicker__triangle::after{
        display: none
      }

    }

    &__navigation-icon{
top: 9px;
}

  &__month-container {
    padding: 15px 18px;
    background-color: #3e85f3;
    border-radius: 16px;
    position: absolut;
     width: 344px;
    

   & .react-datepicker__header  {
   background-color: #3e85f3;
   color: #FFFFFF
    width: 344px;
        }

       & .react-datepicker__day-name,
    & .react-datepicker__day {
      width: 48px;
      height: 48px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 18px;
      line-height: 1;
      color: #ffffff;
      border-radius: 50%;
      
      &--keyboard-selected {
        border-radius: 50%;
      }

    &__navigation {
      width: 18px;
      height: 18px;
      top: 24px;
      

      &--previous {
        left: 18px;
      }

      &--next {
        right: 18px;
      }
    }

    &__header {
       background-color: #3e85f3;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 0;

    }

    &.__month-container {
      padding: 15px 18px;
      background-color: #3e85f3;
      border-radius: 16px;

      & .react-datepicker__day-name,
      & .react-datepicker__day {
        width: 48px;
        height: 48px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 18px;
        line-height: 1;
        color: #ffffff;

        &--keyboard-selected,
        &--selected {
          background-color: #ffffff;
          border-radius: 50%;
          color: #3e85f3;
        }
      }

      & .react-datepicker__day {
        &.outside-month {
          visibility: hidden;
          pointer-events: none;
        }
        &.highlighted-weekend {
          opacity: 0.35;
        }

        &:hover,
        &:focus {
          color: #3e85f3;
          border-radius: 50%;
                  }
      }

      &.react-datepicker__current-month {
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
       color: #FFFFFF
            }
    }

  }

  @media screen and (max-width: 768px) {
    .react-datepicker {
      line-height: 1;
      width: 354px

      &__month-container {
        padding: 15px 18px;

        & .react-datepicker__day {
          font-size: 18px;
        }
        & .react-datepicker__day-names {
          margin: 0px;
        }
        & .react-datepicker__day-name {
          width: 48px;
          height: 48px;
          margin: 0;
        }

        & .react-datepicker__day {
          &.outside-month {
            visibility: hidden;
            pointer-events: none;
          }
          &.highlighted-weekend {
            opacity: 0.35;
          }
          &:hover,
          &:focus {
            color: #3e85f3;
            border-radius: 50%;
          }
        }

        & .react-datepicker__current-month {
          font-size: 20px;
          color: #FFFFFF;
                 }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .react-datepicker {
      font-size: 14px;
      line-height: 1;

      &__month-container {
        padding: 0 0 20px 0;

        .react-datepicker__week:not(:last-child) {
          margin-bottom: 3px;
        }

        & .react-datepicker__day {
          width: 32px;
          height: 32px;
          margin: 8px 6px;
          font-size: 14px;

          &--keyboard-selected,
          &--selected {
            background-color: #ffffff;
            border-radius: 50%;
            color: #3e85f3;
          }
          &__header {
            height: 100px;
            // background-color: #3e85f3;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            padding: 0;
            color: #FFFFFF
          }
        }
        & .react-datepicker__day-names {
          margin: 0px;
                  }
        & .react-datepicker__day-name {
          width: 48px;
          height: 42px;
          margin: 0 -2px;
          padding: 15px 19px;
          color: #ffffff;
          &::first-of-type {
            margin-left: 3px;
          }
          &:last-child {
            margin-right: 3px;
          }
        }

        & .react-datepicker__day {
          &.outside-month {
            visibility: hidden;
            pointer-events: none;
          }
          &.highlighted-weekend {
            opacity: 0.35;
          }
          &:hover,
          &:focus {
            color: #3e85f3;
            border-radius: 50%;
          }
        }

        & .react-datepicker__current-month {
          margin-top: 9px;
          padding: 2px 0;
          font-size: 20px;
          color: #ffffff;
        }
      }
    }
  }

  .react-datepicker__current-month{
    color: #ffffff;
    text-align: center;
      }

      

`;

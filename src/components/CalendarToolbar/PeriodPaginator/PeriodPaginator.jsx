import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { format, parse, add, sub } from 'date-fns';
import PropTypes from 'prop-types';
import { setDates } from 'redux/date/dateSlice';
import { selectDate } from 'redux/date/selectors';
import { ReactComponent as LeftArrow } from 'images/svg/chevron-left.svg';
import { ReactComponent as RightArrow } from 'images/svg/chevron-right.svg';

import {
  Btn,
  Ul,
  Li,
  StyledDate,
  PeriodPaginatorWrapper,
} from './PeriodPaginator.styled';

export const PeriodPaginator = ({ type }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const normalizedDate = useSelector(selectDate);

  useEffect(() => {
    if (params.currentDay) {
      if (normalizedDate !== params.currentDay) {
        dispatch(setDates(params.currentDay));
      }
    }
  }, [dispatch, normalizedDate, params.currentDay]);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const onChangeDate1 = e => {
    const period = `${type}s`;
    const newDate =
      e.currentTarget.name === 'addition'
        ? add(date, { [period]: 1 })
        : sub(date, { [period]: 1 });

    const formattedNewDate = format(newDate, 'yyyy-MM-dd');
    dispatch(setDates(formattedNewDate));
    if (pathname.includes('/calendar/')) {
      navigate(`${type}/${formattedNewDate}`);
    }
    return;
  };

  const currentDate = format(date, 'dd MMMM yyyy');

  return (
    <PeriodPaginatorWrapper>
      <StyledDate>
        {type === 'month' ? currentDate.slice(3) : currentDate}
      </StyledDate>
      <Ul>
        <Li>
          <Btn
            type="button"
            name="subtraction"
            className="subtraction"
            onClick={onChangeDate1}
          >
            <LeftArrow />
          </Btn>
        </Li>
        <Li>
          <Btn
            type="button"
            name="addition"
            className="addition"
            onClick={onChangeDate1}
          >
            <RightArrow />
          </Btn>
        </Li>
      </Ul>
    </PeriodPaginatorWrapper>
  );
};

PeriodPaginator.propTypes = {
  type: PropTypes.string.isRequired,
};

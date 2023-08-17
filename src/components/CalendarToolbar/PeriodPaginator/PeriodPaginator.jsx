import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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

  const normalizedDate = useSelector(selectDate);

  useEffect(() => {
    if (params.currentDate && params.currentDate !== ':currentDate') {
      if (normalizedDate !== params.currentDate) {
        dispatch(setDates(params.currentDate));
      }
    }
  }, [dispatch, normalizedDate, params.currentDate]);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const onChangeDate = e => {
    const period = `${type}s`;
    const newDate =
      e.currentTarget.name === 'addition'
        ? add(date, { [period]: 1 })
        : sub(date, { [period]: 1 });

    const formattedNewDate = format(newDate, 'yyyy-MM-dd');
    dispatch(setDates(formattedNewDate));
    navigate(`${type}/${formattedNewDate}`);
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
            onClick={onChangeDate}
          >
            <LeftArrow />
          </Btn>
        </Li>
        <Li>
          <Btn
            type="button"
            name="addition"
            className="addition"
            onClick={onChangeDate}
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

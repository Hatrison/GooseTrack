import { useAppSelector } from 'hooks/useSelector';
import { selectDate } from 'redux/date/selectors';
import { ListItem, List, StyledNavLink } from './PeriodTypeSelect.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PeriodTypeSelect = ({ onChangeType }) => {
  const date = useAppSelector(selectDate);

  const location = useLocation();
  const isMonthRoute = location.pathname.includes('month');
  const isDayRoute = location.pathname.includes('day');

  return (
    <List>
      <ListItem>
        <StyledNavLink
          className={`${isMonthRoute ? 'active' : ''} month`}
          to={`month/${date}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </StyledNavLink>
      </ListItem>
      <ListItem>
        <StyledNavLink
          className={`${isDayRoute ? 'active' : ''} day`}
          to={`day/${date}`}
          onClick={() => onChangeType('day')}
        >
          Day
        </StyledNavLink>
      </ListItem>
    </List>
  );
};

PeriodTypeSelect.propTypes = {
  onChangeType: PropTypes.func.isRequired,
};

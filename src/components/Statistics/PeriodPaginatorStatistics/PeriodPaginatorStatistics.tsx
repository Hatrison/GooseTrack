import { useNavigate, useLocation } from 'react-router-dom';
import { format, parse, add, sub } from 'date-fns';
import { ReactComponent as LeftArrow } from 'images/svg/chevron-left.svg';
import { ReactComponent as RightArrow } from 'images/svg/chevron-right.svg';

import {
  Btn,
  Ul,
  Li,
  StyledDate,
  PeriodPaginatorWrapper,
} from './PeriodPaginator.styled';
import { Props } from './PeriodPaginatorStatistics.types';

export const PeriodPaginatorStatistics = ({
  type,
  normalizedDate,
  setDate,
}: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const onChangeDate = (e: React.MouseEvent) => {
    const period = `${type}s`;
    const newDate =
      (e.currentTarget as HTMLButtonElement).name === 'addition'
        ? add(date, { [period]: 1 })
        : sub(date, { [period]: 1 });

    const formattedNewDate = format(newDate, 'yyyy-MM-dd');
    setDate(formattedNewDate);
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

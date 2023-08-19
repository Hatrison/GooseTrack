import StatisticsChart from '../StatisticsChart/StatisticsChart';
import { BsFillCircleFill } from 'react-icons/bs';
import {
  HeadContainer,
  PeriodTime,
  Period,
  ChartContainer,
  StatisticsWrapper,
  PaginationWrapper,
} from './StatisticsSection.styled';
import { StatisticsCalendar } from '../StatisticsCalendar/StatisticsCalendar';
import { PeriodPaginator } from 'components/CalendarToolbar/PeriodPaginator/PeriodPaginator';

const StatisticsSection = () => {
  return (
    <StatisticsWrapper>
      <HeadContainer>
        <PaginationWrapper>
          <PeriodPaginator type={'day'} />
          <StatisticsCalendar />
        </PaginationWrapper>
        <PeriodTime>
          <Period>
            <BsFillCircleFill fill="#FFD2DD" size={8} /> By Day
          </Period>
          <Period>
            <BsFillCircleFill fill="#3E85F3" size={8} /> By Month
          </Period>
        </PeriodTime>
      </HeadContainer>
      <ChartContainer>
        <StatisticsChart />
      </ChartContainer>
    </StatisticsWrapper>
  );
};

export default StatisticsSection;

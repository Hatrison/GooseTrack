import StatisticsChart from '../StatisticsChart/StatisticsChart';
import { BsFillCircleFill } from 'react-icons/bs';
import {
  HeadContainer,
  PeriodTime,
  Period,
  ChartContainer,
} from './StatisticsSection.styled';
import { StatisticsCalendar } from '../StatisticsCalendar/StatisticsCalendar';
import { PeriodPaginatorStatistics } from '../PeriodPaginatorStatistics/PeriodPaginatorStatistics';

const StatisticsSection = () => {
  return (
    <>
      <HeadContainer>
        <PeriodPaginatorStatistics type={'day'} />
        <StatisticsCalendar />
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
    </>
  );
};

export default StatisticsSection;

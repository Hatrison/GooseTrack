import PeriodPaginator from 'components/CalendarToolbar/CalendarToolbar';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
import { BsFillCircleFill } from 'react-icons/bs';
import {
  HeadContainer,
  PeriodTime,
  Period,
  ChartContainer,
} from './StatisticsSection.styled';

const StatisticsSection = () => {
  return (
    <>
      <HeadContainer>
        <PeriodPaginator />
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

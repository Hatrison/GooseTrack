import React from 'react';
import { useAppSelector } from 'hooks/useSelector';
import { useAppDispatch } from 'hooks/useDispatch';
import { useEffect } from 'react';
import { parse } from 'date-fns';
import { getTasks } from 'redux/tasks/operations';
import { selectTheme } from 'redux/theme/selectors';
import { useMediaQuery } from 'react-responsive';
import { selectTasks } from 'redux/tasks/selectors';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Label,
} from 'recharts';
import { Props, TChartArgs } from './StatisticsChart.types';

export const StatisticsChart = ({ normalizedDate }: Props) => {
  const theme = useAppSelector(selectTheme);
  const isDarkTheme = theme === 'dark';
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasks({ month, year }));
  }, [dispatch, month, year]);

  // берем данні із редакса, таски = tasks.tasks
  const tasks = useAppSelector(selectTasks);

  //довжина масивів = кількість тасок за день та за місяць
  const tasksByDay = tasks.tasks.filter(task => task.date === normalizedDate);

  const taskByMonth = tasks.tasks;

  const todoByDay = tasksByDay.filter(task => task.category === 'to-do').length;

  const inprogressByDay = tasksByDay.filter(
    task => task.category === 'in-progress'
  ).length;

  const doneByDay = tasksByDay.filter(task => task.category === 'done').length;

  const todoByMonth = taskByMonth.filter(
    task => task.category === 'to-do'
  ).length;

  const inprogressByMonth = taskByMonth.filter(
    task => task.category === 'in-progress'
  ).length;

  const doneByMonth = taskByMonth.filter(
    task => task.category === 'done'
  ).length;

  const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
  const allTasksByMonth = todoByMonth + inprogressByMonth + doneByMonth;
  const columns = [
    {
      name: 'To Do',
      byDay: `${Math.round((todoByDay / allTasksByDay) * 100) || 0}`,
      byMonth: `${Math.round((todoByMonth / allTasksByMonth) * 100) || 0}`,
    },
    {
      name: 'In Progress',
      byDay: `${Math.round((inprogressByDay / allTasksByDay) * 100) || 0}`,
      byMonth: `${
        Math.round((inprogressByMonth / allTasksByMonth) * 100) || 0
      }`,
    },
    {
      name: 'Done',
      byDay: `${Math.round((doneByDay / allTasksByDay) * 100) || 0}`,
      byMonth: `${Math.round((doneByMonth / allTasksByMonth) * 100) || 0}`,
    },
  ];

  const renderCustomBarLabel = ({ x, y, width, value }: TChartArgs) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        orientation="top"
        fontFamily="InterNormal, sans-serif"
        fontSize={isMobile ? '12' : '14'}
        fill={isDarkTheme ? '#fff' : '#343434'}
        textAnchor="middle"
        dy={-6}
      >{`${value}%`}</text>
    );
  };

  return (
    <ResponsiveContainer>
      <BarChart
        data={columns}
        margin={{
          top: 45,
          right: 10,
          left: 10,
          bottom: 10,
        }}
        barCategoryGap={75}
        barGap={10}
        barSize={27}
      >
        <defs>
          <linearGradient id="colorP" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(255, 210, 221)" stopOpacity={0} />
            <stop
              offset="100%"
              stopColor="rgb(255, 210, 221)"
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(62, 133, 243)" stopOpacity={0} />
            <stop offset="100%" stopColor="rgb(62, 133, 243)" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid
          x={100}
          stroke={isDarkTheme ? '#E3F3FF26' : '#E3F3FF'}
          vertical={false}
        />
        <XAxis
          dataKey="name"
          tickSize={0}
          tickMargin={16}
          axisLine={false}
          fontFamily="InterNormal, sans-serif"
          fontSize={isMobile ? '12' : '14'}
          stroke={isDarkTheme ? '#fff' : '#343434'}
        />
        <YAxis
          ticks={[0, 20, 40, 60, 80, 100]}
          orientation="left"
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tickMargin={20}
          fontFamily="InterNormal, sans-serif"
          fontSize={'14'}
          stroke={isDarkTheme ? '#fff' : '#343434'}
        >
          <Label
            position="top"
            dy={-28}
            fontFamily="InterNormal, sans-serif"
            fontSize={'14'}
            fill={isDarkTheme ? '#fff' : '#343434'}
          >
            Tasks
          </Label>
        </YAxis>
        <Bar
          name="By Day"
          dataKey="byDay"
          fill="url(#colorP)"
          barSize={27}
          radius={10}
          minPointSize={10}
          label={renderCustomBarLabel}
        />
        <Bar
          name="By Month"
          dataKey="byMonth"
          fill="url(#colorB)"
          barSize={27}
          radius={10}
          minPointSize={10}
          label={renderCustomBarLabel}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatisticsChart;

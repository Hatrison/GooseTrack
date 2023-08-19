import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { parse } from 'date-fns';
import { getTasks } from 'redux/tasks/operations';
import { selectTheme } from 'redux/theme/selectors';
import { useMediaQuery } from 'react-responsive';

// підписка на дату та таски із редаксу
import { selectDate } from 'redux/date/selectors';
import { selectTasks } from 'redux/tasks/selectors';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Label,
  Tooltip,
} from 'recharts';

export const StatisticsChart = () => {
  const theme = useSelector(selectTheme);
  const isDarkTheme = theme === 'dark';
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const normalizedDate = useSelector(selectDate);
  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks({ month, year }));
  }, [dispatch, month, year]);

  // берем данні із редакса, таски = tasks.tasks
  const selectedDate = useSelector(selectDate);
  const tasks = useSelector(selectTasks);
  // console.log(selectedDate, tasks);

  //довжина масивів = кількість тасок за день та за місяць
  const tasksByDay = tasks.tasks.filter(task => task.date === selectedDate);

  const taskByMonth = tasks.tasks;
  // console.log(tasksByDay, taskByMonth);

  const todoByDay = tasksByDay.filter(task => task.category === 'to-do').length;

  const inprogressByDay = tasksByDay.filter(
    task => task.category === 'in-progress'
  ).length;
  // console.log(inprogressByDay);

  const doneByDay = tasksByDay.filter(task => task.category === 'done').length;
  // console.log(doneByDay);

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
  // console.log(allTasksByDay, allTasksByMonth, todoByDay, todoByMonth);
  const columns = [
    {
      name: 'To Do',
      dv: todoByDay,
      mv: todoByMonth,
      byDay: `${Math.round((todoByDay / allTasksByDay) * 100) || 0}`,
      byMonth: `${Math.round((todoByMonth / allTasksByMonth) * 100) || 0}`,
    },
    {
      name: 'In Progress',
      dv: inprogressByDay,
      mv: inprogressByMonth,
      byDay: `${Math.round((inprogressByDay / allTasksByDay) * 100) || 0}`,
      byMonth: `${
        Math.round((inprogressByMonth / allTasksByMonth) * 100) || 0
      }`,
    },
    {
      name: 'Done',
      dv: doneByDay,
      mv: doneByMonth,
      byDay: `${Math.round((doneByDay / allTasksByDay) * 100) || 0}`,
      byMonth: `${Math.round((doneByMonth / allTasksByMonth) * 100) || 0}`,
    },
  ];
  // console.log(columns);

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        position="top"
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
          fontSize={14}
          fontWeight={400}
          stroke={isDarkTheme ? '#fff' : '#343434'}
        />
        <YAxis
          ticks={[0, 20, 40, 60, 80, 100]}
          position="left"
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tickMargin={20}
          fontSize={14}
          stroke={isDarkTheme ? '#fff' : '#343434'}
        >
          <Label
            position="top"
            dy={-28}
            fontSize={14}
            fontWeight={500}
            fill={isDarkTheme ? '#fff' : '#343434'}
          >
            Tasks
          </Label>
        </YAxis>
        <Tooltip />
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

import React from 'react';
import { useSelector } from 'react-redux';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Label,
} from 'recharts';

// підписка на дату та таски із редаксу
import { selectDate } from 'redux/date/selectors';
import { selectTasks } from 'redux/tasks/selectors';

export const StatisticsChart = ({ data }) => {
  // берем данні із редакса, таски = tasks.tasks
  const selectedDate = useSelector(selectDate);
  const tasks = useSelector(selectTasks);
  console.log(selectedDate, tasks);

  //довжина масивів = кількість тасок за день та за місяць
  const tasksByDay = tasks.tasks.filter(
    task => task.date === selectedDate
  ).length;
  const taskByMonth = tasks.tasks.length;
  console.log(tasksByDay, taskByMonth);

  const columns = [
    {
      name: 'To Do',
      byDay: `${0.1 * 100}`,
      byMonth: `${0.2 * 100}`,
    },

    {
      name: 'In Progress',
      byDay: `${0.3 * 100}`,
      byMonth: `${0.4 * 100}`,
    },
    {
      name: 'Done',
      byDay: `${0.5 * 100}`,
      byMonth: `${0.6 * 100}`,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
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
        <CartesianGrid x={100} stroke="#E3F3FF" vertical={false} />
        <XAxis
          dataKey="name"
          tickSize={0}
          tickMargin={16}
          axisLine={false}
          fontSize={14}
          fontWeight={400}
          stroke={'#343434'}
        />
        <YAxis
          ticks={[0, 20, 40, 60, 80, 100]}
          position="left"
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tickMargin={20}
          fontSize={14}
          stroke={'#343434'}
        >
          <Label
            position="top"
            dy={-28}
            fontSize={14}
            fontWeight={500}
            fill="rgba(52, 52, 52, 1)"
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
        >
          <LabelList
            position="top"
            fontSize={16}
            fontWeight={500}
            stroke="#343434"
          />
        </Bar>
        <Bar
          name="By Month"
          dataKey="byMonth"
          fill="url(#colorB)"
          barSize={27}
          radius={10}
          minPointSize={10}
        >
          <LabelList
            position="top"
            fontSize={16}
            fontWeight={500}
            stroke={'#343434'}
            // content={percentagesLabel}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatisticsChart;

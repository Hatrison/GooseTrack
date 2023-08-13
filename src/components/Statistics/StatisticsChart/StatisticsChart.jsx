import React from 'react';
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

const columns = [
  {
    name: 'To Do',
    byDay: `${1.2 * 100}`,
    byMonth: `${1.2 * 100}`,
  },

  {
    name: 'In Progress',
    byDay: `${1.3 * 100}`,
    byMonth: `${1.4 * 100}`,
  },
  {
    name: 'Done',
    byDay: `${1.5 * 100}`,
    byMonth: `${1.6 * 100}`,
  },
];

const StatisticsChart = () => {
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
          <linearGradient id="colorM" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(255, 210, 221)" stopOpacity={0} />
            <stop
              offset="100%"
              stopColor="rgb(255, 210, 221)"
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="colorD" x1="0" y1="0" x2="0" y2="1">
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
          fill="url(#colorM)"
          barSize={27}
          radius={10}
          minPointSize={10}
        >
          <LabelList
            position="top"
            fontSize={16}
            fontWeight={500}
            stroke={'#343434'}
          />
        </Bar>
        <Bar
          name="By Month"
          dataKey="byMonth"
          fill="url(#colorD"
          barSize={27}
          radius={10}
          minPointSize={10}
        >
          <LabelList
            position="top"
            fontSize={16}
            fontWeight={500}
            stroke={'#343434'}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatisticsChart;

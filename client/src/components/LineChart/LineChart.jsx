import React from 'react';
import { LineChart as Chart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Colors from 'constants/colors';

const data = [
    { month: 'January', wattage: 500 },
    { month: 'February', wattage: 650 },
    { month: 'March', wattage: 800 },
    { month: 'April', wattage: 725 },
    { month: 'May', wattage: 675 },
    { month: 'June', wattage: 450 },
    { month: 'July', wattage: 500 },
    { month: 'August', wattage: 750 },
    { month: 'September', wattage: 800 },
    { month: 'October', wattage: 775 },
    { month: 'November', wattage: 825 },
    { month: 'December', wattage: 950 },
];

const LineChart = () => (
    <Chart
        width={1300}
        height={400}
        data={data}
        margin={{ top: 20, right: 20, left: 30, bottom: 20 }}
    >
        <Line type="monotone" dataKey="wattage" stroke={Colors.red} strokeWidth={2} />
        <CartesianGrid vertical={false} stroke={Colors.blue} strokeDasharray="2 4" />
        <XAxis dataKey="month" label={{ value: 'Month', position: 'bottom' }} />
        <YAxis stroke={Colors.darkBlue} unit=" watts" />
        <Tooltip />
    </Chart>
);

export default LineChart;

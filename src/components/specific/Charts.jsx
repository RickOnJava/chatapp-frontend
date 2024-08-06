import React from 'react'
import { Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
    plugins,
} from "chart.js";
import { myPurple, myPurpleLight, orange, orangelight } from '../../constants/color';
import { getLast7Days } from '../../lib/features';

ChartJS.register(
    Tooltip,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Filler,
    ArcElement,
    Legend
);

const labels = getLast7Days();

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },

    scales: {
        x: {
            grid: { display: false },
        },
        y: {
            beginAtZero: true,
            grid: { display: false },
        },
    },
};


const LineChart = ({ value = [] }) => {

    const data = {
        labels,
        datasets: [{
            data: value,
            label: "Messages",
            fill: true,
            backgroundColor: myPurpleLight,
            borderColor: myPurple,
        },
        ],
    };

    return <Line data={data} options={lineChartOptions} />;
};


const doughnutChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
    const data = {
        labels,
        datasets: [{
            data: value,
            fill: true,
            backgroundColor: [myPurpleLight, orangelight],
            hoverBackgroundColor: [myPurple, orange],
            borderColor: [myPurple, orange],
            offset: 30,
        },
        ],
    };
    return <Doughnut style={{zIndex: 10}} data={data} options={doughnutChartOptions}/>;
};

export { LineChart, DoughnutChart };
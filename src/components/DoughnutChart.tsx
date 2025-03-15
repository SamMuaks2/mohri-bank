'use client'
import React from 'react'
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, Title);


const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [950128, 976000, 1375025, 484297.82],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],

        labels: ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4']
    }
  return <Chart 
            type='doughnut' 
            data={data}
            options={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
        />
}

export default DoughnutChart

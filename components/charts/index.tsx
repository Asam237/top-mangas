import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
        {
            label: "Avg interest by month",
            data: [0.7, 0.81, 0.71, 0.87, 0.9],
            fill: false,
            backgroundColor: "transparent",
            borderColor: "#06a1e1",
            tension: 0.1,
            borderWidth: 4
        }
    ]
};

const options: any = {
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            display: false,
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "Avg interest by month (days)",
            padding: {
                bottom: 30
            },
            weight: "bold",
            color: "#00325c",
            font: {
                size: 13
            },
            align: "start"
        },
        datalabels: {
            display: true,
            color: "black",
            align: "end",
            padding: {
                right: 2
            },
            labels: {
                padding: { top: 10 },
                title: {
                    font: {
                        weight: "bold"
                    }
                },
                value: {
                    color: "green"
                }
            },
            formatter: function (value: any) {
                return "\n" + value;
            }
        }
    }
};

const LineChart = () => (
    <Fragment>
        <div style={{ height: "300px" }}>
            <Line data={data} options={options} />
        </div>
    </Fragment>
);

export default LineChart;

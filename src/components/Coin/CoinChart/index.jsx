import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./style.css";
import convertNumber from "../../../functions/convertNumber";

const CoinChart = ({ chartData, multiAxis, typeOfData }) => {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            }
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {
            crypto1: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        if (typeOfData == "prices") {
                            return '$' + value.toLocaleString();
                        } else {
                            return '$' + convertNumber(value);
                        }

                    }
                },
                type: 'linear',
                display: true,
                position: 'left',
            },
            crypto2: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        if (typeOfData == "prices") {
                            return '$' + value.toLocaleString();
                        } else {
                            return '$' + convertNumber(value);
                        }

                    }
                },
                type: 'linear',
                display: multiAxis,
                position: 'right',
            }
        }
    };

    return (
        <Line className="chart" data={chartData} options={options} />
    )
}

export default CoinChart;
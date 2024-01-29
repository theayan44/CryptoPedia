import convertDate from "./convertDate";

function settingChartData(setChartData, typeOfData, firstCoinMarketData, firstCoinName, secondCoinMarketData, secondCoinName) {
    setChartData(
        {
            labels: firstCoinMarketData[typeOfData].map((item) => convertDate(item[0])),
            datasets: [
                {
                    label: firstCoinName,
                    data: firstCoinMarketData[typeOfData].map((item) => item[1]),
                    borderColor: "rgb(255, 242, 0)",
                    borderWidth: 1,
                    fill: true,
                    tension: 0.5,
                    backgroundColor: secondCoinMarketData ? "transparent" : "rgba(255, 242, 0, 0.05)",
                    pointRadius: 1,
                    yAxisID: "crypto1",
                },
                {
                    label: secondCoinName,
                    data: secondCoinMarketData ? secondCoinMarketData[typeOfData].map((item) => item[1]) : [],
                    borderColor: "rgb(13, 127, 162)",
                    borderWidth: 1,
                    fill: true,
                    tension: 0.5,
                    backgroundColor: "transparent",
                    pointRadius: 1,
                    yAxisID: "crypto2",
                },
            ]
        }
    )
}

export default settingChartData;

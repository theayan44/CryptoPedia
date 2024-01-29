import axios from "axios";

async function getCoinMarketDetails(id, days) {
    try {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        };
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
        return res.data;
    } catch (error) {
        console.log("AXIOS ERROR -->", error);
    }
}

export default getCoinMarketDetails;
import axios from "axios";

async function getCoinData(id) {
    try {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        };
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        return res.data;
    } catch (error) {
        console.log("AXIOS ERROR -->", error);
    }
}

export default getCoinData;

function convertCoinDataObject(coinObj) {
    const newObj = {
        id: coinObj.id,
        image: coinObj.image.large,
        symbol: coinObj.symbol,
        name: coinObj.name,
        price_change_percentage_24h: coinObj.market_data.price_change_percentage_24h,
        current_price: coinObj.market_data.current_price.usd,
        total_volume: coinObj.market_data.total_volume.usd,
        market_cap: coinObj.market_data.market_cap.usd,
        desc: coinObj.description.en,
    }
    return newObj;
}

export default convertCoinDataObject;
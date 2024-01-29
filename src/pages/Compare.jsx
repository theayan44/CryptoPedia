import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import convertCoinDataObject from "../functions/convertCoinDataObject";
import Loader from "../components/Common/Loader";
import CoinsListInfo from "../components/Coin/CoinListInfo";
import CoinDescription from "../components/Coin/CoinDescription";
import getCoinData from "../functions/getCoinData";
import CoinChart from "../components/Coin/CoinChart";
import convertDate from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import getCoinMarketDetails from "../functions/getCoinMarketDetails";
import settingChartData from "../functions/settingChartData";
import SelectType from "../components/Coin/SelectType";
import BackToTop from '../components/Common/BackToTop';
import SelectCoin from "../components/Compare/SelectCoin";
import Footer from "../components/Common/Footer";

const Compare = () => {
    const [days, setDays] = useState(7);
    const [typeOfData, setTypeOfData] = useState("prices");
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);

    const [firstCoinId, setFirstCoinId] = useState("bitcoin");
    const [secondCoinId, setSecondCoinId] = useState("ethereum");
    const [firstCoinData, setFirstCoinData] = useState({});
    const [secondCoinData, setSecondCoinData] = useState({});
    const [firstCoinMarketData, setFirstCoinMarketData] = useState({});
    const [secondCoinMarketData, setSecondCoinMarketData] = useState({});

    useEffect(() => {
        if (firstCoinId)
            fetchData(firstCoinId, setFirstCoinData, setFirstCoinMarketData);
    }, [firstCoinId]);


    useEffect(() => {
        if (secondCoinId)
            fetchData(secondCoinId, setSecondCoinData, setSecondCoinMarketData);
    }, [secondCoinId]);


    useEffect(() => {
        if (Object.keys(firstCoinMarketData).length > 0 && Object.keys(secondCoinMarketData).length > 0) {
            settingChartData(setChartData, typeOfData, firstCoinMarketData, firstCoinData.name, secondCoinMarketData, secondCoinData.name);
            setLoading(false);
        }
    }, [firstCoinMarketData, secondCoinMarketData])


    async function fetchData(id, setCoinData, setCoinMarketData) {
        setLoading(true);
        const data = await getCoinData(id);
        if (data) {
            setCoinData(convertCoinDataObject(data));
            const marketDatas = await getCoinMarketDetails(id, days);
            if (marketDatas) {
                setCoinMarketData(marketDatas);
            }
        }
    }


    async function handleDaysChange(e) {
        setLoading(true);
        setDays(e.target.value);
        const marketData1 = await getCoinMarketDetails(firstCoinId, e.target.value);
        const marketData2 = await getCoinMarketDetails(secondCoinId, e.target.value);
        if (marketData1 && marketData2) {
            setFirstCoinMarketData(marketData1);
            setSecondCoinMarketData(marketData2);
        }
    };


    async function handleChangeType(e) {
        setLoading(true);
        setTypeOfData(e.target.value);
        if (Object.keys(firstCoinMarketData).length > 0 && Object.keys(secondCoinMarketData).length > 0) {
            settingChartData(setChartData, e.target.value, firstCoinMarketData, firstCoinData.name, secondCoinMarketData, secondCoinData.name);
            setLoading(false);
        }
    };

    function handleCryptoChange(e, isCrypto2) {
        if (isCrypto2) {
            setSecondCoinId(e.target.value);
        } else {
            setFirstCoinId(e.target.value);
        }
    };

    return (
        <div className="coin-info">
            <Header />
            {loading ? <Loader /> :
                <>
                    <div className="filter-div">
                        <SelectCoin firstCoinId={firstCoinId} secondCoinId={secondCoinId} handleCryptoChange={handleCryptoChange} />
                        <SelectDays days={days} handleDaysChange={handleDaysChange} />
                    </div>

                    <CoinsListInfo coin={firstCoinData} />
                    <CoinsListInfo coin={secondCoinData} />

                    <div className="grey-wrapper">
                        <SelectType type={typeOfData} handleChangeType={handleChangeType} />
                        <CoinChart typeOfData={typeOfData} chartData={chartData} multiAxis={true} />
                    </div>

                    <CoinDescription name={firstCoinData.name} desc={firstCoinData.desc.replace(/href/g, "target='_blank' href")} /> {/* Done this thing to open the links contained in coin description in new tab */}
                    <CoinDescription name={secondCoinData.name} desc={secondCoinData.desc.replace(/href/g, "target='_blank' href")} />

                    <BackToTop />
                    <Footer />
                </>
            }
        </div>
    )
}

export default Compare;
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabComponent from '../components/Dashboard/TabComponent'
import SearchBar from '../components/Common/SearchBar';
import BackToTop from '../components/Common/BackToTop';
import Loader from '../components/Common/Loader';
import PaginationComponent from '../components/Common/PaginationComponent';
import get100Coins from '../functions/get100Coins';
import { WatchlistContext } from '../context/WatchlistContext';
import Footer from '../components/Common/Footer';

const WatchList = () => {
    const [coinsList, setCoinsList] = useState([]);
    const [watchlistCoins, setWatchlistCoin] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [page, setPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { toggle } = useContext(WatchlistContext);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const allCoinList = await get100Coins();
        if (allCoinList) {
            setCoinsList(allCoinList);
            const data = allCoinList.filter((coin) => {
                return JSON.parse(localStorage.getItem("watchlist")).includes(coin.id);
            })
            setWatchlistCoin(data);
            setSearchData(data.filter((coin) =>
                coin.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(searchValue.toLowerCase())
            ));
            setLoading(false);
        }
    }


    useEffect(() => {
        const data = coinsList.filter((coin) => {
            return JSON.parse(localStorage.getItem("watchlist")).includes(coin.id);
        })
        setWatchlistCoin(data);
    }, [toggle]);


    useEffect(() => {
        setSearchData(watchlistCoins.filter((coin) =>
            coin.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchValue.toLowerCase())
        ));
        setPage(1);
    }, [searchValue, watchlistCoins]);


    useEffect(() => {
        setPaginatedData(searchData.slice(0, 10));
    }, [searchData])


    function handleSearch(e) {
        setSearchValue(e.target.value);
    }

    const handlePage = (event, value) => {
        setPage(value);
        const startIndex = (value - 1) * 10;
        const endIndex = startIndex + 10;
        setPaginatedData(searchData.slice(startIndex, endIndex));
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };


    return (
        <div>
            <Header />
            {
                loading ? <Loader /> : <>
                    <div style={{ minHeight: "100vh !important" }}>
                        <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
                        <TabComponent coinsList={paginatedData} />
                        <PaginationComponent page={page} handlePage={handlePage} count={Math.ceil(searchData.length / 10)} />
                        <BackToTop />
                    </div>
                    <Footer />
                </>
            }
        </div>
    )
}

export default WatchList;
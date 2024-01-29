import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabComponent from '../components/Dashboard/TabComponent'
import SearchBar from '../components/Common/SearchBar';
import BackToTop from '../components/Common/BackToTop';
import Loader from '../components/Common/Loader';
import PaginationComponent from '../components/Common/PaginationComponent';
import get100Coins from '../functions/get100Coins';
import Footer from '../components/Common/Footer';

const Dashboard = () => {
    const [coinsList, setCoinsList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [page, setPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const myList = await get100Coins();
        if (myList) {
            setCoinsList(myList);
            setSearchData(myList.filter((coin) =>
                coin.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(searchValue.toLowerCase())
            ));
            setLoading(false);
        }
    }


    useEffect(() => {
        setSearchData(coinsList.filter((coin) =>
            coin.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchValue.toLowerCase())
        ));
        setPage(1);
    }, [searchValue]);


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
                loading ? <Loader /> :
                    <>
                        <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
                        <TabComponent coinsList={paginatedData} />
                        <PaginationComponent page={page} handlePage={handlePage} count={Math.ceil(searchData.length / 10)} />
                        <BackToTop />
                        <Footer />
                    </>
            }

        </div>
    )
}

export default Dashboard;
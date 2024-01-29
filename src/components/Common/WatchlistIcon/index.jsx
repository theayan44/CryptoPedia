import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import "./style.css";
import addToWatchlist from '../../../functions/addToWatchlist';
import removeFromWatchlist from '../../../functions/removeFromWatchlist';
import { useContext, useState } from 'react';
import { WatchlistContext } from '../../../context/WatchlistContext';

const WatchlistIcon = ({ id, price_change_percentage_24h, gridView }) => {
    const { toggle, setToggle } = useContext(WatchlistContext);
    const style = {
        position: gridView ? "absolute" : "relative",
        right: gridView ? "1rem" : "0",
    }

    function handleWatchList(coinId, action) {
        switch (action) {
            case "add":
                addToWatchlist(coinId);
                setToggle(!toggle);
                break;
            case "remove":
                removeFromWatchlist(coinId);
                setToggle(!toggle);
                break;
            default: alert("Sorry!!! Couldn't Perform Action"); break;
        }
    }

    return (
        <>
            {
                JSON.parse(localStorage.getItem("watchlist")).includes(id) ?
                    <StarRoundedIcon
                        style={style}
                        onClick={(e) => { e.preventDefault(); handleWatchList(id, "remove"); }}
                        className={`watchlist-icon ${price_change_percentage_24h < 0 && "watchlist-icon-red"}`}
                    />
                    :
                    <StarBorderRoundedIcon
                        style={style}
                        onClick={(e) => { e.preventDefault(); handleWatchList(id, "add"); }}
                        className={`watchlist-icon ${price_change_percentage_24h < 0 && "watchlist-icon-red"}`}
                    />
            }
        </>
    )
}

export default WatchlistIcon
import { toast } from "react-toastify";

function addToWatchlist(coinId) {
    const watchlistData = JSON.parse(localStorage.getItem("watchlist"));
    watchlistData.push(coinId);
    localStorage.setItem("watchlist", JSON.stringify(watchlistData));

    toast.success(`${coinId.toUpperCase()} added to your watchlist!`)
}

export default addToWatchlist;
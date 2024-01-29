import { toast } from "react-toastify";

function removeFromWatchlist(coinId) {
    if (window.confirm("Are you sure to remove from watchlist?")) {
        const watchlistData = JSON.parse(localStorage.getItem("watchlist"));
        localStorage.setItem("watchlist", JSON.stringify(watchlistData.filter((item) => item != coinId)));

        toast.success(`${coinId.toUpperCase()} removed from your watchlist!`);
    } else {
        toast.error("Sorry! Couldn't remove.")
    }
}

export default removeFromWatchlist;
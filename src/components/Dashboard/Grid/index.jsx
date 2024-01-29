import "./style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";

import WatchlistIcon from "../../Common/WatchlistIcon";

const Grid = ({ coin, delay }) => {
    return (
        <NavLink to={`/coin/${coin.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay }}
                className={`single-grid ${coin.price_change_percentage_24h < 0 && "single-grid-red"}`}>

                <div className="coin-details">
                    <Tooltip placement="bottom-start" title="Logo">
                        <img className="coin-logo" src={coin.image} alt="coin_logo" />
                    </Tooltip>

                    <div className="coin-info">
                        <Tooltip placement="bottom-start" title="Symbol">
                            <h3>{coin.symbol}-USD</h3>
                        </Tooltip>
                        <p>{coin.name}</p>
                    </div>
                    <Tooltip placement="bottom-start" title="Add To Watchlist">
                        <WatchlistIcon id={coin.id} price_change_percentage_24h={coin.price_change_percentage_24h} gridView={true} />
                    </Tooltip>
                </div>

                <Tooltip placement="bottom-start" title="Price changes percentage in 24h">
                    <div className={`price-change ${coin.price_change_percentage_24h < 0 && "price-change-red"}`}>
                        <h4>{coin.price_change_percentage_24h.toFixed(2)} %</h4>
                        {
                            coin.price_change_percentage_24h > 0 ?
                                <TrendingUpRoundedIcon className="trending-icon" /> :
                                <TrendingDownRoundedIcon className="trending-icon" />
                        }
                    </div>
                </Tooltip>

                <Tooltip placement="bottom-start" title="Current Price">
                    <h3 className={`market-price ${coin.price_change_percentage_24h < 0 && "market-price-red"}`}>
                        ${coin.current_price.toLocaleString()}
                    </h3>
                </Tooltip>

                <p className="total-volumn">Total Volume : ${coin.total_volume.toLocaleString()}</p>
                <p className="market-cap">Market Cap : ${coin.market_cap.toLocaleString()}</p>

            </motion.div>
        </NavLink>
    )
}

export default Grid
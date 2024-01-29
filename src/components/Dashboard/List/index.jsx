import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import "./style.css";
import { NavLink } from 'react-router-dom';
import WatchlistIcon from '../../Common/WatchlistIcon';
import convertNumber from "../../../functions/convertNumber";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";

const List = ({ coin, delay }) => {
    return (
        <NavLink to={`/coin/${coin.id}`}>
            <motion.tr className="list-row"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: delay }}
            >

                <Tooltip placement="bottom-start" title="Logo">
                    <td className="logo-td">
                        <img className="logo" src={coin.image} alt="coin-logo" />
                    </td>
                </Tooltip>

                <Tooltip placement="bottom-start" title="Coin Symbol">
                    <td className='info-td'>
                        <h3>{coin.symbol}-USD</h3>
                        <p>{coin.name}</p>
                    </td>
                </Tooltip>

                <Tooltip placement="bottom-start" title="Price changes percentage in 24h">
                    <td className={`price-change-td ${coin.price_change_percentage_24h < 0 && "price-change-td-red"}`}>
                        <h4>{coin.price_change_percentage_24h.toFixed(2)} %</h4>
                        {
                            coin.price_change_percentage_24h > 0 ?
                                <TrendingUpRoundedIcon className="icon-trending" /> :
                                <TrendingDownRoundedIcon className="icon-trending" />
                        }
                    </td>
                </Tooltip>

                <Tooltip placement="bottom-start" title="Current Price">
                    <td className={`current-price-td ${coin.price_change_percentage_24h < 0 && "current-price-td-red"}`}>
                        <h3>${coin.current_price.toLocaleString()}</h3>
                    </td>
                </Tooltip>

                <Tooltip placement="bottom-start" title="Total Volume">
                    <td className="volume-td desktop-td">
                        <p>${coin.total_volume.toLocaleString()}</p>
                    </td>
                </Tooltip>

                <Tooltip placement="bottom-start" title="Total Volume">
                    <td className="volume-td mobile-td">
                        <p>${convertNumber(coin.total_volume)}</p>
                    </td>
                </Tooltip>

                <Tooltip placement="bottom-start" title="Market Cap">
                    <td className="market-cap-td desktop-td">
                        <p>${coin.market_cap.toLocaleString()}</p>
                    </td>
                </Tooltip>

                <Tooltip placement="bottom-start" title="Market Cap">
                    <td className="market-cap-td mobile-td">
                        <p>${convertNumber(coin.market_cap)}</p>
                    </td>
                </Tooltip>


                <td className="watchlist-td">
                    <WatchlistIcon id={coin.id} price_change_percentage_24h={coin.price_change_percentage_24h} gridView={false} />
                </td>
            </motion.tr>
        </NavLink>
    )
}

export default List
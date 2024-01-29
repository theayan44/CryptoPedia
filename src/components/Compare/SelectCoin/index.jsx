import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./style.css";
import { useEffect, useState } from 'react';
import get100Coins from '../../../functions/get100Coins';

const SelectCoin = ({ firstCoinId, secondCoinId, handleCryptoChange }) => {
    const [allCoins, setAllCoins] = useState([]);

    const style = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--yellow)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "var(--white)",
                transition: "all 0.3s"
            },
        },

    }

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const myData = await get100Coins();
        if (myData) {
            setAllCoins(myData);
        }
    };

    return (
        <div className="select-coin-div">
            <p>Crypto 1 :</p>
            <div sx={{ minWidth: 120 }} className="select-btn">
                <FormControl>
                    <InputLabel style={{ color: "var(--white)" }} id="demo-simple-select-label">Crypto1</InputLabel>
                    <Select
                        sx={style}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={firstCoinId}
                        label="Crypto1"
                        onChange={(e) => handleCryptoChange(e, false)}
                    >
                        {
                            allCoins.filter((item) => item.id != secondCoinId).map((coin, i) => (<MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>))
                        }
                    </Select>
                </FormControl>
            </div>

            <p>Crypto 2 :</p>
            <div sx={{ minWidth: 120 }} className="select-btn">
                <FormControl>
                    <InputLabel style={{ color: "var(--white)" }} id="demo-simple-select-label">Crypto2</InputLabel>
                    <Select
                        sx={style}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={secondCoinId}
                        label="Crypto2"
                        onChange={(e) => handleCryptoChange(e, true)}
                    >
                        {
                            allCoins.filter((item) => item.id != firstCoinId).map((coin, i) => (<MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>))
                        }
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default SelectCoin;
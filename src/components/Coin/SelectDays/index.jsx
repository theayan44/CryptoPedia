import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./style.css";

const SelectDays = ({ days, handleDaysChange }) => {

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

    return (
        <div className="select-days-div">
            <p>Price In Last : </p>
            <div sx={{ minWidth: 120 }} className="select-btn">
                <FormControl>
                    <InputLabel style={{ color: "var(--white)" }} id="demo-simple-select-label">Days</InputLabel>
                    <Select
                        sx={style}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={days}
                        label="Days"
                        onChange={(e) => handleDaysChange(e)}
                    >
                        <MenuItem value={7}>7 Days</MenuItem>
                        <MenuItem value={15}>15 Days</MenuItem>
                        <MenuItem value={30}>1 Months</MenuItem>
                        <MenuItem value={60}>2 Months</MenuItem>
                        <MenuItem value={180}>6 Months</MenuItem>
                        <MenuItem value={360}>1 Year</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default SelectDays;
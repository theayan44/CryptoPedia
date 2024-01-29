import { CircularProgress } from "@mui/material";
import "./style.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <CircularProgress className="main-loader" />
        </div>
    )
}

export default Loader;



import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import "./style.css";
import { useState } from 'react';

const BackToTop = () => {
    const [display, setDisplay] = useState(false);

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="back-to-top-btn" style={{ display: display ? "flex" : "none" }} onClick={() => topFunction()}>
            <ArrowUpwardRoundedIcon />
        </div>
    )
}

export default BackToTop
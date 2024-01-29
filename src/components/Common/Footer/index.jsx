import React from "react";
import "./style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LinkedIn } from "@mui/icons-material";

function Footer() {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className="footer">
            <div className="text">
                <h2 className="logo" onClick={() => topFunction()}>
                    CryptoPedia.
                </h2>
                <p>Created by <span>~ayan</span></p>
                <p>Copyright &copy;2024 All rights reserved!</p>
            </div>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank">
                    <FacebookIcon className="social-link" />
                </a>
                <a href="mailto:theayan44@gmail.com" target="_blank">
                    <EmailIcon className="social-link" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <TwitterIcon className="social-link" />
                </a>
                <a href="https://www.linkedin.com/in/theayan44/" target="_blank">
                    <LinkedIn className="social-link" />
                </a>
            </div>
        </div>
    );
}

export default Footer;















// import "./style.css";

// const Footer = () => {
//     return (
//         <div className="footer">
//             <div className="footer-content">
//                 <p>Created by <span>~ayan</span></p>
//                 <p>Copyright &copy;2024 All rights reserved!</p>
//             </div>
//         </div>
//     )
// }

// export default Footer
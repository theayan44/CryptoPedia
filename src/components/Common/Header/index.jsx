import "./style.css";
import Button from '../Button';
import TemporaryDrawer from './drawer';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/">
                <h1 className='logo'>CryptoPedia<span style={{ color: "var(--yellow)" }}>.</span></h1>
            </NavLink>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/compare">Compare</NavLink>
                <NavLink to="/watchlist">Watchlist</NavLink>
                <NavLink to="/dashboard">
                    <Button text={"Dashboard"} />
                </NavLink>
            </div>
            <div className="mobile-drawer">
                <TemporaryDrawer />
            </div>
        </div>
    )
}

export default Header
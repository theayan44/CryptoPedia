import Drawer from '@mui/material/Drawer';
import { Button as IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useEffect, useState } from 'react';
import Button from '../Button';
import { NavLink } from 'react-router-dom';

const TemporaryDrawer = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <IconButton className="icon-btn" onClick={() => setOpen(true)}> <MenuRoundedIcon className='menu-icon' /> </IconButton>
            <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
                <div className="drawer-links">
                    <NavLink to="/">
                        <p className='link'>Home</p>
                    </NavLink>
                    <hr />
                    <NavLink to="/compare">
                        <p className='link'>Compare</p>
                    </NavLink>
                    <hr />
                    <NavLink to="/watchlist">
                        <p className='link'>Watchlist</p>
                    </NavLink>
                    <hr />
                    <NavLink to="/dashboard">
                        <Button text={"Dashboard"} outlineButton={true} />
                    </NavLink>
                </div>
            </Drawer>
        </div>
    );
}

export default TemporaryDrawer;
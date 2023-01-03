import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import Face5Icon from '@mui/icons-material/Face5Rounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const MainNavbar = () => {
    return (
        <>
            <nav>
                <div className='nav-link'>
                    <div className='nav-icon'>
                        <HomeIcon sx={{ fontSize: 40 }} />
                    </div>
                </div>
                <div className='nav-link'>
                    <div className='nav-icon'>
                        <AccountCircleIcon sx={{ fontSize: 40 }} />
                    </div>
                </div>
                <div className='nav-link'>
                    <div className='nav-icon'>
                        <InfoOutlinedIcon sx={{ fontSize: 40 }} />
                    </div>
                </div>
                {/* <div className='nav-link'>
                    <div className='nav-icon'>
                        <LogoutIcon sx={{ fontSize: 40 }} />
                    </div>
                </div> */}
            </nav>
        </>
    );
}

export default MainNavbar;
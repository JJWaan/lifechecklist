import React from 'react';

import UserCard from './user/UserCard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const MainContentRenderArea = () => {
    return (
        <>
            <main>
                <div className='add-card-container'>
                    <div className='add-card-icon'>
                        <AddCircleOutlineIcon sx={{ fontSize: 120 }} />
                    </div>
                </div>
                <UserCard />
            </main>
        </>
    );
}

export default MainContentRenderArea;
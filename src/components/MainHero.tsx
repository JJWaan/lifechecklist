import React from 'react';


import Typography from '@mui/material/Typography';

const MainHero = () => {
    return (
        <div className='hero'>
            <div className='hero-title'>
                <Typography variant="h1">
                    Main hero
                </Typography>
            </div>
            <div className='hero-paragraph'>                
                <Typography variant="body2" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum urna et enim tincidunt dictum a at turpis. Proin in semper nunc. Sed lectus purus, tempor ut finibus id, tincidunt quis tellus. Maecenas viverra a lorem id condimentum. Nulla bibendum metus malesuada erat feugiat tempor. Etiam vitae aliquet nunc. Curabitur ultrices ligula vitae sem porta congue. Vestibulum sollicitudin turpis neque, ut vehicula massa ultricies sed. Sed eget semper diam. 
                </Typography>
            </div>
        </div>
    );
}

export default MainHero;
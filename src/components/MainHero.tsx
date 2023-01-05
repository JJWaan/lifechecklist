import React from "react";

import Typography from "@mui/material/Typography";

const MainHero = () => {
    return (
        <div className="hero">
            <div className="hero-title">
                <span>Life Checklist</span>
            </div>
            <div className="hero-paragraph">
                <Typography variant="body2" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    dictum urna et enim tincidunt dictum a at turpis. Proin in
                    semper nunc. Sed lectus purus, tempor ut finibus id,
                    tincidunt quis tellus. Maecenas viverra a lorem id
                    condimentum.
                </Typography>
            </div>
        </div>
    );
};

export default MainHero;

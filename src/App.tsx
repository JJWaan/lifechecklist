import React, { createContext, useState } from "react";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import MainHero from "./components/MainHero";
import MainNavbar from "./components/MainNavbar";
import MainContentRenderArea from "./components/MainContentRenderArea";

interface Omena {
    flag: boolean;
    setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Konteksti = createContext<Omena | null>(null);

const App = () => {
    const [flag, setFlag] = useState(false);

    return (
        <>
            <div className="parent">
                <MainNavbar />
                <MainHero />
            </div>
            <Konteksti.Provider value={{ flag, setFlag }}>
                <MainContentRenderArea />
            </Konteksti.Provider>
        </>
    );
};

export default App;

import React, { createContext, useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import MainHero from "./components/MainHero";
import MainNavbar from "./components/MainNavbar";
import MainContentRenderArea from "./components/MainContentRenderArea";
import { use } from "./server/routes/api/initial";

interface Omena {
    keijo: boolean;
    setKeijo: React.Dispatch<React.SetStateAction<boolean>>;
    flag: boolean;
    setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Konteksti = createContext<Omena | null>(null);

const App = () => {
    const [flag, setFlag] = useState(false);
    const [keijo, setKeijo] = useState(false);

    return (
        <>
            <div className="parent">
                <MainNavbar />
                <MainHero />
            </div>
            <Konteksti.Provider value={{ flag, setFlag, keijo, setKeijo }}>
                <MainContentRenderArea />
            </Konteksti.Provider>
        </>
    );
};

export default App;

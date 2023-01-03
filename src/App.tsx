import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import MainHero from './components/MainHero';
import MainNavbar from './components/MainNavbar';
import MainContentRenderArea from './components/MainContentRenderArea';

const App = () => {
  return (
    <>
      <div className='parent'>
        <MainNavbar />
        <MainHero />
      </div>
      <MainContentRenderArea />
    </>
  );
}

export default App;
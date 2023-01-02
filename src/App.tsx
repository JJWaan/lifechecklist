import React from 'react';
import './App.css';
import MainContentRenderArea from './components/MainContentRenderArea';
import Mainheader from './components/Mainheader';
import MainHero from './components/MainHero';
import MainNavbar from './components/MainNavbar';

const App = () => {
  return (
    <>
      <Mainheader />
      <MainNavbar />
      <MainHero />
      <MainContentRenderArea />
    </>
  );
}

export default App;
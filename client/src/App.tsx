import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Challenge1 from './components/strings/Challenge1';
import Challenge2 from './components/strings/Challenge2';
import Challenge3 from './components/strings/Challenge3';
import Challenge4 from './components/strings/Challenge4';
import Challenge5 from './components/strings/Challenge5';

function App() {

  const [activeChallenge, setActiveChallenge] = React.useState<string>('')

  return (
    <>
    <Navbar activePage={activeChallenge} setActivePage={setActiveChallenge}/>
    {!activeChallenge && <Hero setActivePage={setActiveChallenge} />}
    {activeChallenge === 'Challenge1' && <Challenge1 />}
    {activeChallenge === 'Challenge2' && <Challenge2 />}
    {activeChallenge === 'Challenge3' && <Challenge3 />}
    {activeChallenge === 'Challenge4' && <Challenge4 />}
    {activeChallenge === 'Challenge5' && <Challenge5 />}
  </> 
  );
}

export default App;

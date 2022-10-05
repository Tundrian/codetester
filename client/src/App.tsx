import React from 'react';
import './App.css';
import Challenge1 from './components/strings/Challenge1';
import Challenge2 from './components/strings/Challenge2';

function App() {
  const categoryLinks: string[] = [
    'Strings',
    'Arrays'
  ]
  const stringLinks: { [key: string]: string[] } = {
    'Strings': [
      'Challenge1',
      'Challenge2'
    ]
  }
  const [activeCategory, setActiveCategory] = React.useState<string>('')
  const [activeChallenge, setActiveChallenge] = React.useState<string>('')
  // const [ActiveLink, setActiveLink] = React.useState<string>('')

  return (
    <>
      <header>
        <h1 className="text-center text-4xl text-cyan-500 py-5 w-full bg-gray-900">Blawblawlaw Blog Challenges</h1>

        <ul className="flex justify-start w-screen h-10 bg-slate-600 border-b border-b-slate-900">
          {categoryLinks.map(link => (
            <li className="w-fit h-full bg-slate-500 text-white border-r border-r-slate-900 border-r-2 hover:bg-slate-400">
              <button className="w-full h-full align-middle block px-5" onClick={() => setActiveCategory(link)}>{link}</button>
          </li>)
          )}
        </ul>

        <ul className="flex justify-start w-screen h-10 bg-slate-400">
            {activeCategory && stringLinks[activeCategory].map((link: string) => (
              <li className="w-fit h-full bg-slate-400 text-white border-r border-r-slate-900 border-r-2 hover:bg-slate-500">
              <button className="w-full h-full align-middle block px-5" onClick={() => setActiveChallenge(link)}>{link}</button>
          </li>)
            )}
        </ul>
    </header>

    {activeChallenge === 'Challenge1' && <Challenge1 />}
    {activeChallenge === 'Challenge2' && <Challenge2 />}
  </> 
  );
}

export default App;

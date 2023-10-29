import { useState } from 'react';
import './assets/styles/styles.css';
import './assets/styles/App.css';
import Home from './components/home/Home';
import Card from './components/Card/Card';

function App() {
  const [difficulty, setDifficulty] = useState(null);

  return (
    <>
      {difficulty === null ? (
        <Home difficulty={difficulty} setDifficulty={setDifficulty} />
      ) : (
        <Card setDifficulty={setDifficulty} difficulty={difficulty} />
      )}
    </>
  );
}

export default App;

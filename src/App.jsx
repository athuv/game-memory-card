import { useState } from 'react';
import './assets/styles/styles.css';
import './assets/styles/App.css';
import Home from './components/home/Home';
import Easy from './components/easy/Easy';

function App() {
  const [difficulty, setDifficulty] = useState(null);

  return (
    <>
      {difficulty === null ? (
        <Home difficulty={difficulty} setDifficulty={setDifficulty} />
      ) : difficulty === 'easy' ? (
        <Easy />
      ) : difficulty === 'medium' ? (
        'MEDIUM'
      ) : difficulty === 'hard' ? (
        'HARD'
      ) : (
        'SOMETHING WENT WRONG!'
      )}
    </>
  );
}

export default App;

import { useState } from 'react';
import './assets/styles/styles.css';
import './assets/styles/App.css';
import Home from './components/home/Home';

function App() {
  const [difficulty, setDifficulty] = useState(null);

  return (
    <>
      {difficulty === null ? (
        <Home difficulty={difficulty} setDifficulty={setDifficulty} />
      ) : (
        'ABCD'
      )}
    </>
  );
}

export default App;

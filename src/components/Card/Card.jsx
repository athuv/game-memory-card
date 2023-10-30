import { Header } from '../header-footer/Header';
import LevelCard from './LevelCard';
import Footer from '../header-footer/Footer';
import '../../assets/styles/InGame.css';

export default function Card({ setDifficulty, difficulty, score, setScore }) {
  return (
    <>
      <Header score={score} setDifficulty={setDifficulty} isDifficulty={true} />
      <LevelCard score={score} setScore={setScore} difficulty={difficulty} />
      <Footer inGame={true} />
    </>
  );
}

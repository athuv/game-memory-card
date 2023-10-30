import { useState, useEffect, useRef } from 'react';
import characters from '../../characters';
import Tilt from 'react-parallax-tilt';

function Card({ character, onClick, isImageVisible, cardRefs }) {
  return (
    <>
      {character.map((item, index) => (
        <div
          ref={(element) => (cardRefs.current[index] = element)}
          className={`card`}
          key={item.id}
          onClick={() => {
            onClick(item.id);
          }}
        >
          <Tilt className="card-container__card-wrapper">
            <div className={`card__overlay `}>
              {isImageVisible && (
                <picture>
                  <source srcSet={item.src} media="(min-width: 769px)" />

                  <img
                    className={`card__overlay--image`}
                    srcSet={character.src}
                    alt="overlay-image"
                  />
                </picture>
              )}
            </div>
            <picture>
              <source
                srcSet="../../public/images/card.jpg"
                media="(min-width: 769px)"
              />

              <img
                className={`card-section__card-container__card`}
                srcSet="../../public/images/card.jpg"
                alt="logo"
              />
            </picture>
          </Tilt>
        </div>
      ))}
    </>
  );
}

function LostComponent({ onClick }) {
  return <button onClick={onClick}>Lost Restart</button>;
}

function WinComponent({ onClick }) {
  return <button onClick={onClick}>Win Restart</button>;
}

export default function LevelCard({ difficulty, setScore, score }) {
  const [allCharacters, setAllCharacters] = useState(characters);
  const [randomCharacters, setRandomCharacters] = useState(getCharacters());
  const [isFlipped, setIsFlipped] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [gameStatus, setGameStatus] = useState({ isWin: false, isLost: false });
  const [initialized, setInitialized] = useState(false);
  const [rounds, setRounds] = useState({
    totalRound: initializeRounds(),
    playedRound: 0,
  });

  function initializeRounds() {
    const roundCount = {
      easy: 5,
      medium: 7,
      hard: 10,
    };

    const round = roundCount[difficulty] || null;
    return parseInt(round);
  }

  const cardRefs = useRef([]);

  function getCharacters() {
    const difficultyCounts = {
      easy: 3,
      medium: 4,
      hard: 5,
    };

    const count = difficultyCounts[difficulty] || null;

    const shuffledCharacters = allCharacters.sort(() => 0.5 - Math.random());
    const randomCharacters = shuffledCharacters.slice(0, count);
    return randomCharacters;
  }

  function isLost(id) {
    const clickedItem = allCharacters.find((character) => character.id === id);
    clickedItem.clicked
      ? setGameStatus((prevStatus) => ({
          ...prevStatus,
          isLost: true,
        }))
      : '';
  }

  function checkWin() {
    if (rounds.totalRound === rounds.playedRound + 1) {
      setGameStatus((prevStatus) => ({
        ...prevStatus,
        isWin: true,
      }));
    }
  }

  function changeClickedStatus(id) {
    gameStatus.isLost === false
      ? setAllCharacters((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, clicked: true } : item,
          ),
        )
      : null;
  }

  useEffect(() => {
    if (score.score > score.highScore) {
      setScore((prevScore) => ({
        ...prevScore,
        highScore: score.score,
      }));
    }
  }, [score.score]);

  useEffect(() => {
    if (initialized) {
      if (gameStatus.isLost === false) {
        cardRefs.current.forEach((card) => {
          card.classList.contains('card__flipped')
            ? card.classList.remove('card__flipped')
            : card.classList.add('card__flipped');
        });

        setScore((prevScore) => ({
          ...prevScore,
          score: prevScore.score + 1,
        }));

        setRounds((prevRounds) => ({
          ...prevRounds,
          playedRound: prevRounds.playedRound + 1,
        }));

        checkWin();

        setTimeout(() => {
          setIsImageVisible(true);
          setRandomCharacters(getCharacters());
        }, 600);
      }
    } else {
      setInitialized(true);
    }
  }, [isFlipped]);

  const handleTiltClick = (id) => {
    setIsImageVisible(false);
    isLost(id);
    changeClickedStatus(id);
    setIsFlipped(isFlipped === 0 ? 1 : 0);
  };

  const handleRestartClick = () => {
    setGameStatus((prevStatus) => ({
      ...prevStatus,
      isWin: false,
      isLost: false,
    }));

    setRounds((prevRounds) => ({
      ...prevRounds,
      totalRound: initializeRounds(),
      playedRound: 0,
    }));

    setScore((prevScore) => ({
      ...prevScore,
      score: 0,
    }));

    setAllCharacters(characters);
    setInitialized(false);
    setIsFlipped(0);
    setIsImageVisible(true);
  };

  return (
    <section className="card-section">
      <div className="card-section__card-container">
        {gameStatus.isLost ? (
          <LostComponent onClick={handleRestartClick} />
        ) : gameStatus.isWin ? (
          <WinComponent onClick={handleRestartClick} />
        ) : (
          <Card
            cardRefs={cardRefs}
            onClick={handleTiltClick}
            character={randomCharacters}
            isImageVisible={isImageVisible}
          />
        )}
      </div>
      <span className="card-section__rounds">{`${rounds.playedRound} / ${rounds.totalRound}`}</span>
    </section>
  );
}

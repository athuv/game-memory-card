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

export default function LevelCard({ difficulty }) {
  const [allCharacters, setAllCharacters] = useState(characters);
  const [randomCharacters, setRandomCharacters] = useState(getCharacters());
  const [isFlipped, setIsFlipped] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [score, setScore] = useState(0);
  const [isLostGame, setIslostGame] = useState(false);
  const [initialized, setInitialized] = useState(false);

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

  useEffect(() => {
    if (initialized) {
      isLostGame === false
        ? cardRefs.current.forEach((card) => {
            card.classList.contains('card__flipped')
              ? card.classList.remove('card__flipped')
              : card.classList.add('card__flipped');
          })
        : null;

      isLostGame === false
        ? setTimeout(() => {
            setIsImageVisible(true);
            setRandomCharacters(getCharacters());
          }, 600)
        : null;
    } else {
      setInitialized(true);
    }
  }, [isFlipped]);

  function isLost(id) {
    const clickedItem = allCharacters.find((character) => character.id === id);
    clickedItem.clicked ? setIslostGame(true) : '';
  }

  function changeClickedStatus(id) {
    isLostGame === false
      ? setAllCharacters((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, clicked: true } : item,
          ),
        )
      : null;
  }

  const handleTiltClick = (id) => {
    setIsImageVisible(false);
    isLost(id);
    changeClickedStatus(id);
    setIsFlipped(isFlipped === 0 ? 1 : 0);
  };

  return (
    <section className="card-section">
      <div className="card-section__card-container">
        {isLostGame ? (
          'lost'
        ) : (
          <Card
            cardRefs={cardRefs}
            onClick={handleTiltClick}
            character={randomCharacters}
            isImageVisible={isImageVisible}
          />
        )}
      </div>
    </section>
  );
}

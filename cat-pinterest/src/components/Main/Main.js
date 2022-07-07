import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Loader from "react-loaders";
import "./Main.scss";

const Main = () => {
  const [cards, setCards] = useState([]);
  const [cardsToShow, setCardsToShow] = useState(15);
  const [isLoading, setIsLoading] = useState(false)

  const showMore = () => {
    setCardsToShow((cardsToShow) => cardsToShow + 15);
  };


  useEffect(() => {
    setIsLoading(false)
    fetch(`https://api.thecatapi.com/v1/images/search?limit=45`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "28dc33f4-d047-4060-93b7-b16118251b6a",
      },
    })
      .then((res) => res.json())
      .then((cards) => {
        setCards(cards);
        setIsLoading(true)
      })
  }, []);

  return isLoading ?  (
    <>
      <div className="container">
        <div className="card-grid">
          {cards.slice(0, cardsToShow).map((data) => {
            return (
              <Card
                key={data.id}
                url={data.url}
                cards={cards}
              />
            );
          })}
        </div>
         <button type="button" className="button__add" onClick={showMore}>
          ... загружаем еще котиков ...
        </button>
      </div>
    </>
  ) : (<Loader type="ball-pulse" />);
};

export default Main;

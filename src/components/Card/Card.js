import React from "react";
import "./Card.scss";
import { useLocation } from "react-router-dom";

const Card = (props) => {
  const { cards, url } = props;
  const location = useLocation();

  function addCard(cards) {
    let likedCards = JSON.parse(localStorage.getItem("likedCards")) || [];
    likedCards.push(cards);
    localStorage.setItem("likedCards", JSON.stringify(likedCards));
  }

  function deleteCard(cards) {
    let likedCards = JSON.parse(localStorage.getItem("likedCards")) || [];
    let newArr = likedCards.filter(function (c) {
      return c !== cards;
    });
    localStorage.setItem("likedCards", JSON.stringify(newArr));
    window.location.reload();
  }


  return location.pathname !== "/likes" ? (
    <div className="card__container">
      <div className="card">
        <img className="card__image" src={url} alt="cat"></img>
        <button onClick={() => addCard(url)} className="card__like"></button>
      </div>
    </div>
  ) : (
    <div className="card__container">
      <div className="card">
        <img className="card__image" src={cards} alt="cat"></img>
        <button onClick={() => deleteCard(cards)} className="card__like"></button>
      </div>
    </div>
  );
};

export default Card;

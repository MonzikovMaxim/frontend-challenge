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
    window.location.reload()
  }


  return location.pathname !== "/likes" ? (
    <div className="card__container">
      <div className="card">
        <img className="card__image" src={url} alt="cat"></img>
        <div className="card__like-container" >
          <input className="card__like-checkbox" type="checkbox" id={url} />
          <label htmlFor={url} onClick={() => addCard(url)} className="card__like-label"></label> 
        </div>
      </div>
    </div>
  ) : (
    <div className="card__container">
      <div className="card">
        <img className="card__image" src={cards} alt="cat"></img>
        <div className="card__like-container">
          <input className="card__like-checkbox" defaultChecked type="checkbox" id={url} />
          <label htmlFor={url} onClick={() => deleteCard(cards)} className="card__like-label"></label> 
        </div>
      </div>
    </div>
  );
};

export default Card;

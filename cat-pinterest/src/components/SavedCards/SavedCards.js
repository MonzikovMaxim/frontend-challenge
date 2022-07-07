import React from "react";
import "./SavedCards.scss";

import Card from "../Card/Card";

const SavedCards = () => {
  const savedCardList = JSON.parse(localStorage.getItem("likedCards")) || [];
  return savedCardList.length === 0 ? (
    <>
      {" "}
      <div className="container">
        <div className="empty">
          <span> Котики не добавлены</span>
        </div>{" "}
      </div>
    </>
  ) : (
    <>
      <div className="container">
        <div className="card-grid">
          {savedCardList.map((card) => {
            return <Card key={card.id + 1} cards={card} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SavedCards;

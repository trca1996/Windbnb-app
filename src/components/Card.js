import React from "react";
import "./Card.scss";

function Card({ title, rating, type, host, photo, bed }) {
  return (
    <div className="card">
      <img src={photo} alt={title} />

      <div className="card__heading">
        {host ? <div className="card__superHost">SUPER HOST</div> : null}

        <p className="card__type">{`${type} ${bed ? `. ${bed} beds` : ""}`}</p>

        <p className="card__rating">
          <span className="material-icons">star_rate</span>
          {rating}
        </p>
      </div>

      <h3 className="card__title">{title}</h3>
    </div>
  );
}

export default Card;

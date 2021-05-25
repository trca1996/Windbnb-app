import React, { useState } from "react";
import "./Filter.scss";

function Filter() {
  const [extend, setExtend] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setExtend(!extend);
  };

  return (
    <div className={`filter ${extend ? "filter--extend" : ""}`}>
      <form className="filter__form">
        <label htmlFor="location" className="filter__input">
          <span>LOCATION</span>
          <input
            autoComplete="off"
            id="location"
            type="text"
            placeholder="Add location"
          />
        </label>

        <label htmlFor="guests" className="filter__input">
          <span>GUESTS</span>
          <input
            autoComplete="off"
            id="guests"
            type="text"
            placeholder="Add guests"
          />
        </label>

        <button
          onClick={handleSearch}
          type="submit"
          className={`filter__submit ${extend ? "filter__submit--extend" : ""}`}
        >
          <span className="material-icons">search</span>
          <p>Submit</p>
        </button>
      </form>

      <div className="filter__options">
        <div className="filter__locations">
          <button value="Helsinki">
            <span className="material-icons">place</span>
            <p>Helsinki, Finland</p>
          </button>
          <button value="Turku">
            <span className="material-icons">place</span>
            <p>Turku, Finland</p>
          </button>
          <button value="Oulu">
            <span className="material-icons">place</span>
            <p>Oulu, Finland</p>
          </button>
          <button value="Vaasa">
            <span className="material-icons">place</span>
            <p>Vaasa, Finland</p>
          </button>
        </div>

        <div className="filter__guests">
          <div>
            <p className="filter__guests--head">Adults</p>
            <span className="filter__guests--ages">Ages 13 or above</span>
            <div>
              <button className="filter__guests--minus">-</button>
              <p>0</p>
              <button className="filter__guests--plus">+</button>
            </div>
          </div>

          <div>
            <p className="filter__guests--head">Children</p>
            <span className="filter__guests--ages">Ages 2-12</span>
            <div>
              <button className="filter__guests--minus">-</button>
              <p>0</p>
              <button className="filter__guests--plus">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

import React, { useState } from "react";
import "./Filter.scss";

function Filter() {
  const [extend, setExtend] = useState(false);

  const [location, setLocation] = useState("");

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const guests = adults + children;

  const handleSearch = (e) => {
    e.preventDefault();
    if (extend) setExtend(!extend);
  };

  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const onClickInput = () => {
    if (!extend) setExtend(true);
  };

  return (
    <div className={`filter ${extend ? "filter--extend" : ""}`}>
      <form className="filter__form">
        <label htmlFor="location" className="filter__input">
          <span>LOCATION</span>
          <input
            value={location}
            onChange={handleChangeLocation}
            onClick={onClickInput}
            autoComplete="off"
            id="location"
            type="text"
            placeholder="Add location"
          />
        </label>

        <label htmlFor="guests" className="filter__input">
          <span>GUESTS</span>
          <input
            value={adults + children === 0 ? "" : adults + children}
            readOnly
            onClick={onClickInput}
            autoComplete="off"
            id="guests"
            type="number"
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
          <button onClick={(e) => setLocation(e.target.value)} value="Helsinki">
            <span className="material-icons">place</span>
            {/* <p>Helsinki, Finland</p> */}
            Helsinki, Finland
          </button>
          <button onClick={(e) => setLocation(e.target.value)} value="Turku">
            <span className="material-icons">place</span>
            {/* <p>Turku, Finland</p> */}
            Turku, Finland
          </button>
          <button onClick={(e) => setLocation(e.target.value)} value="Oulu">
            <span className="material-icons">place</span>
            {/* <p>Oulu, Finland</p> */}
            Oulu, Finland
          </button>
          <button onClick={(e) => setLocation(e.target.value)} value="Vaasa">
            <span className="material-icons">place</span>
            {/* <p>Vaasa, Finland</p> */}
            Vaasa, Finland
          </button>
        </div>

        <div className="filter__guests">
          <div>
            <p className="filter__guests--head">Adults</p>
            <span className="filter__guests--ages">Ages 13 or above</span>
            <div>
              <button
                onClick={() => setAdults(adults === 0 ? 0 : adults - 1)}
                className="filter__guests--minus"
              >
                -
              </button>
              <p>{adults}</p>
              <button
                onClick={() => setAdults(adults + 1)}
                className="filter__guests--plus"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <p className="filter__guests--head">Children</p>
            <span className="filter__guests--ages">Ages 2-12</span>
            <div>
              <button
                onClick={() => setChildren(children === 0 ? 0 : children - 1)}
                className="filter__guests--minus"
              >
                -
              </button>
              <p>{children}</p>
              <button
                onClick={() => setChildren(children + 1)}
                className="filter__guests--plus"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

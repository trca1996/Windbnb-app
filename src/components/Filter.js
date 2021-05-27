import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilterData } from "../features/dataSlice";
import "./Filter.scss";

function Filter() {
  const dispatch = useDispatch();
  const [extend, setExtend] = useState(false);
  const [locationShow, setlocationShow] = useState(false);
  const [guestsShow, setGuestsShow] = useState(false);

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const [location, setLocation] = useState("");

  let arg = {
    city: location.toLowerCase().trim(),
    guests: adults + children,
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (extend) setExtend(!extend);
    dispatch(getFilterData(arg));
  };

  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const onClickLocation = () => {
    if (!extend) setExtend(true);
    setlocationShow(true);
    setGuestsShow(false);
  };

  const onClickGuests = () => {
    if (!extend) setExtend(true);
    setGuestsShow(true);
    setlocationShow(false);
  };

  return (
    <div className={`filter ${extend ? "filter--extend" : ""}`}>
      <form className="filter__form">
        <label htmlFor="location" className="filter__input">
          <span>LOCATION</span>
          <input
            value={location}
            onChange={handleChangeLocation}
            onClick={onClickLocation}
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
            onClick={onClickGuests}
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
        <div
          className={`filter__locations ${
            locationShow ? "" : "filter__locations--hidden"
          }`}
        >
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

        <div
          className={`filter__guests ${
            guestsShow ? "" : "filter__guests--hidden"
          }`}
        >
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

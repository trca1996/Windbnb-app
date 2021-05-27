import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Card from "./components/Card";
import Filter from "./components/Filter";
import { getAllData } from "./features/dataSlice";

function App() {
  const data = useSelector((state) => state.data.renderData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <div className="app">
      <img className="app__logo" src="/images/logo.png" alt="logo" />

      <Filter />

      <main className="main">
        <div className="main__heading">
          <h1>Stays in Finland</h1>
          <p>12+ stays</p>
        </div>

        <div className="main__cards">
          {data && data.length > 0 ? (
            data.map((card, i) => {
              return (
                <Card
                  key={i}
                  title={card.title}
                  rating={card.rating}
                  type={card.type}
                  host={card.superHost}
                  photo={card.photo}
                  bed={card.beds}
                />
              );
            })
          ) : (
            <p className="main__message">
              There are no accommodations that match these parameters 😥
            </p>
          )}
        </div>
      </main>

      <p className="app__createBy">
        created by <span className="app__userName">trca1996</span> -
        devChallenges.io
      </p>
    </div>
  );
}

export default App;

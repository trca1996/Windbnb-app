import "./App.scss";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="app">
      <img className="app__logo" src="/images/logo.png" alt="logo" />

      <Filter />
    </div>
  );
}

export default App;

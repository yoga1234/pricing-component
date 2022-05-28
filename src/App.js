import "./App.css";

import WhitePrice from "./components/WhitePrice/WhitePrice";
import MainPrice from "./components/MainPrice/MainPrice";

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Our Pricing</h1>
      <div className="switch-container">
        <p>Annually</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p>Monthly</p>
      </div>
      <WhitePrice />
      <MainPrice />
    </div>
  );
}

export default App;

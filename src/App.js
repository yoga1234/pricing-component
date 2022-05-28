import "./App.css";

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
      <p>component goes here</p>
    </div>
  );
}

export default App;

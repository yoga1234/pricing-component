import React from "react";
import "./App.css";

import data from "./data.json";

import WhitePrice from "./components/WhitePrice/WhitePrice";
import MainPrice from "./components/MainPrice/MainPrice";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { annually: false };
  }

  checkHandle = (e) => {
    this.setState({ annually: e.target.checked });
    console.log(data.product.monthly);
  };

  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      product: data.product,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-title">Our Pricing</h1>
        <div className="switch-container">
          <p>Annually</p>
          <label className="switch">
            <input
              onChange={(e) => {
                this.checkHandle(e);
              }}
              type="checkbox"
              checked={this.state.annually}
            />
            <span className="slider round"></span>
          </label>
          <p>Monthly</p>
        </div>
        <div className="card-container">
          <WhitePrice />
          <MainPrice />
          <WhitePrice />
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1 className="main-title">Our Pricing</h1>
//       <div className="switch-container">
//         <p>Annually</p>
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider round"></span>
//         </label>
//         <p>Monthly</p>
//       </div>
//       <div className="card-container">
//         <WhitePrice />
//         <MainPrice />
//         <WhitePrice />
//       </div>
//     </div>
//   );
// }

export default App;

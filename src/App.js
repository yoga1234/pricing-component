import React from "react";
import "./App.css";

import data from "./data.json";

import WhitePrice from "./components/WhitePrice/WhitePrice";
import MainPrice from "./components/MainPrice/MainPrice";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { annually: false, activeData: false };
  }

  checkHandle = (e) => {
    this.setState({ annually: e.target.checked });
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
          <WhitePrice
            basic={
              this.state.product === undefined
                ? "undefined"
                : this.state.annually === false
                ? this.state.product.monthly.basic
                : this.state.product.annually.basic
            }
          />
          <MainPrice
            professional={
              this.state.product === undefined
                ? "undefined"
                : this.state.annually === false
                ? this.state.product.monthly.professional
                : this.state.product.annually.professional
            }
          />
          <WhitePrice
            master={
              this.state.product === undefined
                ? "undefined"
                : this.state.annually === false
                ? this.state.product.monthly.master
                : this.state.product.annually.master
            }
          />
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

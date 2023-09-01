import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <CurrencyConvterSection />
    </div>
  );
}

function Main() {
  return (
    <>
      <div className="main">
        <div className="heading">
          <div className="main-head">
            <p id="first">Currency</p>

            <p id="sec">Converter</p>
          </div>

          <p>
            Explore Global Currencies at a Glance: Real-Time Updates for Every
            Country's Exchange Rate.
          </p>
          <span>
            <img src="./images/money.jpg" alt="money icon" />
          </span>
        </div>
        <div className="icon">
          <img src="./images/converter.jpg" alt="converter icon" />
        </div>
      </div>
      <hr />
    </>
  );
}

function CurrencyConvterSection() {
  return (
    <div className="curr-con-sec">
      <div className="curr-from">
        <img src="./images/coin/usd.png" alt="" />
        <select>
          <option value="INR">INR</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <input type="number" />
      </div>
    </div>
  );
}

export default App;

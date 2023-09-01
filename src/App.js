import "./App.css";
import Navbar from "./component/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("INR");
  const [converted, setConverted] = useState("");
  const [date, setDate] = useState("");

  useEffect(
    function () {
      if (amount === 0) return setConverted(0);
      async function convert() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
        setDate(data.date);
      }

      if (fromCur === toCur) return setConverted(amount);
      convert();
    },
    [amount, fromCur, toCur]
  );
  return (
    <div className="App">
      <Navbar />
      <Main />
      <CurrencyConvterSection
        amount={amount}
        setAmount={setAmount}
        fromCur={fromCur}
        setFromCur={setFromCur}
        toCur={toCur}
        setToCur={setToCur}
        converted={converted}
        date={date}
      />
    </div>
  );
}

function Main() {
  return (
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
  );
}

function CurrencyConvterSection({
  amount,
  setAmount,
  fromCur,
  setFromCur,
  toCur,
  setToCur,
  converted,
  date,
}) {
  return (
    <>
      <div className="curr-con-sec">
        <div className="curr-from">
          <img src={`./images/coin/${fromCur}.png`} alt="" />
          <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
          </select>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="exchange-icon">
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </div>
        <div className="curr-to">
          <img src={`./images/coin/${toCur}.png`} alt="" />
          <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
          </select>
          <input type="text" disabled value={converted} />
        </div>
      </div>
      <div className="showValuePerCoin">
        1 {fromCur} = {(converted / amount).toFixed(2)} {toCur}
      </div>
      <div className="showLastUpdate">
        <p>Last Update : {date}</p>
      </div>
    </>
  );
}

export default App;

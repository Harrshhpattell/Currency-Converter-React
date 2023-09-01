import "./App.css";
import Main from "./component/Main";
import CurrencyConvterSection from "./component/CurrencyConvterSection";
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

export default App;

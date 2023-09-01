export default function CurrencyConvterSection({
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

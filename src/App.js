import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

function Main() {
  return <p>hello</p>;
}

export default App;

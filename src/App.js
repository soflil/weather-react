import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        <a
          href="https://github.com/soflil/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by{" "}
        <a
          href="https://www.linkedin.com/in/sophie-schou-166b85278/"
          target="_blank"
          rel="noreferrer"
        >
          Sophie Schou
        </a>
      </p>
    </div>
  );
}

export default App;

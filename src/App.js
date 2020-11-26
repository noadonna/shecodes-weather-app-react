import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
        <Weather defaultCity="Amsterdam" />
        </header>
        <div className="footer">
        <a href="https://github.com/noadonna/shecodes-weather-app-react" target="_blank" rel="noreferrer">
          Open-source code
        </a>{" "}by{" "}
        <a href="https://www.linkedin.com/in/carinevaneekelen" target="_blank" rel="noreferrer">Carine</a>
        </div>
      </div>
    </div>
    
  );
}

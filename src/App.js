
import './App.css';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Game data={{ Germany: "Berlin", Azerbaijan: "Baku",Afghanistan:"Kabul",Albania:"Tirana",Colombia:"Santaf",England:"London" }}  />
      </header>
    </div>
  );
}

export default App;

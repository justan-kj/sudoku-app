import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board.js";
import Grid from "./components/Grid.js";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center">
        <Board />
      </div>
    </div>
  );
}

export default App;

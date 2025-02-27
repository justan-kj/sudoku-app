import logo from "./logo.svg";
import "./App.css";
import BoardComponent from "./components/Board.js";
import Grid from "./components/Grid.js";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center">
        <BoardComponent />
      </div>
    </div>
  );
}

export default App;

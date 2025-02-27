import Card from "react-bootstrap/Card";
import Grid from "./Grid";
import { Board } from "../services/BoardClass.js";
import Controls from "./Controls";
import { useEffect, useState, useCallback } from "react";
import SettingsPane from "./SettingsPane.js";
import Button from "react-bootstrap/Button";
const board = new Board("main");

board.import(
  "..24....1.3......47....3.5..261.....9........4..67.....1....9.7...5....6...361..."
);
console.log(board);
function BoardComponent() {
  const [gridSize, setGridSize] = useState(50);
  const [selected, setSelected] = useState();
  const [errors, setErrors] = useState();
  //Dummy state to trigger rerenders. Maybe I'll use it for logging later?
  const [timestamp, setTimestamp] = useState(Date.now());
  const [fillMode, setFillMode] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  board.gridSize = gridSize;
  board.selected = selected;
  board.errors = errors;

  const changeValue = useCallback((value) => {
    setErrors([]);
    if (value === 0) {
      selected?.setValue("");
    } else if (value === "check") {
      checkGrid();
    } else {
      if (fillMode) {
        selected?.setValue(value);
        selected?.clearCandidates();
      } else {
        selected?.setValue("");
        selected?.setCandidate(value);
      }
    }
    setTimestamp(Date.now());
  });

  const changeSelection = (selected_cell) => {
    console.log("Timestamp");
    setErrors([]);
    setSelected(selected_cell);
    setTimestamp(Date.now());
  };
  const toggleFillMode = () => {
    setFillMode(!fillMode);
    console.log(fillMode);
  };

  const checkGrid = () => {
    setErrors(board.grid.checkErrors());
  };

  const changeGridSize = (value) => {
    setGridSize(value);
  };

  const handleKeyPress = useCallback(
    (event) => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      console.log(event.key);
      if (numbers.includes(Number(event.key))) {
        changeValue(Number(event.key));
      }
      if (event.key === "Shift") {
        toggleFillMode();
      }
    },
    [changeValue]
  );

  return (
    <Card className="w-75 h-75 m-1">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h2>Sudoku</h2>
        <div className="d-flex align-items-center gap-2">
          <Button
            variant="outline-secondary"
            onClick={() => setShowSettings(!showSettings)}>
            <i className="bi bi-gear"></i>
          </Button>
          <SettingsPane
            show={showSettings}
            onHide={() => setShowSettings(false)}
            gridSize={gridSize}
            setGridSize={setGridSize}
            // Add other settings here
          />
        </div>
      </Card.Header>
      <Card.Body className="d-flex gap-3">
        {/* Grid Section */}
        <div className="flex-grow-1 d-flex justify-content-center">
          {board?.grid && (
            <Grid
              grid={board?.grid}
              changeSelection={changeSelection}
              board={board}
              timestamp={timestamp}
            />
          )}
        </div>

        {/* Controls Section */}
        <div className="d-flex align-items-center">
          <Controls
            onPress={changeValue}
            onHotkeyPress={handleKeyPress}
            fillMode={fillMode}
            toggle={toggleFillMode}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default BoardComponent;

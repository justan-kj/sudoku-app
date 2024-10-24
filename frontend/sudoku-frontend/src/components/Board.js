import Card from "react-bootstrap/Card";
import Grid from "./Grid";
import { Board } from "../services/BoardClasses.js";
import Controls from "./Controls";
import { useEffect, useState, useCallback } from "react";
import Form from "react-bootstrap/Form";

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
  board.gridSize = gridSize;
  board.selected = selected;
  board.errors = errors;

  const changeValue = useCallback((value) => {
    console.log(value);
    if (value === 0) {
      setErrors([]);
      selected?.setValue("");
    } else if (value === "check") {
      setErrors(board.grid.checkErrors());
    } else {
      setErrors([]);
      selected?.setValue(value);
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

      if (numbers.includes(Number(event.key))) {
        changeValue(Number(event.key));
      }
    },
    [changeValue]
  );

  return (
    <Card className="w-75 h-75 m-1 ">
      <Card.Header>
        <h2>Sudoku</h2>
        <>
          <Form.Label>Grid Size</Form.Label>
          <Form.Range
            value={gridSize}
            onChange={(e) => changeGridSize(e.target.value)}
          />
        </>
      </Card.Header>
      <Card.Body className="d-flex justify-content-center ">
        {board?.grid && (
          <Grid
            grid={board?.grid}
            changeSelection={changeSelection}
            board={board}
            timestamp={timestamp}
          />
        )}
      </Card.Body>
      <Card.Footer>
        <Controls
          onPress={changeValue}
          onHotkeyPress={handleKeyPress}
          fillMode={fillMode}
          toggle={toggleFillMode}
        />
      </Card.Footer>
    </Card>
  );
}

export default BoardComponent;

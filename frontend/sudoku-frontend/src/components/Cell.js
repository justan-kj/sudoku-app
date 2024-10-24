import { useEffect, useState, useContext } from "react";

function Cell({ size, thickT, thickR, cell, onClick, timestamp, board }) {
  const [value, setValue] = useState(cell.value);
  const [color, setColor] = useState("white");

  useEffect(() => {
    setValue(cell.value);

    board?.selected && changeColor();
  }, [timestamp]);

  const changeColor = () => {
    const selectedCell = board?.selected;
    const selection = {
      main: selectedCell,
      peers: selectedCell.row.concat(selectedCell.col, selectedCell.box),
      errors: board?.errors,
    };
    let cellcolor = "white";
    if (cell.locked) {
      cellcolor = "#f2f2f2";
    } else if (selection["errors"]?.includes(cell)) {
      cellcolor = "#ffb7c4";
    } else if (selection["main"] === cell) {
      cellcolor = "#b7f0ff";
    } else if (selection["peers"].includes(cell)) {
      cellcolor = "#ecf9ff";
    }
    setColor(cellcolor);
  };
  const handleClick = () => {
    onClick(cell);
  };

  const cellStyle = {
    width: size + "px",
    height: size + "px",
    borderLeft: "0.5px solid lightgray",
    borderTop: thickT ? "1px solid black" : "0.5px solid lightgray",
    borderBottom: "0.5px solid lightgray",
    borderRight: thickR ? "1px solid black" : "0.5px solid lightgray",
    fontSize: "1.6em",
    backgroundColor: color,
  };

  return (
    <div
      className="container d-flex p-0 m-0 user-select-none justify-content-center align-items-center"
      onClick={handleClick}
      style={cellStyle}
    >
      {value}
    </div>
  );
}

export default Cell;

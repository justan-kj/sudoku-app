import { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cell({ size, thickT, thickR, cell, onClick, timestamp, board }) {
  const [value, setValue] = useState(cell.value);
  const [cellColor, setCellColor] = useState("white");
  const [candidateColor, setcandidateColor] = useState("white");

  useEffect(() => {
    setValue(cell.value);
    if (board?.selected) {
      changeColor();
    }
  }, [timestamp]);

  const changeColor = () => {
    const selectedCell = board?.selected;
    const selection = {
      main: selectedCell,
      peers: selectedCell.row.concat(selectedCell.col, selectedCell.box),
      matches: cell.grid.cellsMatching(selectedCell?.value),
      errors: board?.errors,
    };
    let color = "white";

    if (selection["errors"]?.includes(cell)) {
      color = "#ffb7c4";
    } else if (selectedCell === cell) {
      color = "#f9d68f";
    } else if (selection["matches"].includes(cell)) {
      color = "#ace5ff";
    } else if (cell.locked) {
      color = "#f2f2f2";
    }
    setCellColor(color);
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
    backgroundColor: cellColor,
    position: "relative",
  };

  const candidatesStyle = {
    display: "grid",
    backgroundColor: cellColor,
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    width: "100%",
    height: "100%",
    fontSize: "0.35em",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <Container
      className="d-flex p-0 m-0 user-select-none justify-content-center align-items-center"
      onClick={handleClick}
      style={cellStyle}
    >
      {value ? (
        <span>{value}</span>
      ) : (
        <div style={candidatesStyle}>
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center"
            >
              {cell.candidates[index + 1] && index + 1}
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

export default Cell;

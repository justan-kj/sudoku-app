import Cell from "./Cell";
import { useState } from "react";

function Grid({ grid, board, changeSelection, timestamp }) {
  const size = board.gridSize * 0.2 + 30;
  const getGrid = () => {
    return (
      <>
        {[...Array(9)].map((_, rowIndex) => (
          <div key={rowIndex} className="d-flex">
            {[...Array(9)].map((_, colIndex) => {
              const thickR = colIndex === 2 || colIndex === 5 ? 1 : 0;
              const thickT = rowIndex === 3 || rowIndex === 6 ? 1 : 0;
              return (
                <Cell
                  key={grid.name + colIndex}
                  size={size}
                  board={board}
                  cell={grid.cell(rowIndex + 1, colIndex + 1)}
                  onClick={changeSelection}
                  thickR={thickR}
                  thickT={thickT}
                  timestamp={timestamp}
                />
              );
            })}
          </div>
        ))}
      </>
    );
  };

  return <div className="d-block p-1">{getGrid()}</div>;
}

export default Grid;

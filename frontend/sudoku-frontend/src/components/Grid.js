import Card from "react-bootstrap/Card";
import Cell from "./Cell";

function Grid() {
  const size = 40;
  var thickT = 0;
  var thickR = 0;
  const getGrid = () => {
    return (
      <>
        {[...Array(9)].map((_, rowIndex) => (
          <div key={rowIndex} className="d-flex">
            {[...Array(9)].map((_, colIndex) => {
              thickR = colIndex === 2 || colIndex === 5 ? 1 : 0;
              thickT = rowIndex === 3 || rowIndex === 6 ? 1 : 0;
              return (
                <Cell
                  key={colIndex}
                  size={size}
                  thickR={thickR}
                  thickT={thickT}
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

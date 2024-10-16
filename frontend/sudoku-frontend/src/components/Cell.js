import Ratio from "react-bootstrap/Ratio";

function Cell({ size, thickT, thickR }) {
  const value = 5;
  const cellStyle = {
    width: size + "px",
    height: size + "px",
    borderLeft: "0.5px solid gray",
    borderTop: thickT === 1 ? "2px solid black" : "0.5px solid gray",
    borderBottom: "0.5px solid gray",
    borderRight: thickR === 1 ? "2px solid black" : "0.5px solid gray",
  };
  return (
    <h4
      className="container d-flex p-0 m-0  justify-content-center align-items-center"
      style={cellStyle}
    >
      {value}
    </h4>
  );
}

export default Cell;

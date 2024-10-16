import Card from "react-bootstrap/Card";
import Grid from "./Grid";
import Controls from "./Controls";
function Board() {
  return (
    <Card className="w-75 h-75 m-1 ">
      <Card.Header>
        <h2>Sudoku</h2>
      </Card.Header>
      <Card.Body className="d-flex justify-content-center ">
        <Grid />
      </Card.Body>
      <Card.Footer>
        <Controls />
      </Card.Footer>
    </Card>
  );
}

export default Board;

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Controls() {
  return (
    <div className="container d-flex-inline justify-content-center flex-column">
      <div className="container d-flex-inline">
        <Button className="m-1">1</Button>
        <Button className="m-1">2</Button>
        <Button className="m-1">3</Button>
        <Button className="m-1">4</Button>
        <Button className="m-1">5</Button>
      </div>
      <div className="container d-flex-inline gap-1">
        <Button className="m-1">6</Button>
        <Button className="m-1">7</Button>
        <Button className="m-1">8</Button>
        <Button className="m-1">9</Button>
        <Button className="m-1">X</Button>
      </div>
    </div>
  );
}

export default Controls;

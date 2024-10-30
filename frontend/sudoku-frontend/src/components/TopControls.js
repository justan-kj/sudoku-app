import Button from "react-bootstrap/Button";

function TopControls({ onPress }) {
  return (
    <div className="container w-75">
      <div className="row justify-content-center">
        <Button onClick={() => onPress(1)} className="m-1 col-1">
          Import
        </Button>
        <Button onClick={() => onPress(2)} className="m-1 col-1">
          Reset
        </Button>
        <Button onClick={() => onPress(3)} className="m-1 col-1">
          Settings
        </Button>
      </div>
    </div>
  );
}

export default TopControls;

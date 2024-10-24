import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useCallback, useEffect } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
function Controls({ onPress, onHotkeyPress, fillMode, toggle }) {
  useEffect(() => {
    document.addEventListener("keydown", onHotkeyPress);
    return () => {
      document.removeEventListener("keydown", onHotkeyPress);
    };
  }, [onHotkeyPress]);

  return (
    <div className="container w-75">
      <div className="row justify-content-center">
        <Button onClick={() => onPress(1)} className="m-1 col-1">
          1
        </Button>
        <Button onClick={() => onPress(2)} className="m-1 col-1">
          2
        </Button>
        <Button onClick={() => onPress(3)} className="m-1 col-1">
          3
        </Button>
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={fillMode}
          value="1"
          onChange={(e) => toggle(e.currentTarget.checked)}
          style={{
            backgroundColor: fillMode ? "#0d6efd" : "#6c757d",
            color: "white",
          }}
          className="m-1 col-1"
        >
          <i className="bi bi-pencil"></i>
        </ToggleButton>
      </div>
      <div className="row justify-content-center">
        <Button onClick={() => onPress(4)} className="m-1 col-1">
          4
        </Button>
        <Button onClick={() => onPress(5)} className="m-1 col-1">
          5
        </Button>
        <Button onClick={() => onPress(6)} className="m-1 col-1">
          6
        </Button>
        <Button onClick={() => onPress(0)} className="m-1 col-1">
          <i className="bi bi-eraser"></i>
        </Button>
      </div>
      <div className="row  justify-content-center">
        <Button onClick={() => onPress(7)} className="m-1 col-1">
          7
        </Button>
        <Button onClick={() => onPress(8)} className="m-1 col-1">
          8
        </Button>
        <Button onClick={() => onPress(9)} className="m-1 col-1">
          9
        </Button>

        <Button onClick={() => onPress("check")} className="m-1 col-1">
          <i className="bi bi-check2-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default Controls;

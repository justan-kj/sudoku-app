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

  const buttonClassName = "m-1 p-2 justify-content-center flex-fill col-1";
  const buttonStyle = {
    maxWidth: "180px",
  };

  return (
    <div className="container m-0" style={buttonStyle}>
      <div className="row justify-content-center">
        <Button
          onClick={() => onPress(1)}
          className={buttonClassName}
          style={buttonStyle}
        >
          1
        </Button>
        <Button
          onClick={() => onPress(2)}
          className={buttonClassName}
          style={buttonStyle}
        >
          2
        </Button>
        <Button
          onClick={() => onPress(3)}
          className={buttonClassName}
          style={buttonStyle}
        >
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
          className={buttonClassName}
        >
          <i className="bi bi-pencil"></i>
        </ToggleButton>
      </div>
      <div className="row justify-content-center">
        <Button
          onClick={() => onPress(4)}
          className={buttonClassName}
          style={buttonStyle}
        >
          4
        </Button>
        <Button
          onClick={() => onPress(5)}
          className={buttonClassName}
          style={buttonStyle}
        >
          5
        </Button>
        <Button
          onClick={() => onPress(6)}
          className={buttonClassName}
          style={buttonStyle}
        >
          6
        </Button>
        <Button
          onClick={() => onPress(0)}
          className={buttonClassName}
          style={buttonStyle}
        >
          <i className="bi bi-eraser"></i>
        </Button>
      </div>
      <div className="row  justify-content-center">
        <Button
          onClick={() => onPress(7)}
          className={buttonClassName}
          style={buttonStyle}
        >
          7
        </Button>
        <Button
          onClick={() => onPress(8)}
          className={buttonClassName}
          style={buttonStyle}
        >
          8
        </Button>
        <Button
          onClick={() => onPress(9)}
          className={buttonClassName}
          style={buttonStyle}
        >
          9
        </Button>

        <Button
          onClick={() => onPress("check")}
          className={buttonClassName}
          style={buttonStyle}
        >
          <i className="bi bi-check2-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default Controls;

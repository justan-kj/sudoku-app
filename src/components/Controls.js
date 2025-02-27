import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCallback, useEffect } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

function Controls({ onPress, onHotkeyPress, fillMode, toggle }) {
  useEffect(() => {
    document.addEventListener("keydown", onHotkeyPress);
    return () => {
      document.removeEventListener("keydown", onHotkeyPress);
    };
  }, [onHotkeyPress]);

  const renderNumButton = (num) => (
    <Button onClick={() => onPress(num)} className="m-1 col-1">
      {num}
    </Button>
  );

  return (
    <div className="container w-75">
      <div className="d-flex flex-column align-items-center">
        {/* Numpad Grid */}
        <div className="mb-3 w-100">
          <div className="row justify-content-center gap-2">
            {[1, 2, 3].map((num) => (
              <Button key={num} onClick={() => onPress(num)} className="col">
                {num}
              </Button>
            ))}
          </div>
          <div className="row justify-content-center gap-2 my-2">
            {[4, 5, 6].map((num) => (
              <Button key={num} onClick={() => onPress(num)} className="col">
                {num}
              </Button>
            ))}
          </div>
          <div className="row justify-content-center gap-2">
            {[7, 8, 9].map((num) => (
              <Button key={num} onClick={() => onPress(num)} className="col">
                {num}
              </Button>
            ))}
          </div>
        </div>

        {/* Controls Panel */}
        <div className="p-2 col-auto">
          <div className="d-flex flex-column gap-2">
            <div className="p-2">
              <h6 className="text-center mb-2">Fill Mode</h6>
              <Form.Check
                type="radio"
                id="candidates-mode"
                label="Candidates"
                name="fillMode"
                checked={!fillMode}
                className="text-start"
                onChange={() => toggle(0)}
              />
              <Form.Check
                type="radio"
                id="values-mode"
                label="Values"
                name="fillMode"
                checked={fillMode}
                className="text-start"
                onChange={() => toggle(1)}
              />
            </div>
            <Button
              onClick={() => onPress("check")}
              className="d-flex align-items-center gap-2">
              <i className="bi bi-check2-circle"></i>
              <span>Check</span>
            </Button>
            <Button
              onClick={() => onPress(0)}
              className="d-flex align-items-center gap-2">
              <i className="bi bi-eraser"></i>
              <span>Erase</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;

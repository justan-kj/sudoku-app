import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useCallback, useEffect } from "react";

function Controls({ onPress, onHotkeyPress }) {
  useEffect(() => {
    document.addEventListener("keydown", onHotkeyPress);
    return () => {
      document.removeEventListener("keydown", onHotkeyPress);
    };
  }, [onHotkeyPress]);

  return (
    <div>
      <div className="container d-flex-inline justify-content-center flex-column">
        <div className="container d-flex-inline row-gap-1">
          <Button onClick={() => onPress(1)} className="m-1">
            1
          </Button>
          <Button onClick={() => onPress(2)} className="m-1">
            2
          </Button>
          <Button onClick={() => onPress(3)} className="m-1">
            3
          </Button>
          <Button onClick={() => onPress(4)} className="m-1">
            4
          </Button>
          <Button onClick={() => onPress(5)} className="m-1">
            5
          </Button>
        </div>
        <div className="container d-flex-inline gap-1">
          <Button onClick={() => onPress(6)} className="m-1">
            6
          </Button>
          <Button onClick={() => onPress(7)} className="m-1">
            7
          </Button>
          <Button onClick={() => onPress(8)} className="m-1">
            8
          </Button>
          <Button onClick={() => onPress(9)} className="m-1">
            9
          </Button>
          <Button onClick={() => onPress(0)} className="m-1">
            X
          </Button>
          <Button onClick={() => onPress(0)} className="m-1">
            <i class="bi bi-check2-circle"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Controls;

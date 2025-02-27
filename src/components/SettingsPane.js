import Accordion from "react-bootstrap/Accordion";
import { Form } from "react-bootstrap";

function SettingsPane({ gridSize, setGridSize }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Settings</Accordion.Header>
        <Accordion.Body>
          <>
            <Form.Label>Grid Size</Form.Label>
            <Form.Range
              value={gridSize}
              onChange={(e) => setGridSize(e.target.value)}
            />
          </>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SettingsPane;

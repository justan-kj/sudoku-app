import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function SettingsPane({ show, onHide, gridSize, setGridSize }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Grid Size</Form.Label>
            <Form.Range
              value={gridSize}
              onChange={(e) => setGridSize(e.target.value)}
              min={30}
              max={70}
            />
            <Form.Text className="text-muted">
              Current size: {gridSize}px
            </Form.Text>
          </Form.Group>
          {/* Add other settings here */}
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SettingsPane;

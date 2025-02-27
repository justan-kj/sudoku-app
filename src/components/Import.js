import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ImportWindow({ board }) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Import Grid</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Please enter single line grid digits.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Import</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

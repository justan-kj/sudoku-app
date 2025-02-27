function Instructions() {
  return (
    <div className="text-muted mt-2  small">
      <h6 className="mb-2">Instructions:</h6>
      <ul className="list-unstyled">
        <li>
          <i className="bi bi-keyboard me-2"></i>
          Number keys (1-9): Input value into cell
        </li>
        <li>
          <i className="bi bi-pencil me-2"></i>
          Shift key: Toggle between normal mode and candidate mode
        </li>
      </ul>
    </div>
  );
}

export default Instructions;

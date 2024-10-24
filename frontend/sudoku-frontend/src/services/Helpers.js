const DEBUG = true;

function arrayDupeCheck(cells) {
  var occurrences = {};
  var dupeValues = [];
  var dupeCells = [];
  console.log("cells");
  console.log(cells);
  for (var i = 0; i < cells.length; i++) {
    if (!cells[i].value) {
      continue;
    }
    occurrences[cells[i].value] = (occurrences[cells[i].value] || 0) + 1;
    if (occurrences[cells[i].value] > 1) {
      dupeValues.push(cells[i].value);
    }
  }
  console.log("dupevalues");
  console.log(dupeValues);
  for (var i = 0; i < cells.length; i++) {
    if (dupeValues.includes(cells[i].value)) {
      dupeCells.push(cells[i]);
    }
  }
  return dupeCells;
}

function getGridIndex(row, col) {
  return (row - 1) * 9 + (col - 1);
}

function valueCheck(row, col, box) {
  let valid = true;
  const errors = [];
  const peers = [row, col, box];
  console.log("peers");
  console.log(peers);
  peers.forEach((cells) => {
    const result = arrayDupeCheck(cells);
    errors.push(...result);
  });
  if (errors.length > 0) {
    valid = false;
  }
  return { result: valid, errors: errors };
}

export { getGridIndex, arrayDupeCheck, valueCheck };

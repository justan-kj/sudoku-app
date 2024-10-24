import { valueCheck, getGridIndex } from "./Helpers";
import { Cell } from "./CellClass";

class Grid {
  name;
  cells;
  constructor(name) {
    this.name = name;
    const cell_arr = [];
    for (var i = 0; i < 81; i++) {
      cell_arr.push(new Cell(this, Math.floor(i / 9) + 1, (i % 9) + 1));
    }
    this.cells = cell_arr;
  }
  get cellValues() {
    const valuesArray = this.cells.map((cell) => cell.cell_value);
    return valuesArray;
  }
  rowValues(index) {
    const base = (index - 1) * 9;
    return this.cellValues.slice(base, base + 8);
  }
  columnValues(index) {
    const vals = [];
    for (var i = 0; i < 81; i += 9) {
      vals.push(this.cellValues[index + i - 1]);
    }
    return vals;
  }
  boxValues(index) {
    const vals = [];
    const S = this.cellValues;
    const first = Math.floor((index - 1) / 3) * 27 + ((index - 1) % 3) * 3;
    for (var i = 0; i < 3; i++) {
      const n = first + i * 9;
      vals.push(S[n], S[n + 1], S[n + 2]);
    }
    return vals;
  }
  modifyCell(cell, new_value) {
    const index = cell.row - 1 + (cell.column - 1) * 9;
    const prev_value = this.cells[index];
    this.cells[index] = new_value;
    return prev_value;
  }
  cell(row, col) {
    const index = getGridIndex(row, col);
    return this.cells[index];
  }
  row(index) {
    const base = (index - 1) * 9;
    return this.cells.slice(base, base + 9);
  }
  col(index) {
    const vals = [];
    for (var i = 0; i < 81; i += 9) {
      vals.push(this.cells[index + i - 1]);
    }
    return vals;
  }
  box(index) {
    const vals = [];
    const S = this.cells;

    const first = Math.floor((index - 1) / 3) * 27 + ((index - 1) % 3) * 3;

    for (var i = 0; i < 3; i++) {
      const n = first + i * 9;
      vals.push(S[n], S[n + 1], S[n + 2]);
    }

    return vals;
  }

  checkErrors() {
    const errors = [];
    this.cells.forEach((cell) => {
      if (!cell.check(cell.value)) {
        errors.push(cell);
      }
    });
    return errors;
  }

  import(grid) {
    console.log("importing");

    [...grid].forEach((digit, i) => {
      if (digit != ".") {
        this.cells[i].setValue(Number(digit));
        this.cells[i].locked = true;
      }
    });
  }
}

export { Grid };

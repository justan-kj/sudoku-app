import { valueCheck, getGridIndex } from "./Helpers";
import { Grid } from "./GridClass";
class Cell {
  coords;
  cell_value;
  grid;
  candidates;
  locked;
  constructor(grid, row_idx, col_idx, value = "") {
    this.grid = grid;
    this.cell_value = value;
    this.coords = [row_idx, col_idx];
    this.locked = false;
    this.candidates = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
    };
  }
  get row() {
    return this.grid.row(this.coords[0]);
  }
  get col() {
    return this.grid.col(this.coords[1]);
  }
  get value() {
    return this.cell_value;
  }

  get box() {
    const row = this.coords[0];
    const col = this.coords[1];
    const box_index = Math.floor((col + 2) / 3) + Math.floor((row - 1) / 3) * 3;
    return this.grid.box(box_index);
  }

  check(value, verbose = false) {
    if (value === "") {
      const result = { result: true, errors: [] };
      return verbose ? result : result["result"];
    }
    const result = valueCheck(this.row, this.col, this.box);
    return verbose ? result : result["result"];
  }

  setValue(new_value, check = false) {
    const old_value = this.grid.modifyCell(this, new_value);
    if (this.locked) {
      return;
    }
    if (!check) {
      this.cell_value = new_value;
      return;
    }
    if (this.check()) {
      this.grid.modifyCell(this, new_value);
      this.cell_value = new_value;
    } else {
      this.grid.modifyCell(this, old_value);
    }
  }

  setCandidate(value) {
    this.candidates[value] = !this.candidates[value];
    console.log(this.candidates);
  }
}

export { Cell };

import { Grid } from "./GridClass";

class Board {
  grid;
  name;
  selected;
  errors;
  gridSize;
  timestamp;
  history;

  constructor(name) {
    this._name = name;
    this.grid = new Grid(name);
  }

  import(grid) {
    this.grid.import(grid);
  }
}

export { Board };

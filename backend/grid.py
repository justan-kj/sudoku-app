from copy import deepcopy
from random import randint

import numpy as np
import math
import numpy.random as random
from numpy.ma.core import asarray

sudoku_grid = [
    [1, 8, 7, 5, 0, 6, 9, 3, 0],
    [9, 4, 2, 7, 3, 0, 8, 5, 6],
    [5, 6, 3, 9, 2, 0, 1, 4, 7],
    [6, 0, 9, 0, 0, 5, 0, 1, 8],
    [8, 3, 0, 1, 9, 0, 0, 0, 5],
    [0, 1, 0, 0, 6, 4, 0, 0, 9],
    [3, 0, 0, 6, 0, 0, 2, 0, 4],
    [2, 7, 6, 4, 0, 0, 5, 0, 1],
    [4, 5, 0, 2, 1, 9, 0, 0, 3]
]

class Grid:
    array = []
    def __init__(self,values):
        self.array = values
    def __str__(self):
        return f"{self.array}"

    def fill(self, row, col, value, check=False, target=0):
        if target == 0:
            target = self.array
        cell = Cell(self,(row,col))
        if check:
            if cell.check(value):
                target.array[row,col] = value
                return True
            else:
                return False
        else:
            target.array[row,col] = value
            return True

    def recursive_check(self, depth, coords, grid):
        new_depth = depth + 1
        x = coords[depth][0]
        y = coords[depth][1]
        idx = 0
        values=list(range(1,10))
        random.shuffle(values)
        end = 0

       #print(grid)
        while idx <= 8 and end <= 0:
            print(f"Depth: {depth}")
            if self.fill(x, y, values[idx], True, grid):
                if depth == len(coords)-1:
                    return 1
                end = self.recursive_check(new_depth, coords, grid)
                if end == 1:
                    return 1

            idx += 1
        self.fill(x, y, 0, target=grid)
        return -1

    def row(self, index):
        return Row(self, self.array[index])
    def col(self, index):
        return Column(self, self.array[0:10,index])
    def box(self, index):
        if isinstance(index, int):
            if index % 3 > 0:
                x_min = (index % 3 - 1) * 3
            else:
                x_min = 2 * 3
            y_min = math.floor(index / 3 - 0.01) * 3

        else:
            x_min = math.floor(index[1] / 3) * 3
            y_min = math.floor(index[0] / 3) * 3


        x_max = x_min + 3
        y_max = y_min + 3
        bout = Box(self, self.array[y_min:y_max,x_min:x_max])
        return bout


class Board :
    active_grid = Grid(np.asarray(sudoku_grid))
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return f"{self.active_grid}"
    def generate(self,difficulty=0):
        difficulty_ranges = [(20,29),(30,39),(40,59),(50,60),(60,71)]
        diff_iterations = random.randint(difficulty_ranges[difficulty][0],difficulty_ranges[difficulty][1])
        new_grid = Grid(np.asarray([[0 for x in range (0,9)] for y in range(0,9)]))
        row = random.randint(0,8)
        col = random.randint(0,8)
        value = random.randint(1,9)
        print(type(new_grid))
        new_grid.fill(row,col,value,target=new_grid)
        new_grid = self.solve(new_grid)
        coords = [(x, y) for x in range(0, 9) for y in range(0, 9)]
        for _ in range(diff_iterations):
            random.shuffle(coords)
            cell = coords.pop()
            new_grid.fill(cell[0],cell[1],0,target=new_grid)

        self.active_grid = new_grid

        return True

    def solve(self, target=None):
        if target == None:
            target = self.active_grid

        solved_grid = deepcopy(target)
        depth = 0
        coords = [(x, y) for x in range(0, 9) for y in range(0, 9) if target.array[x, y]==0]
        result = solved_grid.recursive_check(depth, coords, solved_grid)

        if result == 1:
            return solved_grid
        return False

    def check_all(self):
        for i in range(0,9):
            if not (self.active_grid.row(i).check and self.active_grid.col(i).check and self.active_grid.box(i).check):
                return False
        return True


class Section:
    def __init__(self, parent, array):
        self.grid = parent
        self.values = array
    def __str__(self):
        return f"{self.values}"

    def check(self, value):
        valid = True
        value_count = np.count_nonzero(self.values == value)
        if value_count > 0:
            valid = False
        return valid


class Cell(Section):
    def __str__(self):
        return f"R{self.values[0]+1}C{self.values[1]+1}"
    def check(self, value):
        valid = True
        coord=self.values
        box = self.grid.box(coord)
        row = self.grid.row(coord[0])
        col = self.grid.col(coord[1])

        if not box.check(value):
            #print(f"{self} = {value}: Invalid box")
            valid = False
        if not col.check(value):
            #print(f"{self} = {value}: Invalid column")
            valid = False
        if not row.check(value):
            #print(f"{self} = {value}: Invalid row")
            valid = False

        return valid

class Row(Section):
    pass

class Column(Section):
    pass

class Box(Section):
    def check(self, value):
        valid = True
        value_count = np.count_nonzero(self.values.flatten() == value)
        if value_count > 1:
            valid = False
        return valid

x = Board("hi")

print(x.generate())
print(x)


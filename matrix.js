class Grid {
  createGrid() {
    for (let i = 1; i <= 3; i++) {
      let tempColObj = {};
      for (let j = 1; j <= 3; j++) {
        tempColObj[`col${j}`] = '_'
      }
      this[`row${i}`] = tempColObj
    }
  }
}


let myGrid = new Grid;
myGrid.createGrid();
myGrid.row1.col2 = 'x'
console.table(myGrid)
class Grid {
  constructor(theRowLength, theColLength) {
    this.createGrid(theRowLength, theColLength);
  }
  createGrid(rowLength, colLength) {
    for (let i = 1; i <= rowLength; i++) {
      let tempColObj = {};
      for (let j = 1; j <= colLength; j++) {
        tempColObj[`col${j}`] = "";
      }
      this[`row${i}`] = tempColObj
    }
  }
}


let myGrid = new Grid(5, 5);
myGrid.row2.col2 = "x"
myGrid.row3.col5 = "x"
console.table(myGrid)
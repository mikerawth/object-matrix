class Grid {
  constructor() {
    this.message = "test"
    this.rowLength = 5;
    this.colLength = 5;

  }
  createGrid() {
    // this.gridContainer = {};
    // for(let x = 1; x <= this.rowLength; x++) {
    //   for(let y = 1; y <= this.colLength; y++) {
    //     this.gridContainer[`r${x}c${y}`] = "_"
    //   }
    // }
    this.gridContainer = [];
    let cols = []
    for (let i = 0; i < this.colLength; i++) {

    }
  }
}

// myGrid = new Grid;
// myGrid.createGrid();
// myGrid.gridContainer['r1c1']="x"

// console.table(myGrid.gridContainer)

let myObj1 = {}
let myObj2 = {}
let myObj3 = {}

myObj1[`row1`] = { col1: [], col2: [] }
myObj1[`row1`] = { col3: [], col4: [] }

console.table(myObj1)
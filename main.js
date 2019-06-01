const width = 10;
const height = 10; // width and height dimensions of the board

/**
 * Create a Game of Life instance
 */

const gol = new GameOfLife(width-1, height-1);

console.log(gol);

console.log(gol.board[0]);


/**
 * create a table and append to the DOM
 */

// Actual table cells
const tds = [];

// <table> element
const table = document.createElement("tbody");
// build a table row <tr>
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  // build a table column <td>
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    // We'll put the coordinates on the cell
    // Element itself (using dataset),
    // letting us fetch it in a click listener later.
    td.dataset.row = h;
    td.dataset.col = w;
    tds.push(td);
    tr.append(td);
  }
  table.append(tr);
}
document.getElementById("board").append(table);

console.log(tds);

/**
 * Draws every cell from the gol instance into an actual, visible DOM element
 */


const paint = () => {

  for(let i=0;i<tds.length;i++){
    if(tds[i].classList.value){
      gol.board[tds[i].dataset.row][tds[i].dataset.row]=1;
    }; 
  }

  console.log(gol.board);
  // TODO:
  //   1. For each <td> in the table:
  //     a. If its corresponding cell in gol instance is alive,
  //        give the <td> the `alive` CSS class.
  //     b. Otherwise, remove the `alive` class.
  //
  // To find all the <td>s in the table, you might query the DOM for them, or you
  // could choose to collect them when we create them in createTable.
  //
  // HINT:
  //   https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  //   https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
}


/**
 * Event Listeners
 */

document.getElementById("board").addEventListener("click", event => {
  // TODO: Toggle clicked cell (event.target) and paint
});

document.getElementById("step_btn").addEventListener("click", event => {
  // TODO: Do one gol tick and paint
});

document.getElementById("play_btn").addEventListener("click", event => {
  // TODO: Start playing by calling `tick` and paint
  // repeatedly every fixed time interval.
  // HINT:
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
});

document.getElementById("random_btn").addEventListener("click", event => {
  // TODO: Randomize the board and paint
});

document.getElementById("clear_btn").addEventListener("click", event => {
  // TODO: Clear the board and paint
});

const tbody = Array.from(document.getElementsByTagName('tbody'));

tbody[0].addEventListener("click", event => {
  event.target.classList.add('alive');
  return paint();
});


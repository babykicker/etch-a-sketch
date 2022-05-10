const gridContainer = document.getElementById("gridContainer");

function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
    cell.classList.add('box');
  };
};

makeRows(16, 16);
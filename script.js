const gridContainer = document.getElementById("gridContainer");
const gridValue = document.getElementById("grid-value");
const 

function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
    cell.classList.add('box');
  };
};

gridSlider.onmousemove = (e) => updateSize(e.target.value)

function updateSize(value) {
gridValue.textContent = `${value} x ${value}`
}

makeRows(16, 16);

let colorPicker = document.getElementById("colorPicker");
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");
let pixelCanvas = document.getElementById("pixelCanvas");

colorPicker.value = (!localStorage.getItem(colorPicker.id))? '#000000' : localStorage.getItem(colorPicker.id);
gridHeight.value = (!localStorage.getItem(gridHeight.id))? 1 : localStorage.getItem(gridHeight.id);
gridWidth.value = (!localStorage.getItem(gridWidth.id))? 1 : localStorage.getItem(gridWidth.id);

makeGrid();


function saveGridSize() {
  localStorage.setItem(gridHeight.id, gridHeight.value);
  localStorage.setItem(gridWidth.id, gridWidth.value);
}

function saveColor() {
  localStorage.setItem(colorPicker.id, colorPicker.value);
}

function updateCellColor(id) {
  saveColor();
  localStorage.setItem(id, colorPicker.value);
  makeGrid();
}


function makeGrid() {
  pixelCanvas.innerHTML = '';
  let gWidth = gridWidth.value;
  let gHeight = gridHeight.value;

  let tableBody = document.createElement('tbody');
  for (let i = 0; i < gHeight; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < gWidth; j++) {
      let td = document.createElement('td');
      td.id = i + '-' + j;
      td.onclick = function () { updateCellColor(td.id) };
      td.style.backgroundColor = (!localStorage.getItem(td.id)) ? '#ffffff' : localStorage.getItem(td.id);
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
  pixelCanvas.appendChild(tableBody);
}

function submitGrid() {
  localStorage.clear();
  saveGridSize();
  saveColor();
}




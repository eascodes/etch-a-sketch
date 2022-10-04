//GRID SETUP

const gridContainer = document.querySelector("#grid-container");
let squareSize = 0;

function createGrid(num) {
    for (i = 1; i <= (num * num) && num <= 100; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square);
        squareSize = (1/num) * 100;
        square.style.cssText = "width: " + squareSize + "%; height: " + squareSize + "%;";
    }
    if (num > 100) {
        alert("Try again - enter a number less than 100");
    }
}

createGrid(16);

document.body.addEventListener('mouseover', function(e) {
    if (e.target.className == "square") {
        /*e.target.classList.add("mouseover");*/
        /*e.target.setAttribute('style', 'border: orange solid 10px;')*/
        e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    }

});

//GRID ADJUSTMENT

const gridBtn = document.querySelector(".grid-btn");
gridBtn.addEventListener('click', setNewGrid);

function deleteGrid() {
   while (gridContainer.hasChildNodes()) {
    let child = gridContainer.lastElementChild;
    gridContainer.removeChild(child);
   }
}

function setNewGrid() {
    const size = prompt("How many squares on each side?");
    deleteGrid();
    createGrid(size);
    /*const newSquare = document.getElementsByClassName("mouseover");
    newSquare.style.cssText = 'background: purple;';*/
}
//GRID SETUP

const gridContainer = document.querySelector("#grid-container");

function createGrid(num) {
    for (i = 1; i <= (num * num); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square);
    }
}

createGrid(16);

document.body.addEventListener('mouseover', function(e) {
    if (e.target.className == "square") {
        e.target.classList.add("mouseover");
    }

});

//GRID ADJUSTMENT

const gridBtn = document.querySelector(".grid-btn");
gridBtn.addEventListener('click', setNewGrid);

function setNewGrid() {
    const size = prompt("How many squares on each side?");
    //createGrid(size,size);
}
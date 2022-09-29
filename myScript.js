const gridContainer = document.querySelector("#grid-container");

for (i = 1; i < 17; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridContainer.appendChild(gridRow);

    for (j = 1; j < 17; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gridRow.appendChild(square);
    }
}

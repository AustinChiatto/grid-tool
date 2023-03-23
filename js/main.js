// Global Variables
// ===========================

// container that displays the grid
const gridDisplay = document.querySelector(".js-grid-display");

// variables for the count for each control
const colCountContainer = document.querySelector(".js-column-count");
let colCount = 3;
const rowCountContainer = document.querySelector(".js-row-count");
let rowCount = 3;
const gapCountContainer = document.querySelector(".js-gap-count");
let gapCount = 8;

// controls for increasing and decreasing the counts
const colIncrease = document.querySelector(".js-column__increase");
const colDecrease = document.querySelector(".js-column__decrease");
const rowIncrease = document.querySelector(".js-row__increase");
const rowDecrease = document.querySelector(".js-row__decrease");
const gapIncrease = document.querySelector(".js-gap__increase");
const gapDecrease = document.querySelector(".js-gap__decrease");

// container for the code output
const outputCode = document.querySelector(".js-code-output");

window.onload = () => {
    updateOutput();
  };

// Controls
// ===========================

// column control
colIncrease.addEventListener("click", () => {
    gridDisplay.innerHTML = "";
    colCount++;
    colCountContainer.innerHTML = colCount;

    gridDisplay.style.gridTemplateColumns = "repeat(" + colCount + ",1fr)";

    for(i = 0; i < (rowCount * colCount); i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("display__item");
        gridDisplay.appendChild(gridItem);
    }

    updateOutput();
})

colDecrease.addEventListener("click", () => {
    gridDisplay.innerHTML = "";
    colCount--;
    colCountContainer.innerHTML = colCount;

    gridDisplay.style.gridTemplateColumns = "repeat(" + colCount + ",1fr)";

    for(i = 0; i < (rowCount * colCount); i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("display__item");
        gridDisplay.appendChild(gridItem);
    }

    updateOutput();
})

// row control
rowIncrease.addEventListener("click", () => {
    gridDisplay.innerHTML = "";
    rowCount++;
    rowCountContainer.innerHTML = rowCount;

    gridDisplay.style.gridTemplateRows = "repeat(" + rowCount + ",1fr)";

    for(i = 0; i < (rowCount * colCount); i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("display__item");
        gridDisplay.appendChild(gridItem);
    }

    updateOutput();
})

rowDecrease.addEventListener("click", () => {
    gridDisplay.innerHTML = "";
    rowCount--;
    rowCountContainer.innerHTML = rowCount;

    gridDisplay.style.gridTemplateRows = "repeat(" + rowCount + ",1fr)";

    for(i = 0; i < (rowCount * colCount); i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("display__item");
        gridDisplay.appendChild(gridItem);
    }

    updateOutput();
})

// gap control
gapIncrease.addEventListener("click", () => {
    gapCount++;
    gapCountContainer.innerHTML = gapCount;

    gridDisplay.style.gap = gapCount + "px";

    updateOutput();
})

gapDecrease.addEventListener("click", () => {
    gapCount--;
    gapCountContainer.innerHTML = gapCount;

    gridDisplay.style.gap = gapCount + "px";

    updateOutput();
})

// code output
// ===========================
function updateOutput() {
    // outputCode.innerHTML = "<pre><code>.container" + ' { <br>' +
    //     "  display: grid; <br>" +
    //     "  grid-template-columns: repeat(" + colCount +",1fr); <br>" +
    //     "  grid-template-rows: repeat(" + rowCount +",1fr); <br>" +
    //     "  gap: " + gapCount +"px; <br>" +
    // '} <br>' +
    // "</code></pre>"
    outputCode.innerHTML =     
`<pre>.container { 
    display: grid; 
    grid-template-columns: repeat(${colCount},1fr); 
    grid-template-rows: repeat(${rowCount},1fr); 
    gap: ${gapCount}px; 
};</pre>`;
}

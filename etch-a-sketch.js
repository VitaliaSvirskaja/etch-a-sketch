const SIZE_16x16 = 16;
const SIZE_32x32 = 32;
const SIZE_100x100 = 100;


function removePixels() {
    const wrapper = document.querySelector(".wrapper")
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild)
    }
}

function initializePanes(numberOfPanes) {
    for (let i = 1; i <= numberOfPanes; i++) {
        const wrapper = document.querySelector(".wrapper");
        const divElement = document.createElement("div");
        wrapper.appendChild(divElement)
        divElement.classList.add("element");
        divElement.addEventListener("mouseover", function () {
            divElement.style.backgroundColor = "black";
            console.log("test")
        });
    }
}


function changePaneDimensions(columns, rows) {
    removePixels();
    initializePanes(columns * rows);
    const changeWrapper = document.querySelector(".wrapper");
    changeWrapper.style.gridTemplateColumns = "repeat(" + columns + ", 1fr)";
    changeWrapper.style.gridTemplateRows = "repeat(" + rows + ", 1fr)";
}

const buttonSmall = document.querySelector(".btn1");
buttonSmall.addEventListener("click", () => changePaneDimensions(SIZE_16x16, SIZE_16x16))

const buttonMedium = document.querySelector(".btn2");
buttonMedium.addEventListener("click", () => changePaneDimensions(SIZE_32x32, SIZE_32x32))

const buttonLarge = document.querySelector(".btn3");
buttonLarge.addEventListener("click", () => changePaneDimensions(SIZE_100x100, SIZE_100x100))

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", function reset() {
    removePixels();
    initializePanes();
})

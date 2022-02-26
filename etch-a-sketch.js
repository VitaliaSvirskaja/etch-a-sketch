function initializePanes() {
    for (let i = 1; i <= 256; i++) {
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

initializePanes();

const reset = document.querySelector(".resetButton");
reset.addEventListener("click", function reset() {
    const wrapper = document.querySelector(".wrapper")
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild)
    }
    initializePanes();
})

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

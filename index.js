const button = document.querySelector(".button"),
container = document.querySelector(".container");
let clickCount = 0;

button.addEventListener("click",() => {
    clickCount++;

    if (clickCount % 2 === 1) {
        container.classList.add("dark");
    } else {
        container.classList.remove("dark");
    }
})

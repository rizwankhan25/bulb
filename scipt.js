let btn = document.querySelector("#btn");
let bulb = document.querySelector("#bulb");

var count = 0;
btn.addEventListener("click", () => {
    if(count === 0) {
        bulb.style.backgroundColor = "#fff"
        btn.textContent = "off"
        btn.style.color = "#fff"
        btn.style.backgroundColor = "green"
        btn.style.border = "none"
        count = 1
    } else {
        bulb.style.backgroundColor = "#000";
        btn.textContent = "on"
        btn.style.backgroundColor = "yellow"
        btn.style.color = "#333"
        count = 0
    }
})
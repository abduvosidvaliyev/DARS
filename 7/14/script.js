// 14-topshiriq

let h2 = document.querySelector(".h2")
let buttons = document.querySelector(".buttons")
let size = 0

let sonlar = [
    Math.floor(10 + Math.random() * 30),
    Math.floor(10 + Math.random() * 30),
    Math.floor(10 + Math.random() * 30),
    Math.floor(10 + Math.random() * 30)
]

sonlar.forEach(element => {
    let btn = document.createElement("button")
    btn.innerHTML = element
    buttons.appendChild(btn)
    btn.addEventListener("click", () => {
        size = btn.innerHTML * 1
        h2.style.fontSize = size + "px"
    })
});

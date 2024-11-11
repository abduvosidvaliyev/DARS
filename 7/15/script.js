// 15-topshiriq

let son = ["2", "3", "4", "5"]
let nav = document.querySelector("nav")
let container = document.querySelector(".container")

let soni = ""

son.forEach(element => {
    let btn = document.createElement("button")
    btn.innerHTML = element
    nav.appendChild(btn)
    btn.addEventListener("click", () => {
        soni = btn.innerHTML*1
        container.style.gridTemplateColumns = `repeat(${soni}, 1fr)`
        console.log(soni);
    })
});

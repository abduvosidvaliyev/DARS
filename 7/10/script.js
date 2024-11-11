// 10-topshiriq

let ozgar = document.querySelector(".ozgarish")
let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")
let inp4 = document.querySelector(".inp4")
let inp5 = document.querySelector(".inp5")

inp1.addEventListener("input", () => {
    ozgar.style.borderRadius = inp1.value + "px"
})

inp2.addEventListener("input", () => {
    ozgar.style.boxShadow = inp2.value
})

inp3.addEventListener("input", () => {
    ozgar.style.borderColor = inp3.value
})

inp4.addEventListener("input", () => {
    ozgar.style.background = inp4.value
})

inp5.addEventListener("input", () => {
    ozgar.style.transform = `scale(${inp5.value})`
})

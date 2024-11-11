// 9-topshiriq

let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let anima = document.querySelector(".anima")

btn1.addEventListener("click", () => {
    anima.classList.add("fade-down")
    anima.classList.remove("fade-up")
    anima.classList.remove("flip-left")
    anima.classList.remove("zoom-in")
})

btn2.addEventListener("click", () => {
    anima.classList.add("fade-up")
    anima.classList.remove("fade-down")
    anima.classList.remove("flip-left")
    anima.classList.remove("zoom-in")
})

btn3.addEventListener("click", () => {
    anima.classList.remove("fade-up")
    anima.classList.remove("fade-down")
    anima.classList.add("flip-left")
    anima.classList.remove("zoom-in")
})

btn4.addEventListener("click", () => {
    anima.classList.remove("zoom-in")
    anima.classList.remove("fade-down")
    anima.classList.remove("flip-left")
    anima.classList.add("zoom-in")
})

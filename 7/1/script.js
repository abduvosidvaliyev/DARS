// 1-topshiriq
let body = document.querySelector("body")
let btn = document.querySelector(".btn")

let math1 = Math.floor(Math.random() * 255)
let math2 = Math.floor(Math.random() * 255)
let math3 = Math.floor(Math.random() * 255)

body.style.background = `rgba(${math1}, ${math2}, ${math3})`

btn.addEventListener("click", () => {
    body.style.background = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
})

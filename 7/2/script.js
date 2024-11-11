// 2-topshiriq
let btn = document.querySelector(".btn")
let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")
let container = document.querySelector(".container")


btn.addEventListener("click", () => {
    if ((inp1.value, inp2.value, inp3.value) == "") {
        alert("Error!")
    } else {
        let div1 = document.createElement("div")
        div1.style.width = `${inp1.value}px`
        div1.style.height = `${inp2.value}px`
        div1.style.background = `${inp3.value}`
        container.appendChild(div1)
    }
})

let body = document.querySelector("body")
let container = document.querySelector(".container")
let btn = document.querySelector(".text-button button")

btn.addEventListener("click", () => {
    body.classList.toggle("body")    
    container.classList.toggle("dark")
})


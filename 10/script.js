let btn = document.querySelector(".musicBackround button")
let img = document.querySelector(".music img")

let imgTrue = true

btn.addEventListener("click", () => {
    if (imgTrue) {
        img.style.height = "300px"
        imgTrue = false
    } else {
        img.style.height = "0px"
        imgTrue = true
    }
})
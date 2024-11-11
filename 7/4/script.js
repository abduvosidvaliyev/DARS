// 4-topshiriq

let containerCarusel = document.querySelector(".carusel-container")

let index = 0 +


window.addEventListener("keyup", (e) => {
    if (e.key == "ArrowRight") {
        if (index == 9) {
            index = 0
        } else {
            index++
        }
    } else if (e.key == "ArrowLeft") {
        if (index == 0) {
            index = 9
        } else {
            index--
        }
    }
    containerCarusel.style.transform = `translateX(-${index*600}px)`
})

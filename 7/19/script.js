// 19-topshiriq

let img = document.querySelectorAll(".container img")

let img1 = img[2]
let img2 = img[8]
let img3 = img[0]
let img4 = img[9]
let img5 = img[4]
let img6 = img[7]

img.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.add("activ")
    })
});

img1.addEventListener("click", () => {
    img1.alt = "1"
    if (img1.alt == img2.alt) {
        alert("Yutdingiz")
    }
    else {
        element.classList.remove("activ")
    }
})
img2.addEventListener("click", () => {
    img2.alt = "1"
    if (img1.alt == img2.alt) {
        alert("Yutdingiz")
    }
    else {
        element.classList.remove("activ")
    }
})
img3.addEventListener("click", () => {
    img3.alt = "2"
    if (img3.alt == img4.alt) {
        alert("Yutdingiz")
    }
    else {
        element.classList.remove("activ")
    }
})
img4.addEventListener("click", () => {
    img4.alt = "2"
    if (img3.alt == img4.alt) {
        alert("Yutdingiz")
    }
    else {
        element.classList.remove("activ")
    }
})
img5.addEventListener("click", () => {
    img5.alt = "3"
    if (img6.alt == img5.alt) {
        alert("Yutdingiz")
    }
    else {
        element.classList.remove("activ")
    }
})
img6.addEventListener("click", () => {
    img6.alt = "3"
    if (img6.alt == img5.alt) {
        alert("Yutdingiz")
    }
    else {
        element.classList.remove("activ")
    }
})


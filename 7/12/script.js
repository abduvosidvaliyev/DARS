// 12-topshiriq

let inp = document.querySelector(".container input")
let btn = document.querySelector(".container button")
let images = document.querySelector(".images")

btn.addEventListener("click", () => {
    if (inp.value == "") {
        alert("Bo'sh joyni to'ldiring")
    } else {
        let img = document.createElement("img")
        img.src = inp.value
        images.appendChild(img)
        inp.value = ""
    }
})

window.addEventListener("keyup", (e) => {
    if (inp.value == "" && (e.key == "Enter" || e.key == "NumpadEnter")) {
        alert("Bo'sh joyni to'ldiring")
    }
    else if (!inp.value == "" && (e.key == "Enter" || e.key == "NumpadEnter")) {
        let img = document.createElement("img")
        img.src = inp.value
        images.appendChild(img)
        inp.value = ""
    }
})


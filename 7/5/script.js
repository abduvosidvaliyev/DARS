// 5-topshiriq

let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let select = document.querySelector("#select")
let btn = document.querySelector(".btn")
let text = document.querySelector(".text")

btn.addEventListener("click", () => {
    if ((inp1.value && inp2.value) == "") {
        alert("Xatolik!")
    } else {
        let h3 = document.createElement("h3")
        if (select.value == "select1") {
            h3.innerHTML = inp1.value*1 + inp2.value*1
            text.appendChild(h3)
        }
        else if (select.value == "select2") {
            h3.innerHTML = inp1.value * 1 - inp2.value * 1
            text.appendChild(h3)
        }
        else if (select.value == "select3") {
            h3.innerHTML = inp1.value * 1 * inp2.value * 1
            text.appendChild(h3)
        }
        else if (select.value == "select4") {
            h3.innerHTML = inp1.value * 1 / inp2.value * 1
            text.appendChild(h3)
        }
        inp1.value = ""
        inp2.value = ""
    }
})

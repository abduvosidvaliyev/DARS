let inp = document.querySelector("nav input")
let btn = document.querySelector("nav button")
let text = document.querySelector(".text1")
let alert1 = document.querySelector(".alert")

let vaqt = document.querySelector(".vaqt")
let index = 10
let yigindi;
let interval; 


function clear() {
    if (interval) {
        clearInterval(interval); 
    }

    index = 10;
    vaqt.innerHTML = index; 

    interval = setInterval(() => {
        if (index == 0) {
            clearInterval(interval)
            alert1.classList.add("alert1")
        }
        else {
            index--
            vaqt.innerHTML = index
        }

    }, 1000)
}

clear()

function set() {
    let sonlar = [
        Math.floor(100 + Math.random() * 899),
        Math.floor(100 + Math.random() * 899),
        Math.floor(100 + Math.random() * 899),
        Math.floor(100 + Math.random() * 899),
        Math.floor(100 + Math.random() * 899)
    ]

    sonlar.forEach(element => {
        let h3 = document.createElement("h3")
        h3.innerHTML = element
        text.appendChild(h3)
    });
    let h3 = document.querySelectorAll("h3")

    let son1 = h3[0].innerHTML * 1
    let son2 = h3[1].innerHTML * 1
    let son3 = h3[2].innerHTML * 1
    let son4 = h3[3].innerHTML * 1

    yigindi = son1 + son2 + son3 + son4
}

set()

btn.addEventListener("click", () => {
    if (inp.value == "") {
        alert("Iltimos javobni kiriting")
    } else {
        if (inp.value * 1 == yigindi) {
            alert("Siz yutdingiz tabriklaymiz 👏👏")
            text.innerHTML = ""
            clear() 
            set() 
        } else {
            alert("Yutquzdingiz 😜")
            text.innerHTML = ""
            clear() 
            set() 
        }
    }
})

let btn1 = document.querySelector(".alert button")

btn1.addEventListener("click", () => {
    alert1.classList.remove("alert1")
    text.innerHTML = ""
    clear()
    set() 
})

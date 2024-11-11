// 6-topshiriq

let col = document.querySelector(".col")
let cul = document.querySelector(".cul")

let textArrey = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]


textArrey.forEach(element => {
    let h2 = document.createElement("h3")
    h2.innerHTML = element.toUpperCase()
    col.appendChild(h2)
    h2.addEventListener("click", () => {
        let h3 = document.createElement("h3")
        h3.innerHTML = element.toUpperCase()
        cul.appendChild(h3)
    })
});

window.addEventListener("keypress", (e) => {
    let h3 = document.createElement("h3")

    e.key == "A" || e.key == "a" ? h3.innerHTML = "A" :
    e.key == "B" || e.key == "b" ? h3.innerHTML = "B" :
    e.key == "C" || e.key == "c" ? h3.innerHTML = "C" :
    e.key == "D" || e.key == "d" ? h3.innerHTML = "D" :
    e.key == "E" || e.key == "e" ? h3.innerHTML = "E" :
    e.key == "F" || e.key == "f" ? h3.innerHTML = "F" :
    e.key == "G" || e.key == "g" ? h3.innerHTML = "G" :
    e.key == "H" || e.key == "h" ? h3.innerHTML = "H" :
    e.key == "I" || e.key == "i" ? h3.innerHTML = "I" :
    e.key == "J" || e.key == "j" ? h3.innerHTML = "J" :
    e.key == "Y" || e.key == "y" ? h3.innerHTML = "Y" :
    e.key == "Z" || e.key == "z" ? h3.innerHTML = "Z" :
    e.key == "X" || e.key == "x" ? h3.innerHTML = "X" :
    e.key == "U" || e.key == "u" ? h3.innerHTML = "U" :
    e.key == "K" || e.key == "k" ? h3.innerHTML = "K" :
    e.key == "L" || e.key == "l" ? h3.innerHTML = "L" :
    e.key == "M" || e.key == "m" ? h3.innerHTML = "M" :
    e.key == "N" || e.key == "n" ? h3.innerHTML = "N" :
    e.key == "O" || e.key == "o" ? h3.innerHTML = "O" :
    e.key == "P" || e.key == "p" ? h3.innerHTML = "P" :
    e.key == "Q" || e.key == "q" ? h3.innerHTML = "Q" :
    e.key == "R" || e.key == "r" ? h3.innerHTML = "R" :
    e.key == "S" || e.key == "s" ? h3.innerHTML = "S" :
    e.key == "T" || e.key == "t" ? h3.innerHTML = "T" :
    e.key == "V" || e.key == "v" ? h3.innerHTML = "V" :
    e.key == "W" || e.key == "w" ? h3.innerHTML = "W" : ""

    cul.appendChild(h3)
})

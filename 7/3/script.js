// 3-topshiriq
let inp1 = document.querySelector(".inp1")
let text = document.querySelector(".text")
let btn = document.querySelector(".btn")
let data = JSON.parse(localStorage.getItem("name")) || [];

function save() {
    text.innerHTML = ""
    data.forEach((element, index) => {
        let h3 = document.createElement("h3")
        let button = document.createElement("button")
        button.innerHTML = "Clear"
        h3.innerHTML = element
        text.appendChild(h3)
        text.appendChild(button)

        let btnn = text.querySelector("button")
        btnn.addEventListener("click", () => {
            data.splice(index, 1);
            localStorage.setItem("name", JSON.stringify(data));
            save();
        })
    });
}

btn.addEventListener("click", () => {
    if (inp1.value == "") {
        alert("Iltimos Bosh Joyni To'ldiring");
    } else {
        let inputValue = inp1.value;
        data.push(inputValue);
        localStorage.setItem("name", JSON.stringify(data));
        save();
        inp1.value = "";
    }
});

save();

let input = document.querySelector("input")
let buttun = document.querySelector("button") 
let list = document.querySelector(".list")

let data = JSON.parse(localStorage.getItem("name")) || [];

function save() {
    list.innerHTML = ""
    data.forEach(element => {
        let h3 = document.createElement("h3")
        h3.innerHTML = `0${element}`
        list.appendChild(h3)
    });
}

buttun.addEventListener("click", () => {
    if (input.value == "") {
        alert("Xatolik")
    } else {
        let inputValue = input.value        

        data.push(inputValue)

        localStorage.setItem("name", JSON.stringify(data))

        save()
        input.value = ""
    }
})

save()
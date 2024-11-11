// 20-topshiriq

let img = document.querySelectorAll(".images img")
let divs = document.querySelectorAll(".divs .div")
let imgLink = ""
divs.forEach(element => {
    img.forEach(item => {
        item.addEventListener("dragstart", () => {
            imgLink = item.src
        })
        element.addEventListener("dragover", (e) => {
            e.preventDefault()

            element.classList.add("hover")
        })
        element.addEventListener("dragleave", (e) => {
            e.preventDefault()

            element.classList.remove("hover")
        })
        element.addEventListener("drop", (e) => {
            e.preventDefault()
            element.innerHTML = ""

            let img = document.createElement("img")
            img.src = imgLink
            element.appendChild(img)
            element.classList.remove("hover")
        })
    });
})

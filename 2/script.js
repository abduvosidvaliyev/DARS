let api = "https://jsonplaceholder.typicode.com/posts"

fetch(api)
    .then((item) => item.json())
    .then((item) => data(item))

let container = document.querySelector(".container")

function data(item) {
    item.forEach(element => {
        let p = document.createElement("p")
        p.textContent = element.body
        container.appendChild(p)
    });
}

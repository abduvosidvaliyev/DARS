let api = "https://www.themealdb.com/api/json/v1/1/categories.php";

let container = document.querySelector(".container")

fetch(api)
    .then((ted) => (ted.json()))
    .then((data) => {
        Data(data.categories)
    })

function Data(item) {
    item.forEach(element => {
        let h3 = document.createElement("h3")
        h3.innerHTML = element.idCategory
        container.appendChild(h3)
    });
}

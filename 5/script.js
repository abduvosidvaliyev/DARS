function main() {
    let api = "https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken"
    fetch(api)
        .then((res) => res.json())
        .then((res) => { Data(res.meals) })

}
main()
let cards = document.querySelector(".cards")

let son = 10
let indexs = 0
function Data(data) {
    indexs = data.length
    cards.innerHTML = ""
    data.splice(0, son).forEach(element => {
        let img = document.createElement("img")
        img.src = element.strMealThumb
        cards.appendChild(img)
    });
}

let btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    if (son >= indexs) {
        alert("Cardlar Tugadi!")
    } else {
        son = son + 1
        main()
    }
})


// btn.addEventListener("click", () => {
//     son = son+1
//     if (son == 26) {
//         son = 25
//         alert("Cardlar Tugadi!")
//     }
//     main()
// })
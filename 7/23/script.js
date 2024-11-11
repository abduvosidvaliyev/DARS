let textarea = document.querySelector("#textarea")
let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    let h3 = document.createElement("h3")

    let harfSon = textarea.value.length

    let sozSon = textarea.value.split(" ").filter(Boolean).length

    h3.innerHTML = `${harfSon} harf <br>  ${sozSon} so'z`
    document.body.appendChild(h3)
})

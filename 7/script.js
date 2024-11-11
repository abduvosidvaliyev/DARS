let inp = document.querySelector(".inp")
let text = document.querySelector(".text")

let matn = text.innerHTML

inp.addEventListener("input", () => {
    let input = inp.value.toLowerCase()
    text.innerHTML = input.length === 1 ? matn.replace(new RegExp(input, "gi"), `<span class="activ">$&</span>`) : matn
})

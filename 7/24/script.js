// 24-topshiriq

let inp = document.querySelector(".inp")
let btn1 = document.querySelector(".btn")
let text = document.querySelector(".text")

let inputText = "abdefghijklmnopqrstuvxyw";

let oldingi = ""
let keyingi = ""

btn1.addEventListener("click", () => {
    if (inp.value.length !== 1) {
        alert("iltimos faqat 1ta harf yoki son yozing")
    } else if (!isNaN(inp.value)) {
        let h3 = document.createElement("h3")
        h3.innerHTML = `Kiritilgan son: ${inp.value} <br> Undan oldingi son: ${inp.value - 1} <br> Undan keyingi son: ${inp.value * 1 + 1}`
        text.appendChild(h3)
    }
    else {
        let textName = inputText.split("")
        let nameText = [textName.filter((item, index) => (item == inp.value ? (oldingi = index - 1, keyingi = index + 1) : ""))]

        let h3 = document.createElement("h3")
        h3.innerHTML = `Kiritilgan harf: ${inp.value} <br> Undan oldingi harf: ${textName[oldingi]} <br> Undan keyingi harf: ${textName[keyingi]}`
        text.appendChild(h3)
    }
})

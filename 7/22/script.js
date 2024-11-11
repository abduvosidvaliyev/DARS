// 22-topshiriq

let inp = document.querySelector(".inp")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")

btn1.addEventListener("click", () => {
    let arrayText = "012345679abcdefghijklmnopqrstuvxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVXYZ"

    let passwordLength = 12
    let password = ""

    for (let i = 0; i <= passwordLength; i++) {
        let rendomNumber = Math.floor(Math.random() * arrayText.length)
        password += arrayText[rendomNumber]
    }

    inp.value = password
})

btn2.addEventListener("click", () => {
    inp.select()
    inp.setSelectionRange(0, 999)
    document.execCommand("copy")
})

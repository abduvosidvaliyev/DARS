// 7-topshiriq

let plus = document.querySelector(".plus")
let textarea = document.querySelector("textarea")

textarea.addEventListener("input", () => {
    if (textarea.value.length > 50) {
        alert("Xato!")
    }
    else{
        plus.innerHTML = textarea.value.length
    }
})

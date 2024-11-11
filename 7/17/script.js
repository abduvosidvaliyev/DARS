let text = document.querySelector(".text")
let btn1 = document.querySelectorAll(".btn1")
let btn2 = document.querySelectorAll(".btn2")

for (let i = 0; i < 100; i++) {
    let h3 = document.createElement("h3");
    h3.innerHTML = i + 1;
    text.appendChild(h3);
}
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let son = 0
let index = 0
let h3 = document.querySelectorAll("h3")

h3[son].classList.add("activ")

next.addEventListener("click", () => {
    if (son < h3.length - 1) {
        h3.forEach(item => item.classList.remove("activ"))

        son++
        h3[son].classList.add("activ")

        if (son >= 5) {
            index++
            text.style.transform = `translateX(-${42 * index}px)`
        }

        btn1.forEach(element => {
            element.removeAttribute("disabled");
        })

        if (son === h3.length - 1) {
            btn2.forEach(element => {
                element.setAttribute("disabled", "disabled")
            })
        }
    }
})

prev.addEventListener("click", () => {
    if (son > 0) {
        h3.forEach(item => item.classList.remove("activ"))

        son--
        h3[son].classList.add("activ")

        if (son >= 4) {
            index--
            text.style.transform = `translateX(-${42 * index}px)`
        }

        btn2.forEach(element => {
            element.removeAttribute("disabled")
        })

        if (son === 0) {
            btn1.forEach(element => {
                element.setAttribute("disabled", "disabled");
            })
        }
    }
})

let allNext = document.querySelector(".allNext")
let allPrev = document.querySelector(".allPrev")

allNext.addEventListener("click", () => {
    h3.forEach(item => item.classList.remove("activ"))

    son = Math.min(son + 5, h3.length - 1);
    index = Math.min(index + 5, h3.length - 5);

    text.style.transform = `translateX(-${42 * index}px)`
    h3[son].classList.add("activ")
})

allPrev.addEventListener("click", () => {

    h3.forEach(item => item.classList.remove("activ"))

    son = Math.max(son - 5, 0);
    index = Math.max(index - 5, 0);

    text.style.transform = `translateX(-${42 * index}px)`
    h3[son].classList.add("activ")
});

h3.forEach(element => {
    element.addEventListener("click", () => {
        h3.forEach(item => item.classList.remove("activ"))

        son = element.innerHTML * 1 - 1
        element.classList.add("activ")
    })
})

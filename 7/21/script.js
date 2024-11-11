// 21-topshiriq

let divs = document.querySelectorAll(".div")
divs.forEach(element => {
    let index = 3
    let h3 = document.createElement("h1")
    h3.innerHTML = index
    element.appendChild(h3)

    element.addEventListener("click", () => {
        h3.style.opacity = "1"

        let interval = setInterval(() => {
            if (index == 0) {
                element.style.display = "none"
                clearInterval(interval)
            }
            else{
                index--
                h3.innerHTML = index
            }
        }, 1000);
    })
});

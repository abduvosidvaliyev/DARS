// 11-topshiriq

let inp = document.querySelector(".container input")
let container = document.querySelector(".container")

inp.addEventListener("change", () => {
    let file = inp.files[0]
    if (file) {
        let reader = new FileReader();

        reader.onload = function (e) {
            let delateImg = container.querySelector("img");
            if (delateImg) {
                delateImg.remove();
            }

            let img = document.createElement("img");
            img.src = e.target.result;
            container.appendChild(img);
        };

        reader.readAsDataURL(file);

    }
})

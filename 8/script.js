let hidden = document.querySelector(".hidden")
let chils = document.querySelector(".chils")
let child1 = document.querySelector(".click")

let loop = true

chils.addEventListener("click", () => {
    if (loop) {
        child1.style.height = "160px"
        loop = false
    } else {
        child1.style.height = "20px"
        loop = true
    }
})

let span = document.querySelectorAll(".span")

span.forEach(element => {
    element.addEventListener("click", (e) => {
        let div = document.createElement("div")
        div.className = "animation"

        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop

        div.style.left = x + "px"
        div.style.top = y + "px"

        element.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 350);
    })
});

let spam = document.querySelectorAll(".spam")

spam.forEach(element => {
    element.addEventListener("click", (e) => {
        let div = document.createElement("div")
        div.className = "animation"

        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop

        div.style.left = x + "px"
        div.style.top = y + "px"

        element.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 200);
    })
});

let flag = document.querySelector(".flag")
let flags = document.querySelector(".flags")

let flagTrue = true

flag.addEventListener("click", () => {
    if (flagTrue) {
        flags.style.top = "15px"
        flags.style.opacity = 1
        flagTrue = false
    }
    else {
        flags.style.opacity = 0
        flags.style.top = "-500px"
        flagTrue = true
    }
})

let lenguig = document.querySelectorAll(".lenguig")

let img1 = lenguig[0]
let img2 = lenguig[1]
let img3 = lenguig[2]
let img4 = lenguig[3]
let img5 = lenguig[4]

let imgLink = ""

img1.addEventListener("click", () => {
    flag.src = "images-removebg-preview.png"
    flags.style.opacity = 0
    flags.style.top = "-500px"
})

img2.addEventListener("click", () => {
    flag.src = "usa.png"
    flags.style.opacity = 0
    flags.style.top = "-500px"
})

img3.addEventListener("click", () => {
    flag.src = "Flag_of_Bangladesh.svg.png"
    flags.style.opacity = 0
    flags.style.top = "-500px"
})

img4.addEventListener("click", () => {
    flag.src = "Flag_of_China.png"
    flags.style.opacity = 0
    flags.style.top = "-500px"
})

img5.addEventListener("click", () => {
    flag.src = "Turkey_flag_300.png"
    flags.style.opacity = 0
    flags.style.top = "-500px"
})

let pinkHeight = document.querySelector(".pinkHeight")
let blueHeight = document.querySelector(".blueHeight")
let aquaHeight = document.querySelector(".aquaHeight")

let pricePink = document.querySelectorAll(".pricePink")
let priceBlue = document.querySelectorAll(".priceBlue")
let priceAqua = document.querySelectorAll(".priceAqua")

let heightTrue1 = true
let heightTrue2 = true
let heightTrue3 = true

pinkHeight.addEventListener("click", () => {
    if (heightTrue1) {
        pricePink.forEach(element => {
            element.style.height = "0%"
        });
        heightTrue1 = false
    }
    else {
        pricePink.forEach(element => {
            element.style.height = ""
        });
        heightTrue1 = true
    }
})

blueHeight.addEventListener("click", () => {
    if (heightTrue2) {
        priceBlue.forEach(element => {
            element.style.height = "0%"
        });
        heightTrue2 = false
    }
    else {
        priceBlue.forEach(element => {
            element.style.height = ""
        });
        heightTrue2 = true
    }
})

aquaHeight.addEventListener("click", () => {
    if (heightTrue3) {
        priceAqua.forEach(element => {
            element.style.height = "0%"
        });
        heightTrue3 = false
    }
    else {
        priceAqua.forEach(element => {
            element.style.height = ""
        });
        heightTrue3 = true
    }
})

priceAqua.forEach(element => {
    element.addEventListener("mousemove", () => {
        priceBlue.forEach(element => {
            element.style.background = "#0e41fb20"
        });
        pricePink.forEach(element => {
            element.style.background = "#cb3cff20"
        });
    })
    element.addEventListener("mouseout", () => {
        priceBlue.forEach(element => {
            element.style.background = ""
        });
        pricePink.forEach(element => {
            element.style.background = ""
        });
    })
});

priceBlue.forEach(element => {
    element.addEventListener("mousemove", () => {
        priceAqua.forEach(element => {
            element.style.background = "#00C2FF20"
        });
        pricePink.forEach(element => {
            element.style.background = "#cb3cff20"
        });
    })
    element.addEventListener("mouseout", () => {
        priceAqua.forEach(element => {
            element.style.background = ""
        });
        pricePink.forEach(element => {
            element.style.background = ""
        });
    })
});

pricePink.forEach(element => {
    element.addEventListener("mousemove", () => {
        priceBlue.forEach(element => {
            element.style.background = "#0e41fb20"
        });
        priceAqua.forEach(element => {
            element.style.background = "#00C2FF20"
        });
    })
    element.addEventListener("mouseout", () => {
        priceBlue.forEach(element => {
            element.style.background = ""
        });
        priceAqua.forEach(element => {
            element.style.background = ""
        });
    })
});

let calendar = document.querySelector(".fa-calendar-day")
let inner1 = document.querySelector(".inner1")
let moon = document.querySelector("#moon")
let moons = document.querySelector(".moons")
let mons = document.querySelector(".mon")
let fff = document.querySelector(".fff")

let moonArray = [
    {
        mons: "Jan",
        mon: "January"
    },
    {
        mons: "Feb",
        mon: "February"
    },
    {
        mons: "Mar",
        mon: "March"
    },
    {
        mons: "Apr",
        mon: "April"
    },
    {
        mons: "May",
        mon: "May"
    },
    {
        mons: "Jun",
        mon: "June"
    },
    {
        mons: "Jul",
        mon: "July"
    },
    {
        mons: "Aug",
        mon: "August"
    },
    {
        mons: "Sep",
        mon: "September"
    },
    {
        mons: "Oct",
        mon: "October"
    },
    {
        mons: "Nov",
        mon: "November"
    },
    {
        mons: "Dec",
        mon: "December"
    }
]

moonArray.forEach(item => {
    let h4 = document.createElement("h4")
    h4.innerHTML = item.mons
    moons.appendChild(h4)

    let act = moons.querySelectorAll("h4")
    let activ = act[0]
    activ.className = "bacActiv"

    h4.addEventListener("click", () => {
        document.querySelectorAll(".moons h4").forEach(element => {
            element.classList.remove("bacActiv");
        });

        h4.classList.add("bacActiv")
        mons.innerHTML = item.mon
        inner1.innerHTML = item.mons
    })
})

let dayTrue = true

calendar.addEventListener("click", () => {
    if (dayTrue) {
        moon.style.opacity = "1"
        moon.style.top = "30px"
        fff.style.overflow = "visible"
        dayTrue = false 
    } else {
        moon.style.opacity = "0"
        moon.style.top = "-300px"
        fff.style.overflow = "hidden"
        dayTrue = true
    }
})

let complate = document.querySelector(".complate");
let images = document.querySelectorAll(".img1");
let images1 = images[0]
let images2 = images[1]
let images3 = images[2]
let images4 = images[3]
let images5 = images[4]
let images6 = images[5]
let images7 = images[6]
let images8 = images[7]
let images9 = images[8]
let images10 = images[9]


complate.addEventListener("mousemove", (e) => {
    let y = e.layerY
    let x = e.layerX

    if ((x >= 35 && x <= 50) && (y <= 95 && y >= 50)) {
        images1.classList.remove("img2")
        images2.classList.add("img2")
        images3.classList.remove("img2")
        images4.classList.remove("img2")
        images5.classList.remove("img2")
        images6.classList.remove("img2")
        images7.classList.remove("img2")
        images8.classList.remove("img2")
        images9.classList.remove("img2")
        images10.classList.remove("img2")
    } 
    else if ((x >= 100 && x <= 130) && (y <= 60 && y >= 45)) {
        images1.classList.remove("img2")
        images2.classList.remove("img2")
        images3.classList.add("img2")
        images4.classList.remove("img2")
        images5.classList.remove("img2")
        images6.classList.remove("img2")
        images7.classList.remove("img2")
        images8.classList.remove("img2")
        images9.classList.remove("img2")
        images10.classList.remove("img2")
    }
    else if ((x >= 165 && x <= 190) && (y <= 70 && y >= 35)) {
        images1.classList.remove("img2")
        images2.classList.remove("img2")
        images3.classList.remove("img2")
        images4.classList.add("img2")
        images5.classList.remove("img2")
        images6.classList.remove("img2")
        images7.classList.remove("img2")
        images8.classList.remove("img2")
        images9.classList.remove("img2")
        images10.classList.remove("img2")
    }
    else if ((x >= 235 && x <= 260) && (y <= 30 && y >= 5)) {
        images1.classList.remove("img2")
        images2.classList.remove("img2")
        images3.classList.remove("img2")
        images4.classList.remove("img2")
        images5.classList.add("img2")
        images6.classList.remove("img2")
        images7.classList.remove("img2")
        images8.classList.remove("img2")
        images9.classList.remove("img2")
        images10.classList.remove("img2")
    }
    else if ((x >= 300 && x <= 320) && (y <= 75 && y >= 50)) {
        images1.classList.remove("img2")
        images2.classList.remove("img2")
        images3.classList.remove("img2")
        images4.classList.remove("img2")
        images5.classList.remove("img2")
        images6.classList.add("img2")
        images7.classList.remove("img2")
        images8.classList.remove("img2")
        images9.classList.remove("img2")
        images10.classList.remove("img2")
    }
    else if ((x >= 365 && x <= 390) && (y <= 45 && y >= 25)) {
        images1.classList.remove("img2")
        images2.classList.remove("img2")
        images3.classList.remove("img2")
        images4.classList.remove("img2")
        images5.classList.remove("img2")
        images6.classList.remove("img2")
        images7.classList.add("img2")
        images8.classList.remove("img2")
        images9.classList.remove("img2")
        images10.classList.remove("img2")
    }
    else if ((x >= 435 && x <= 455) && (y <= 55 && y >= 35)) {
        images1.classList.remove("img2")
        images2.classList.remove("img2")
        images3.classList.remove("img2")
        images4.classList.remove("img2")
        images5.classList.remove("img2")
        images6.classList.remove("img2")
        images7.classList.remove("img2")
        images8.classList.add("img2")
        images9.classList.remove("img2")
        images10.classList.remove("img2")
    }
    else if ((x >= 500 && x <= 520) && (y <= 40 && y >= 15)) {
        images1.classList.remove("img2")
        images2.classList.remove("img2")
        images3.classList.remove("img2")
        images4.classList.remove("img2")
        images5.classList.remove("img2")
        images6.classList.remove("img2")
        images7.classList.remove("img2")
        images8.classList.remove("img2")
        images9.classList.add("img2")
        images10.classList.remove("img2")
    }
    else if ((x >= 565 && x <= 580) && (y <= 75 && y >= 55)) {
        images1.classList.remove("img2")
        images2.classList.remove("img2")
        images3.classList.remove("img2")
        images4.classList.remove("img2")
        images5.classList.remove("img2")
        images6.classList.remove("img2")
        images7.classList.remove("img2")
        images8.classList.remove("img2")
        images9.classList.remove("img2")
        images10.classList.add("img2")
    }

});

let cal = document.querySelector(".fa-calendar-week")
let weekMon = document.querySelector("#mon")
let muns = document.querySelector(".muns")
let mun = document.querySelector(".mun")
let inner2 = document.querySelector(".inner2")
let ccc = document.querySelector(".ccc")

let weekTrue = true

moonArray.forEach(element => {
    let h4 = document.createElement("h4")
    h4.innerHTML = element.mons
    muns.appendChild(h4)

    let act = muns.querySelectorAll("h4")
    let activ = act[0]
    activ.className = "bacActiv"

    
    h4.addEventListener("click", () => {
        document.querySelectorAll(".muns h4").forEach(element => {
            element.classList.remove("bacActiv");
        });

        h4.classList.add("bacActiv")

        inner2.innerHTML = element.mons
        mun.innerHTML = element.mon
    })
})

cal.addEventListener("click", () => {
    if (weekTrue) {
        weekMon.style.opacity = "1"
        weekMon.style.top = "30px"
        ccc.style.overflow = "visible"
        weekTrue = false
    } 
    else {
        ccc.style.overflow = "hidden"
        weekMon.style.opacity = "0"
        weekMon.style.top = "-300px"
        weekTrue = true
    }
})
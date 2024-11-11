// 8-topshiriq

let prp = prompt("Biron-bir Yil Kiriting")

let data = new Date()
let yil = data.getFullYear()

let index = prp*1

if (index >= yil) {
    alert(index - yil + "yil qolgan")
} else {
    alert(yil - index + "yil o'tgan")
}.

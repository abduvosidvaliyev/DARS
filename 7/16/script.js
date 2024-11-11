// 16-topshiriq

let sonlar = [1, 2, 5, 8, 9, 2, 11, 5, 15, 18, 1, 8, 9]

let number = sonlar.filter(num => sonlar.indexOf(num) === sonlar.lastIndexOf(num));

console.log(number);    

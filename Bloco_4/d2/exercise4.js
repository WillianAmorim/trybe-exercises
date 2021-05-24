let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0

for(contador = 0; contador < numbers.length; contador++){
    total += numbers[contador]
}
console.log(total / numbers.length)

if ((total/numbers.length) > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}
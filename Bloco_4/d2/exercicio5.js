let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (contador = 1; contador < numbers.length; contador += 1) {
    if (numbers[contador] > numbers[0]) {
        numbers[0] = numbers[contador]
        
    }
}
console.log (numbers[0])
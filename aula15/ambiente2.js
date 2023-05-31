var valores = [2, 9, 13, 21, 6, 11]

var pos = valores.indexOf(13) // mostra em qual posição está determinado valor
console.log(pos)

/*

for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição do valor ${valores[pos]} é ${pos}`)
}

*/

for (var pos in valores) {
    console.log(`A posição do valor ${valores[pos]} é ${pos}`)
}
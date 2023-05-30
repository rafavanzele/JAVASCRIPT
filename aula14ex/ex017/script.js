function calcular() {
    var num = document.getElementById('inumero')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um numero')
    } else {
        var n = Number(num.value)

        var c = 0
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
}
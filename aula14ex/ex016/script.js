function contar() {
    var inicio = document.getElementById('inumin')
    var fim = document.getElementById('inumfim')
    var passo = document.getElementById('ipass')
    var res = document.getElementById('res')  

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO. Preencha todos os campos!')
    } else {
        res.innerHTML = 'Contando: '
        
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido!')
        }

        if (i < f) {
            // CONTAGEM PROGRESSIVA
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
    
        } else {
            // CONTAGEM REGRESSIVA
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
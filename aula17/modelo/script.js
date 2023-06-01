let num = document.getElementById('inum')
let tabela = document.getElementById('itabela')
let res = document.getElementById('res')
let vet = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}



function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}



function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, vet)) {
        vet.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tabela.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já se encontra na lista')
    }
    num.value = ''
    num.focus()
}


function finalizar() {
    if (vet.length == 0) {
        alert('Adicione valores no formulário')
    } else {
        let total = vet.length
        let maior = vet[0]
        let menor = vet[0]
        let soma = 0
        let media = 0

        for (let pos in vet) {
            soma += vet[pos]
        
            if (vet[pos] > maior) 
                maior = vet[pos]
            if (vet[pos] < menor)
                menor = vet[pos]
        }
        
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>${total} números foram cadastrados ao total.</p>`
        res.innerHTML += `<p>O maior valor adicionado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores adicionados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores adicionados é ${media}.</p>`
        
    }
}
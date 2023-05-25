function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homem.criança.peq.jpg')
            } else if (idade < 21) {
                //adolescente/jovem
                img.setAttribute('src', 'homem.jovem.peq.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.adulto.peq.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem.idoso.peq.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mulher.criança.peq.jpg')
            } else if (idade < 21) {
                //adolescente/jovem
                img.setAttribute('src', 'mulher.jovem.peq.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.adulta.peq.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher.idosa.peq.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos` 
        res.appendChild(img)
    }
}
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.peq.jpg'
        document.body.style.background = '#978a04'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.peq.jpg'
        document.body.style.background = '#b03602'
    } else {
        img.src = 'noite.peq.jpg'
        document.body.style.background = '#213846'
    }
    
}

function carregar(){
    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são <strong> ${hora}:${data.getMinutes()} </strong>`
    var corpo = document.getElementById('body')
    var titulo = document.getElementById('titulo')
    if(hora >= 6 && hora < 12){
        // BOM DIAA
        imagem.src = 'manha.jpg'
        corpo.style.background = '#ffd700'
        titulo.style.color = 'black'
    }else if(hora >= 12 && hora < 18){
        // BOA TARDEE
        imagem.src = 'tarde.jpg'
        corpo.style.background = '#eead2d'
        titulo.style.color = 'black'
    }else{
        imagem.src = 'noite.jpg'
        corpo.style.background = '#111111'
    }
}
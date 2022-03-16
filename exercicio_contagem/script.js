function contar(){
    var inicio = document.getElementById('inicio').value
    var fim = document.querySelector('input#fim').value
    var passos = document.getElementById('passos').value
    var resposta = document.getElementById('resposta')

    if(inicio.length == 0 || fim.length == 0 || passos.length == 0){
        window.alert('VERIFIQUE OS DADOS')
    }else{
        resposta.innerText = 'Contando: '
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passos)

        if(i < f){
            for(var c = i; c <= f; c += p){
                resposta.innerText += '\u{1F449}'
                resposta.innerText += `${c}`
            }
        }else{
            for(var c = i; c >= f; c -= p){
                resposta.innerText += '\u{1F449}'
                resposta.innerText += `${c}`
            }
        }
        resposta.innerText += '\u{1F3C1}'
    }
}
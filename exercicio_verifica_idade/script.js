function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var inputAno = document.getElementById('nascimento')
    var resposta = document.getElementById('resposta')

    if (inputAno.value.length == 0 || inputAno.value > ano_atual){
        window.alert("Verifique os dados")
    }else{
        var inputsex = document.getElementsByName('inputsex')
        var idade = ano_atual - inputAno.value
        var fase_vida = ''
        var imagem = document.createElement('img')
        // MASCULINO
        if (inputsex[0].checked && idade < 12){
            fase_vida = 'menino'
            imagem.setAttribute('src', 'menino.jpg')
        }else if (inputsex[0].checked && idade >= 12 && idade < 18){
            fase_vida = 'jovem garoto'
            imagem.setAttribute('src', 'jovem_garoto.jpg')
        }else if (inputsex[0].checked && idade >= 18 && idade < 65){
            fase_vida = 'homem adulto'
            imagem.setAttribute('src', 'homem_adulto.jpg') 
        }else if (inputsex[0].checked && idade >= 65){
            fase_vida = 'homem idoso'
            imagem.setAttribute('src', 'homem_idoso.jpg')
        }
        // FIM MASCULINO
        // FEMININO
        if (inputsex[1].checked && idade < 12){
            fase_vida = 'menina'
            imagem.setAttribute('src', 'menina.jpg')
        }else if (inputsex[1].checked && idade >= 12 && idade < 18){
            fase_vida = 'jovem garota'
            imagem.setAttribute('src', 'jovem_garota.jpg')
        }else if (inputsex[1].checked && idade >= 18 && idade < 65){
            fase_vida = 'mulher adulta'
            imagem.setAttribute('src', 'mulher_adulta.jpg')
        }else if (inputsex[1].checked && idade >= 65){
            fase_vida = 'mulher idosa'
            imagem.setAttribute('src', 'mulher_idosa.jpg')
        }
        // FIM FEMININO
    }
    resposta.innerHTML = `Detectamos: <strong>${fase_vida}</strong> de <strong>${idade}</strong> anos`
    resposta.appendChild(imagem)
}
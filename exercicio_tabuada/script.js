function tabuada(){
    var numero = document.getElementById('numero')
    var resposta = document.querySelector('div#resposta')

    if (numero.length == 0){
        window.alert('Verifique os dados')
    }else{
        var valor = Number(numero.value)
        var contador = 1
        resposta.innerHTML = ''
        while(contador <= 10){
            var elemento = document.createElement('option')
            elemento.text = `${valor} x ${contador} = ${valor * contador}`
            contador ++
            resposta.appendChild(elemento)
        }
        
    }
}
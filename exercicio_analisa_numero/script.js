var numero = document.getElementById('numero')
var lista = document.getElementById('lista')
var resposta = document.getElementById('resposta')
var valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function Adicionar(){
    if (isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let elemento = document.createElement('option')
        elemento.text = `Valor: ${numero.value} adicionado`
        lista.appendChild(elemento)
        resposta.innerHTML = ''
    }else{
        window.alert('Valor inválido ou repetido')
    }
    numero.value = ''
    numero.focus()
}


function Analisar(){
    if(valores.length == 0){
        window.alert('Adicione valores')
    }else{
        let total = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/total
        resposta.innerHTML = ''
        resposta.innerHTML += `<p> Ao todo são ${total} números cadastrados </p>`
        resposta.innerHTML += `<p>O maior valor é ${maior}</p>`
        resposta.innerHTML += `<p>O menor valor é ${menor}</p>`
        resposta.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        resposta.innerHTML += `<p>A média dos valores é ${media}</p>`
        
    }
}
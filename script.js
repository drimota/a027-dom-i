const frutas = ["laranja", "limão", "uva"];

let frase = document.getElementById('fruta-1')
frase.innerHTML+= frutas[0]


let fruta = document.getElementById('fruta-2')
fruta.innerHTML+= frutas[1]


let fruto = document.getElementById('fruta-3')
fruto.innerHTML+= frutas[2]


let input = document.getElementById('nomeFruta')
function adicionar(){
    let adicionado = document.getElementById
    ('fruta-4').innerHTML = input.value
}
//var numeroSecreto = parseInt(Math.random()*11)


function usuario() {
    var numeroSecreto = parseInt(Math.random()*11)
    var elementoResultado = document.getElementById('resultado')
    var chute = parseInt(document.getElementById('valor').value) 
    

    if (chute ===  numeroSecreto) {
        elementoResultado.innerHTML = 'Você acertou!' 
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = 'Por gentileza, digite um número entre 0 e 10!  '
    } else {
        elementoResultado.innerHTML = 'Você errou! Número sorteado: ' + numeroSecreto
    }
}

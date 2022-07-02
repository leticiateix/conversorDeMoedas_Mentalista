

function converterReal() {
    var valorElemento = document.getElementById('valor').value
    var valorDolar = parseFloat(valorElemento)

    var valorReal = valorDolar * 5
    
    var elementoConvertido = document.getElementById('valorConvertido') 
    var valorConvertido = "Conversão em real é R$ " + valorReal
    elementoConvertido.innerHTML = valorConvertido

}

function converterEuro() {
    var valorElemento = document.getElementById('valor').value
    var valorDolar = parseFloat(valorElemento)

    var valorEuro = valorDolar * 1.09
    console.log(valorEuro)
    var elementoConvertido = document.getElementById('valorConvertido')
    var valorConvertido = "Conversão em euro é € " + valorEuro
    elementoConvertido.innerHTML = valorConvertido
}

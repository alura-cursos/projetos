// alert - document.write - console.log
var numeroSecreto = parseInt(Math.random() * 10)
//alert(numeroSecreto)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if (numeroSecreto == chute) {
    alert("Acertou")
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert("O numero secreto é maior")
    tentativas = tentativas - 1
  } 
}

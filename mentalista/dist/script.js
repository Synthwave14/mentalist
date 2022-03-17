function Adivinhar() {
  var numeroSecreto = parseInt(Math.random() * 11);

  var exibir = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  chute > 10 || chute < 0 ?
  exibir.innerHTML = "Digite um número de 0 a 10" :
  chute === numeroSecreto ?
  exibir.innerHTML = "Acertou! O número secreto é " + numeroSecreto + "!" :
  exibir.innerHTML = "Errou! O número secreto era " + numeroSecreto + "!";
  console.log(numeroSecreto);
}
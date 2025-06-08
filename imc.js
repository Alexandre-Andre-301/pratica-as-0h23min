function imc() {
  var altura = parseFloat(document.getElementById("altura").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var imc = peso / (altura * altura);
  var msg = "";
  if (imc < 18.5) {
    msg = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    msg = "peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    msg = "Sobrepeso";
  } else {
    msg = "Obesidade";
  }
  document.getElementById("resul").innerHTML = `Seu IMC é de ${imc.toFixed(
    2
  )} e estás classificado como: ${msg}`;
}

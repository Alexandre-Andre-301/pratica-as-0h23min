function calcular() {
  var ano = Number(document.getElementById("p1").value);
  var idade = 2025 - ano;
  var msg = " ";
  if (idade < 11) {
    msg = "voce ainda ser criança";
  } else if (idade < 18) {
    msg = "voce ja é um adolescente";
  } else if (idade < 60) {
    msg = "voce ja é um adulto";
  } else {
    msg = "voce ja é um idoso";
  }
  document.getElementById("reul").innerHTML =
    "Sua idade é: " + idade + " anos. " + msg;
}

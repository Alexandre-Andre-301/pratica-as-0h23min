function somar() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);
  const resul = n1 + n2;
  document.getElementById(
    "n3"
  ).innerHTML = `A soma dos elementos ser de ${resul}`;
}

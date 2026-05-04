function sumar() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  let resultado = a + b;

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
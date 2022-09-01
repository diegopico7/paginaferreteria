const btnCalc = document.getElementById("btn-calc");

const resultado = document.getElementById("result");

function calculo() {
  const calcInput = document.getElementById("calc-input").value;
  parseFloat(calcInput);
  var resultad = calcInput / 10;

  resultado.innerHTML = `<h3>Usted necesita ${resultad} litros de pintura</h3> `;
  console.log(resultad);
}

function limpiar() {
  resultado.innerHTML = " ";
}

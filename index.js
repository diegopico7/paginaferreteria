const btnCalc = document.getElementById("btn-calc");

const resultado = document.getElementById("result");

function calculo() {
  const calcInput = document.getElementById("calc-input").value;
  parseFloat(calcInput);
  var resultad = calcInput / 10;

  resultado.innerHTML = `<h3 class="resultad">Usted necesita ${resultad} litros de pintura</h3> `;
  console.log(resultad);
}

function limpiar() {
  resultado.innerHTML = " ";
}

/*buscador*/
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const productos = document.querySelectorAll(".card.tarjeta");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    console.log("Search term:", searchTerm);

    productos.forEach(function (producto) {
      const titulo = producto
        .querySelector(".card-title")
        .textContent.toLowerCase();

      if (titulo.includes(searchTerm)) {
        producto.style.display = "block";
      } else {
        producto.style.display = "none";
      }
    });
  });
});

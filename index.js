var precio = 400000;
var cantidad = 0;

var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function sumarCantidad() {
  cantidad = cantidad + 2;
  botonMasSpan = document.querySelector("p .cantidad");
  botonMasSpan.innerHTML = cantidad;
  // actualiza el valor total a pagar por cada PC selecionado
  total_a_pagar = precio * cantidad;
  totalPagarSpan = document.querySelector("p .valor-total");
  totalPagarSpan.innerHTML = total_a_pagar;
}

function restarCantidad() {
  cantidad = cantidad - 1;
  if (cantidad < 0) {
    cantidad = 0;
  }
  botonMenosSpan = document.querySelector("p .cantidad");
  botonMenosSpan.innerHTML = cantidad;

  // actualiza el valor total a pagar por cada PC selecionado
  total_a_pagar = precio * cantidad;
  totalPagarSpan = document.querySelector("p .valor-total");
  totalPagarSpan.innerHTML = total_a_pagar;
}

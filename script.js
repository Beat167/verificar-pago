const form = document.getElementById('form');
const fichaInput = document.getElementById('ficha');
const boton = document.getElementById('boton');
const resultadoDiv = document.getElementById('resultado');

boton.addEventListener('click', (e) => {
  e.preventDefault();
  const ficha = fichaInput.value.trim();
  if (ficha.length >= 3 && ficha.length <= 5) {
    // Llamar a la función que verifica el pago
    verificarPago(ficha);
  } else {
    resultadoDiv.innerHTML = 'Ficha inválida';
  }
});

function verificarPago(ficha) {
  // Aquí puedes agregar la lógica para verificar el pago
  // Por ahora, solo mostraré un mensaje de ejemplo
  resultadoDiv.innerHTML = `Pago: ${ficha}`;
}

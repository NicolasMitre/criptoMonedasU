const cotizador = new API(
  "2af0d076d43346a65deedf8137cc2579f42f13af5db1790740ac4c2838f936ba"
);
const ui = new Interfaz();
// leer el formulario

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", e => {
  e.preventDefault();

  const monedaSelect = document.querySelector("#moneda");
  const monedaSeleccionada =
    monedaSelect.options[monedaSelect.selectedIndex].value;

  const criptoMonedaSelect = document.querySelector("#criptomoneda");
  const criptoMonedaSeleccionada =
    criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

  if (monedaSeleccionada === "" || criptoMonedaSeleccionada === "") {
    ui.mostrarMensaje(
      "ambos campos son obligatorios",
      "alert bg-danger text-center"
    );
  } else {
    cotizador
      .obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
      .then(data => {
        ui.mostrarResultado(
          data.resultado.RAW,
          monedaSeleccionada,
          criptoMonedaSeleccionada
        );
      });
  }
});

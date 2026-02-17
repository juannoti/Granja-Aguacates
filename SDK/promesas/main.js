const arcgisMap = document.querySelector("arcgis-map");

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  const vistaMapa = arcgisMap.view;

  const eventoClickMapa = vistaMapa.on("click", (eventoClick) => {
    const geometriaPunto = eventoClick.mapPoint;
    const resultadoMovimiento = vistaMapa.goTo(geometriaPunto);
    // El movimiento sale bien
    resultadoMovimiento.then(() => {
      vistaMapa.zoom = 10;
    });
    // El movimiento sale mal
    resultadoMovimiento.catch((error) => {
      console.log(error);
    });
  });
});

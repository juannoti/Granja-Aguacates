const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);

const arcgisMap = document.querySelector("arcgis-map");

arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
  // El evento se ejecuta cuando se carga la vista del Mapa
  const hospitalesFl = new FeatureLayer({
    url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
  });
  const search = document.querySelector("arcgis-search");
  search.sources = [
    {
      layer: hospitalesFl,
      searchFields: ["Nombre", "Municipio"],
      displayField: "Nombre",
      exactMatch: false,
      suggestionTemplate: "{Nombre}, {Municipio}, {Provincia}",
      outFields: ["*"],
      name: "Hospitales",
      placeholder: "Ej: Hospital Universitario de Navarra",
      zoomScale: 50000,
      resultSymbol: {
        type: "picture-marker",
        url: "https://cdn-icons-png.flaticon.com/512/504/504276.png",
        height: 36,
        width: 36,
      },
    },
  ];
});

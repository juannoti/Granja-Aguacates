const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const HeatmapRenderer = await $arcgis.import(
  "@arcgis/core/renderers/HeatmapRenderer.js",
);

const arcgisMap = document.querySelector("arcgis-map");

const hospitalesFl = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
});

hospitalesFl.renderer = {
  type: "heatmap",
  colorStops: [
    { ratio: 0, color: "rgba(255, 255, 255, 0)" },
    { ratio: 0.2, color: "rgba(255, 255, 255, 1)" },
    { ratio: 0.5, color: "rgba(255, 140, 0, 1)" },
    { ratio: 0.8, color: "rgba(255, 140, 0, 1)" },
    { ratio: 1, color: "rgba(255, 0, 0, 1)" },
  ],
};

hospitalesFl.renderer.legendOptions = {
  title: "Nº de Hospitales",
  minLabel: "Concentración baja",
  maxLabel: "Concentración alta",
};

arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
  arcgisMap.map.add(hospitalesFl);
});

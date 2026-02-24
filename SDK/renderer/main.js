const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const SimpleRenderer = await $arcgis.import(
  "@arcgis/core/renderers/SimpleRenderer.js",
);

const arcgisMap = document.querySelector("arcgis-map");

const SimpleMarkerSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleMarkerSymbol.js",
);

const simbologiaPunto = new SimpleMarkerSymbol({
  angle: 0,
  color: [36, 139, 198, 1],
  outline: {
    cap: "round",
    color: [6, 73, 111, 1],
    join: "round",
    miterLimit: 1,
    style: "short-dash-dot-dot",
    width: 1,
  },
  path: "undefined",
  size: 16,
  style: "diamond",
  xoffset: 0,
  yoffset: 0,
});

const rendererHospitales = new SimpleRenderer({
  symbol: simbologiaPunto,
});

const hospitalesFl = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
  renderer: rendererHospitales,
});

arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
  arcgisMap.map.add(hospitalesFl);
});

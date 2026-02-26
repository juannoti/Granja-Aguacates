const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const SimpleRenderer = await $arcgis.import(
  "@arcgis/core/renderers/SimpleRenderer.js",
);
const VisualVariable = await $arcgis.import(
  "@arcgis/core/renderers/visualVariables/VisualVariable.js",
);
const arcgisMap = document.querySelector("arcgis-map");

const SimpleMarkerSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleMarkerSymbol.js",
);

const SimpleFillSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleFillSymbol.js",
);

const simbologiaCCAA = new SimpleMarkerSymbol({
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

const rendererCCAA = new SimpleRenderer({
  symbol: simbologiaCCAA,
});

rendererCCAA.visualVariables = [
  {
    type: "size",
    field: "Poblacion",
    stops: [
      { value: 500000, size: 8, label: "Menos de 500.000 hab." },
      { value: 1000000, size: 16, label: "Entre 500.000 y 1M de hab." },
      { value: 5000000, size: 32, label: "Más de 1M de hab." },
    ],
  },
];
const CCAAFl = new FeatureLayer({
  url: "https://services1.arcgis.com/YFraetVkEAF1lMag/ArcGIS/rest/services/Nivel_estudios_y_poblaci%c3%b3n_por_CCAA_2021/FeatureServer/1",
  renderer: rendererCCAA,
});

arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
  arcgisMap.map.add(CCAAFl);
});

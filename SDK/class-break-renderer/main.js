const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const ClassBreaksRenderer = await $arcgis.import(
  "@arcgis/core/renderers/ClassBreaksRenderer.js",
);

const arcgisMap = document.querySelector("arcgis-map");

const SimpleFillSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleFillSymbol.js",
);

const simpleFillSymbol1 = new SimpleFillSymbol({
  color: [211, 231, 243, 1],
  outline: {
    cap: "round",
    color: [0, 122, 194, 1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1,
  },
  style: "solid",
});

const simpleFillSymbol2 = new SimpleFillSymbol({
  color: [116, 201, 251, 1],
  outline: {
    cap: "round",
    color: [0, 122, 194, 1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1,
  },
  style: "solid",
});

const simpleFillSymbol3 = new SimpleFillSymbol({
  color: [12, 123, 187, 1],
  outline: {
    cap: "round",
    color: [0, 0, 0, 0],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1,
  },
  style: "solid",
});

const renderer = new ClassBreaksRenderer({
  field: "F_POBLACION__Población",
});
// All features with magnitude between 0 - 4.0
renderer.addClassBreakInfo({
  minValue: 0,
  maxValue: 10000.0,
  symbol: simpleFillSymbol1,
});
// All features with magnitude between 4.1 - 7.0
renderer.addClassBreakInfo({
  minValue: 10000.1,
  maxValue: 30000.0,
  symbol: simpleFillSymbol2,
});
// All features with magnitude between 7.1 - 10.0
renderer.addClassBreakInfo({
  minValue: 30000.0,
  maxValue: 10000000000000000000000000.0,
  symbol: simpleFillSymbol3,
});

const ZBSalud = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/ZONAS_BASICAS_SALUD_MADRID/FeatureServer/0",
  renderer: renderer,
});

arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
  arcgisMap.map.add(ZBSalud);
});

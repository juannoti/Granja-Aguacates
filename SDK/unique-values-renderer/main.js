const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const UniqueValueRenderer = await $arcgis.import(
  "@arcgis/core/renderers/UniqueValueRenderer.js",
);

const arcgisMap = document.querySelector("arcgis-map");

const SimpleFillSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleFillSymbol.js",
);

const simpleFillSymbol1 = new SimpleFillSymbol({
  color: [255, 0, 0, 1],
  outline: {
    cap: "round",
    color: [255, 0, 0, 1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1,
  },
  style: "backward-diagonal",
});

const simpleFillSymbol2 = new SimpleFillSymbol({
  color: [119, 255, 82, 1],
  outline: {
    cap: "round",
    color: [140, 140, 140, 1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1,
  },
  style: "solid",
});

const simpleFillSymbol3 = new SimpleFillSymbol({
  color: [70, 137, 52, 1],
  outline: {
    cap: "round",
    color: [140, 140, 140, 1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1,
  },
  style: "solid",
});

const renderer = new UniqueValueRenderer({
  field: "TIPO_NUEVO",

  uniqueValueInfos: [
    {
      value: "ZEPA",
      symbol: simpleFillSymbol1,
    },
    {
      value: "LIC",
      symbol: simpleFillSymbol2,
    },
    {
      value: "LIC/ZEPA",
      symbol: simpleFillSymbol3,
    },
  ],
});
const RN200 = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Red_Natura_2000/FeatureServer/0",
  renderer: renderer,
});

arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
  arcgisMap.map.add(RN200);
});

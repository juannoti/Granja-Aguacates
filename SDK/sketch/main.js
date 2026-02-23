const sketch = document.querySelector("arcgis-sketch");

const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const GraphicsLayer = await $arcgis.import(
  "@arcgis/core/layers/GraphicsLayer.js",
);
const SimpleMarkerSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleMarkerSymbol.js",
);
const arcgisMap = document.querySelector("arcgis-map");

const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");

const capaGraficaResultados = new GraphicsLayer();
const capaGraficaHospitalesResultados = new GraphicsLayer();

const hospitalesFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Hospitales/FeatureServer/0",
});

const simbologiaPunto = new SimpleMarkerSymbol({
  angle: 0,
  color: [255, 255, 255, 0.25],
  outline: {
    cap: "round",
    color: [0, 122, 194, 1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1,
  },
  path: "undefined",
  size: 12,
  style: "circle",
  xoffset: 0,
  yoffset: 0,
});

sketch.addEventListener("arcgisReady", () => {
  sketch.layer = capaGraficaResultados;
});

sketch.addEventListener("arcgisCreate", (customEvent) => {
  if (
    customEvent.detail.state === "complete" &&
    customEvent.detail.tool === "point"
  ) {
    capaGraficaHospitalesResultados.removeAll();

    const geometriaPunto = customEvent.detail.graphic.geometry;

    const parametrosQuery = new Query({
      geometry: geometriaPunto,
      distance: 10,
      units: "kilometers",
      spatialRelationship: "intersects",
      returnGeometry: true,
      outFields: ["*"],
    });

    const resultadoQuery = hospitalesFL.queryFeatures(parametrosQuery);
    // EL resultado es una Promesa -> .then

    resultadoQuery.then((resultadoFeatureSet) => {
      const entidades = resultadoFeatureSet.features;
      const entidadesConSimbologia = entidades.map((hospital) => {
        hospital.symbol = simbologiaPunto;
        return hospital;
      });
      capaGraficaHospitalesResultados.addMany(entidadesConSimbologia);
    });
  }
});

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(capaGraficaResultados);
  arcgisMap.map.add(capaGraficaHospitalesResultados);
});

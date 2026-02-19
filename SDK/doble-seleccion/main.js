// Importamos

const GraphicsLayer = await $arcgis.import(
  "@arcgis/core/layers/GraphicsLayer.js",
);
const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");
const SimpleMarkerSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleMarkerSymbol.js",
);
const SimpleFillSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleFillSymbol.js",
);
const PictureMarkerSymbol = await $arcgis.import(
  "@arcgis/core/symbols/PictureMarkerSymbol.js",
);

const simbologiaIncendios = new PictureMarkerSymbol({
  angle: 0,
  height: 100,
  url: "https://sagewall.github.io/test-images/globie.png",
  width: 100,
  xoffset: 0,
  yoffset: 0,
});
// Accedemos al mapa

const arcgisMap = document.querySelector("arcgis-map");

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  const paises = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries/FeatureServer/0",
  });

  const incendios = new FeatureLayer({
    url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/MODIS_Thermal_v1/FeatureServer/1",
  });
  const capaGraficaIncendios = new GraphicsLayer({
    title: "Incendios",
  });

  const peticionEspana = new Query({
    where: "ISO_CC = 'ESP'",
    returnGeometry: true,
    outFields: ["*"],
  });

  const resultadoEspana = paises.queryFeatures(peticionEspana);

  // EL resultado es una Promesa -> .then

  resultadoEspana.then((resultadoFeatureSet) => {
    const poligonosEspana = resultadoFeatureSet.features;
    console.log(poligonosEspana);
    const simbologiaEsp = new SimpleFillSymbol({
      color: [0, 122, 194, 1],
      outline: {
        cap: "round",
        color: [0, 122, 194, 1],
        join: "round",
        miterLimit: 1,
        style: "solid",
        width: 1,
      },
      style: "backward-diagonal",
    });

    const EspanaConSimbologia = poligonosEspana.map((poligono) => {
      // Este 'map' es un for each/while
      const geometriaPoligono = poligono.geometry;
      const peticionIncendios = new Query({
        geometry: geometriaPoligono,
        spatialRelationship: "intersects",
        returnGeometry: true,
        outFields: ["*"],
      });
      const resultadoQueryIncendios =
        incendios.queryFeatures(peticionIncendios);
      resultadoQueryIncendios.then((resultadoFeatureSetIncendios) => {
        const puntoIncendio = resultadoFeatureSetIncendios.features;

        const incendiosConSimbologia = puntoIncendio.map((incendioGrafico) => {
          // Este 'map' es un for each/while
          incendioGrafico.symbol = simbologiaIncendios;
          return incendioGrafico;
        });

        capaGraficaIncendios.addMany(incendiosConSimbologia); // addMany porque son varias
      });

      poligono.symbol = simbologiaEsp;
      return poligono;
    });
    arcgisMap.map.add(capaGraficaIncendios);
    const capaGraficaPaises = new GraphicsLayer();
    capaGraficaPaises.addMany(EspanaConSimbologia); // addMany porque son varias
    arcgisMap.map.add(capaGraficaPaises);

    // EL resultado es una Promesa -> .then
  });
});

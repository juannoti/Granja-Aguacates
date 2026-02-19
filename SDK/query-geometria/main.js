// Importamos

const Polygon = await $arcgis.import("@arcgis/core/geometry/Polygon.js");
const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
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

// Geometría

const geometriaPoligono = new Polygon({
  rings: [
    [
      [-3.8, 40.45],
      [-3.6, 40.45],
      [-3.6, 40.38],
      [-3.8, 40.38],
      [-3.8, 40.45],
    ],
  ],
});

// Simbología

const SimpleFillSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleFillSymbol.js",
);

const simbologiaPoligono = new SimpleFillSymbol({
  color: [0, 81, 128, 1],
  outline: {
    cap: "round",
    color: [0, 94, 148, 1],
    join: "round",
    miterLimit: 3,
    style: "solid",
    width: 1,
  },
  style: "none",
});

// Unimos geometría y simbología

const graficoPoligono = new Graphic({
  geometry: geometriaPoligono,
  symbol: simbologiaPoligono,
});

// Creo una capa gráfica

const capaPoligono = new GraphicsLayer();

capaPoligono.add(graficoPoligono);

// Accedemos al mapa

const arcgisMap = document.querySelector("arcgis-map");

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(capaPoligono);

  const hospitalesFL = new FeatureLayer({
    url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Hospitales/FeatureServer/0",
  });
  arcgisMap.map.add(hospitalesFL);

  const peticionQuery = new Query({
    geometry: geometriaPoligono,
    spatialRelationship: "intersects",
    distance: 0.5,
    units: "kilometers",
    returnGeometry: true,
    outFields: ["*"],
  });

  const resultadoQuery = hospitalesFL.queryFeatures(peticionQuery);

  // EL resultado es una Promesa -> .then

  resultadoQuery.then((resultadoFeatureSet) => {
    const entidades = resultadoFeatureSet.features;

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

    const entidadesConSimbologia = entidades.map((grafico) => {
      // Este 'map' es un for each/while
      grafico.symbol = simbologiaPunto;
      return grafico;
    });

    const capaGraficaGL = new GraphicsLayer();
    capaGraficaGL.addMany(entidadesConSimbologia); // addMany porque son varias
    arcgisMap.map.add(capaGraficaGL);
  });
});

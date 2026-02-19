// Importamos

const Point = await $arcgis.import("@arcgis/core/geometry/Point.js");
const Polyline = await $arcgis.import("@arcgis/core/geometry/Polyline.js");
const Polygon = await $arcgis.import("@arcgis/core/geometry/Polygon.js");

// Geometría

const geometriaPunto = new Point({
  latitude: 40.4,
  longitude: -4,
});

// Autocasting

// const geometriaPunto = {
//   type: 'point',
//   latitude: 40.4,
//   longitude: -4,
// };

const geometriaPolilinea = new Polyline({
  paths: [
    [-3.9, 40.45],
    [-3.95, 40.45],
    [-4, 40.45],
  ],
});

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

const SimpleLineSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleLineSymbol.js",
);

const simbologiaPolilinea = new SimpleLineSymbol({
  cap: "round",
  color: [0, 122, 194, 1],
  join: "round",
  miterLimit: 1,
  style: "short-dash-dot-dot",
  width: 2,
});

const PictureFillSymbol = await $arcgis.import(
  "@arcgis/core/symbols/PictureFillSymbol.js",
);

const simbologiaPoligono = new PictureFillSymbol({
  height: 75,
  outline: {
    cap: "round",
    color: [0, 122, 194, 255],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 2,
  },
  url: "https://sagewall.github.io/test-images/globie.png",
  width: 75,
  xoffset: 0,
  xscale: 1,
  yoffset: 0,
  yscale: 1,
});

// Unimos geometría y simbología

const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");

const graficoPunto = new Graphic({
  geometry: geometriaPunto,
  symbol: simbologiaPunto,
});

const graficoPolilinea = new Graphic({
  geometry: geometriaPolilinea,
  symbol: simbologiaPolilinea,
});

const graficoPoligono = new Graphic({
  geometry: geometriaPoligono,
  symbol: simbologiaPoligono,
});

// Creo una capa gráfica

const GraphicsLayer = await $arcgis.import(
  "@arcgis/core/layers/GraphicsLayer.js",
);

const capaPunto = new GraphicsLayer();
const capaPolilinea = new GraphicsLayer();
const capaPoligono = new GraphicsLayer();

capaPunto.add(graficoPunto);
capaPolilinea.add(graficoPolilinea);
capaPoligono.add(graficoPoligono);

// Accedemos al mapa

const arcgisMap = document.querySelector("arcgis-map");

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(capaPunto);
  arcgisMap.map.add(capaPolilinea);
  arcgisMap.map.add(capaPoligono);
});

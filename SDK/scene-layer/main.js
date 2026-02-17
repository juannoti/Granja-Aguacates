// Importamos 

const Point = await $arcgis.import("@arcgis/core/geometry/Point.js")

// Añadimos puntos al mapa

// Geometría

const geometriaPunto = new Point({
latitude: -4,
longitude: 41.4
})

// Simbología

const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");

const simbologiaPunto = new SimpleMarkerSymbol({
  angle: 0,
  color: [36,139,198,1],
  outline: {
    cap: "round",
    color: [6,73,111,1],
    join: "round",
    miterLimit: 1,
    style: "short-dash-dot-dot",
    width: 1
  },
  path: "undefined",
  size: 16,
  style: "diamond",
  xoffset: 0,
  yoffset: 0
});

// Unimos geometría y simbología

const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");

const graficoPunto = new Graphic({
  geometry:geometriaPunto,
  symbol:simbologiaPunto
})

// Creo una capa gráfica 

const GraphicsLayer = await $arcgis.import("@arcgis/core/layers/GraphicsLayer.js");

const capaGrafica = new GraphicsLayer()

capaGrafica.add(graficoPunto)

// Accedemos al mapa

const arcgisMap = document.querySelector('arcgis-map')

arcgisMap.addEventListener('arcgisViewReadyChange', ()=>{
  arcgisMap.map.add(capaGrafica)
})
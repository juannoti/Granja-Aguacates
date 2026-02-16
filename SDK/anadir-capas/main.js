const Map = await $arcgis.import("@arcgis/core/Map.js");

const MapView = await $arcgis.import("@arcgis/core/views/MapView.js");

const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);

const miMapa = new Map({
  basemap: "topo-vector",
});

const vistaMapa = new MapView({
  container: "viewDiv",
  map: miMapa,
});

const capa = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer",
});

const capaPortalItem = new FeatureLayer({
  portalItem: {
    id: "68745a7fb7a348b6b0d722c8517790af",
  },
});

miMapa.add(capaPortalItem);

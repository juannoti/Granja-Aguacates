const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");

const arcgisMap = document.querySelector("arcgis-map");

// arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
//   console.log(arcgisMap.map.allLayers.items[0].title);
//   console.log(arcgisMap.map.allLayers.items[1].title);
//   console.log(arcgisMap.map.allLayers.items[2].title);
// });

arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
    const capas = arcgisMap.map.allLayers.items
    capas.forEach((capa) => {
    console.log(capa.title);
  });
});

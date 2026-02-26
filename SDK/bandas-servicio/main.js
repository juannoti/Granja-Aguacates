const ImageryTileLayer = await $arcgis.import(
  "@arcgis/core/layers/ImageryTileLayer.js",
);

const arcgisMap = document.querySelector("arcgis-map");
const arcgisSwipe = document.querySelector("arcgis-swipe");
const boton = document.querySelector("calcite-button");

const IncendioCanarias = new ImageryTileLayer({
  url: "https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
  bandIds: [3, 2, 0],
  effect: "brightness(5)  contrast(200%)",
});

const IncendioCanarias2 = new ImageryTileLayer({
  url: "https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
  bandIds: [11, 10, 1],
  effect: "brightness(5)  contrast(200%)",
});

const IncendioCanarias3 = new ImageryTileLayer({
  url: "https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
  bandIds: [8, 4, 3],
  effect: "brightness(5)  contrast(200%)",
});

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.addMany([IncendioCanarias, IncendioCanarias2]);

  arcgisSwipe.leadingLayers = [IncendioCanarias];
  arcgisSwipe.trailingLayers = [IncendioCanarias2];
});

boton.addEventListener("click", () => {
  arcgisMap.map.add(IncendioCanarias3);
  arcgisSwipe.leadingLayers = [IncendioCanarias];
  arcgisSwipe.trailingLayers = [IncendioCanarias3];
});

boton.addEventListener("click", () => {
  arcgisMap.map.add(IncendioCanarias3);
  arcgisSwipe.leadingLayers = [IncendioCanarias];
  arcgisSwipe.trailingLayers = [IncendioCanarias3];
});

const ImageryTileLayer = await $arcgis.import(
  "@arcgis/core/layers/ImageryTileLayer.js",
);
const IncendioCanarias = new ImageryTileLayer({
  url: "https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
});

const { bandArithmeticNDVI, colormap } = await $arcgis.import(
  "@arcgis/core/layers/support/rasterFunctionUtils.js",
);

const arcgisMap = document.querySelector("arcgis-map");

const ndvi = bandArithmeticNDVI({
  nirBandId: 7,
  redBandId: 3,
  scientificOutput: false,
});

const coloredNdvi = colormap({
  colorRampName: "NDVI3",
  raster: ndvi,
});

IncendioCanarias.rasterFunction = coloredNdvi;

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(IncendioCanarias);
});

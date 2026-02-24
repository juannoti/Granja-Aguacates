const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const PopupTemplate = await $arcgis.import("@arcgis/core/PopupTemplate.js");
const arcgisMap = document.querySelector("arcgis-map");
const popupComponent = document.querySelector("arcgis-popup");

const plantillaPopup = new PopupTemplate({
  title: "{Nombre}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "Direccion",
          label: "Dirección",
        },
        {
          fieldName: "Telefono",
          label: "Telefono",
        },
        {
          fieldName: "Municipio",
          label: "Municipio",
        },
      ],
    },
  ],
});
const hospitalesFl = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
  popupTemplate: plantillaPopup,
});

arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
  arcgisMap.map.add(hospitalesFl);
});

const SceneLayer = await $arcgis.import("@arcgis/core/layers/SceneLayer.js");

const SnowyWeather = await $arcgis.import("@arcgis/core/views/3d/environment/SnowyWeather.js");

const arcgisScene = document.querySelector("arcgis-scene");

arcgisScene.addEventListener(
  "arcgisViewReadyChange",
  (eventoViewReadyChange) => {
    const capa = new SceneLayer({
      portalItem: {
        id: "c444b24b184c4523a5dc96248bfea4e1",
      },
    });

    arcgisScene.map.add(capa);
    arcgisScene.view.environment.weather= new SnowyWeather()
  },
);

const boton = document.querySelector(".boton1");

boton.addEventListener("click", () => {
  arcgisScene.view.goTo({
    center: [-3.600001, 40.0325],
  });

  
});



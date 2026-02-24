require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/layers/ImageryLayer",
  "esri/widgets/Legend",
  "esri/widgets/LayerList",
], function (Map, MapView, FeatureLayer, ImageryLayer, Legend, LayerList) {
  // ---------- MAPA Y CAPAS ----------

  // Ejemplos: sustituye por tus URLs reales
  const sentinel = new ImageryLayer({
    url: "URL_DE_TU_SERVICIO_SENTINEL",
    title: "Imágenes Sentinel-2",
  });

  const plagas = new FeatureLayer({
    url: "URL_DE_TU_FEATURE_LAYER_PLAGAS",
    title: "Plagas y enfermedades",
  });

  const suelos = new FeatureLayer({
    url: "URL_DE_TU_CAPA_SUELOS",
    title: "Salinidad y calidad del suelo",
  });

  const meteo = new FeatureLayer({
    url: "URL_DE_TU_CAPA_METEO",
    title: "Predicciones meteorológicas",
  });

  const map = new Map({
    basemap: "satellite",
    layers: [sentinel, plagas, suelos, meteo],
  });

  const view = new MapView({
    container: "mapViewDiv",
    map: map,
    center: [-3.6, 40.4], // España
    zoom: 7,
  });

  view.when(() => {
    const legend = new Legend({ view });
    const layerList = new LayerList({ view });

    view.ui.add(legend, "bottom-left");
    view.ui.add(layerList, "top-right");
  });

  // ---------- NAVEGACIÓN TIPO EXPERIENCE BUILDER ----------

  const navItems = document.querySelectorAll(".nav-item");
  const pages = {
    dashboard: document.getElementById("page-dashboard"),
    analisis: document.getElementById("page-analisis"),
    tareas: document.getElementById("page-tareas"),
    modelo: document.getElementById("page-modelo"),
    ayuda: document.getElementById("page-ayuda"),
  };

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const page = item.getAttribute("data-page");

      // activar pestaña
      navItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      // mostrar página
      Object.keys(pages).forEach((key) => {
        pages[key].classList.remove("active");
      });
      pages[page].classList.add("active");

      // si volvemos al dashboard, aseguramos que el mapa se reajuste
      if (page === "dashboard") {
        setTimeout(() => {
          view.resize();
        }, 100);
      }
    });
  });
});

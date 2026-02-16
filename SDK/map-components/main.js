const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js",
);

const arcgisMap = document.querySelector('arcgis-map')

arcgisMap.addEventListener('arcgisViewReadyChange', (eventoViewReadyChange)=>{
    // El evento se ejecuta cuando se carga la vista del Mapa
    const hospitalesFl = new FeatureLayer({
        url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer",
    })

    arcgisMap.map.add(hospitalesFl)
})



// Apartado 1. Importaciones

const arcgisMap = document.querySelector("arcgis-map");

const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const UniqueValueRenderer = await $arcgis.import(
  "@arcgis/core/renderers/UniqueValueRenderer.js",
);

const PictureMarkerSymbol = await $arcgis.import(
  "@arcgis/core/symbols/PictureMarkerSymbol.js",
);

const popupComponent = document.querySelector("arcgis-popup");

const PopupTemplate = await $arcgis.import("@arcgis/core/PopupTemplate.js");

const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");

const WebStyleSymbol = await $arcgis.import(
  "@arcgis/core/symbols/WebStyleSymbol.js",
);

const GraphicsLayer = await $arcgis.import(
  "@arcgis/core/layers/GraphicsLayer.js",
);
const SimpleRenderer = await $arcgis.import(
  "@arcgis/core/renderers/SimpleRenderer.js",
);
const Polyline = await $arcgis.import("@arcgis/core/geometry/Polyline.js");

const SimpleLineSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleLineSymbol.js",
);

const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");

// Apartado 2. Simbología por valores únicos

const carrefour = new PictureMarkerSymbol({
  angle: 0,
  height: 18,
  url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Carrefour_Groupe.svg/1280px-Carrefour_Groupe.svg.png",
  width: 30,
  xoffset: 0,
  yoffset: 0,
});

const alcampo = new PictureMarkerSymbol({
  angle: 0,
  height: 30,
  url: "https://upload.wikimedia.org/wikipedia/it/archive/6/6e/20250904220843%21Alcampo_logo.png",
  width: 50,
  xoffset: 0,
  yoffset: 0,
});

const hipercor = new PictureMarkerSymbol({
  angle: 0,
  height: 20,
  url: "https://static.wikia.nocookie.net/althistory/images/a/a2/Hipercor.png/revision/latest?cb=20210227135015&path-prefix=es",
  width: 33,
  xoffset: 0,
  yoffset: 0,
});

const eleclerc = new PictureMarkerSymbol({
  angle: 0,
  height: 20,
  url: "https://beeimg.com/images/w01531234731.png",
  width: 20,
  xoffset: 0,
  yoffset: 0,
});

const costco = new PictureMarkerSymbol({
  angle: 0,
  height: 20,
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Costco_Wholesale_logo_2010-10-26.svg/1280px-Costco_Wholesale_logo_2010-10-26.svg.png",
  width: 40,
  xoffset: 0,
  yoffset: 0,
});

const rendererHipermercados = new UniqueValueRenderer({
  field: "ETIQUETA",

  uniqueValueInfos: [
    {
      value: "Carrefour",
      symbol: carrefour,
    },
    {
      value: "Alcampo",
      symbol: alcampo,
    },
    {
      value: "Hipercor",
      symbol: hipercor,
    },
    {
      value: "E-Leclerc",
      symbol: eleclerc,
    },
    {
      value: "Costco",
      symbol: costco,
    },
  ],
});
const hipermercadosFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Comercios_de_la_Comunidad_de_Madrid_WFL1/FeatureServer/3",
  renderer: rendererHipermercados,
  effect: "bloom(1, 0.5px, 0.1)", // Apartado 2a. Efecto florecer
  title: "Hipermercados de la Comunidad de Madrid",
});

// Apartado 3. Mercados con Popups

const plantillaPopupMercados = new PopupTemplate({
  title: "{BUSCA}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "DIRECCION",
          label: "Dirección",
        },
        {
          fieldName: "MUNICIPIO",
          label: "Municipio",
        },
      ],
    },
  ],
});

const mercadosSymbol = new WebStyleSymbol({
  name: "Grocery Store_Large_3",
  styleUrl:
    "https://www.arcgis.com/sharing/rest/content/items/37da62fcdb854f8e8305c79e8b5023dc/data",
});
const rendererMercados = new SimpleRenderer({
  symbol: mercadosSymbol,
});

const mercadosFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Comercios_de_la_Comunidad_de_Madrid_WFL1/FeatureServer/5",
  popupTemplate: plantillaPopupMercados,
  title: "Mercados de la Comunidad de Madrid",
  renderer: rendererMercados,
});

// Apartado 4. Consulta de Mercadillos dentro del término municipal de Madrid

const mercadillosFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Comercios_de_la_Comunidad_de_Madrid_WFL1/FeatureServer/4",
});

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  const mercadillosQuery = new Query({
    where: "MUNICIPIO = 'Madrid'",
    returnGeometry: true,
    outFields: ["*"],
  });

  const resultadoMercadillosQuery =
    mercadillosFL.queryFeatures(mercadillosQuery);

  resultadoMercadillosQuery.then((resultadoFeatureSet) => {
    const entidades = resultadoFeatureSet.features;

    const mercadillosSymbol = new WebStyleSymbol({
      name: "Shopping Center_POI-Large_3",
      styleUrl:
        "https://www.arcgis.com/sharing/rest/content/items/11e7b433c72a4cef90c8a428de131147/data",
    });

    const mercadillosMadrid = entidades.map((grafico) => {
      grafico.symbol = mercadillosSymbol;
      return grafico;
    });

    const capaGraficaMercadillos = new GraphicsLayer({
      title: "Mercadillos del término municipal de Madrid",
    });
    // Añado todo de golpe para controlar el orden de las capas
    capaGraficaMercadillos.addMany(mercadillosMadrid);
    arcgisMap.map.add(capaGraficaMercadillos);
    arcgisMap.map.add(mercadosFL);
    arcgisMap.map.add(hipermercadosFL);
  });

  // Apartado 6. Funcionalidad del mapa: Mercados a 2km del click

  const rutasMercadosGL = new GraphicsLayer({
    title: "Mercados a 2km",
    effect: "bloom(1, 0.5px, 0.1)",
  });
  arcgisMap.map.add(rutasMercadosGL);

  arcgisMap.view.on("click", (event) => {
    const click = event.mapPoint;
    rutasMercadosGL.removeAll();

    const mercadosQuery = new Query({
      geometry: click,
      distance: 2,
      units: "kilometers",
      spatialRelationship: "intersects",
      returnGeometry: true,
      outFields: ["*"],
    });

    const resultadoMercadosQuery = mercadosFL.queryFeatures(mercadosQuery);

    resultadoMercadosQuery.then((resultado) => {
      const rutas = resultado.features.map((mercado) => {
        const polyline = new Polyline({
          paths: [
            [
              [click.x, click.y],
              [mercado.geometry.x, mercado.geometry.y],
            ],
          ],
          spatialReference: click.spatialReference,
        });

        const lineSymbol = new SimpleLineSymbol({
          color: [255, 95, 0],
          width: 2,
        });

        return new Graphic({
          geometry: polyline,
          symbol: lineSymbol,
        });
      });

      rutasMercadosGL.addMany(rutas);
    });
  });
});

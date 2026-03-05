import "./AplicacionArcGIS.css";
import CardEjemplo from "./CardEjemplo/CardEjemplo";
import { useState } from "react";

interface AplicacionArcGISProps {
  logo: string;
  titulo: "Experience Builder" | "Story Maps";
  descripcion: string;
  enlace: string;
}

function AplicacionArcGIS(props: AplicacionArcGISProps) {
  let ejemplosRenderizados;

  // Funcion de estado
  let [estadoBoton, setEstadoBoton] = useState(false);

  if (props.titulo === "Experience Builder" && estadoBoton) {
    ejemplosRenderizados = (
      <>
        <CardEjemplo
          imagen={
            "https://datos.vigo.org/wp-content/uploads/2023/02/1659696299986-2048x826.jpg"
          }
          titulo={"Gemelo Digital de Vigo"}
          descripcion={
            "Gemelo digital de la ciudad de Vigo donde puedes encontrar servicios de todo tipo relacionado con el urbanismo de Vigo"
          }
          enlace={
            "https://datos.vigo.org/es/xemelgo-dixital-de-vigo/?doing_wp_cron=1772638080.1303420066833496093750"
          }
        ></CardEjemplo>
        <CardEjemplo
          imagen={
            "https://www.esri.es/content/dam/distributor-share/esri-es/casos-exito/2025/junio/img-cs-segovia.png"
          }
          titulo={"Gemelo Digital de Segovia"}
          descripcion={
            "Gemelo digital de la ciudad de Segovia donde puedes encontrar servicios de todo tipo relacionado con el urbanismo de Segovia"
          }
          enlace={"https://gemelo-digital-aytosegovia.hub.arcgis.com/"}
        ></CardEjemplo>
        <CardEjemplo
          imagen={
            "https://www.esri.es/content/distributor-sites/esri-es/es-es/descubre-los-gis/casos-de-exito/administracion-/2023/cs-aytoarganda-smartcity/_jcr_content/par/grid_container/gc-par/columnsystem/wpar/image.img.jpg/1693392204331.jpg"
          }
          titulo={"Gemelo Digital de Arganda del Rey"}
          descripcion={
            "Gemelo digital de la ciudad de Arganda del Rey donde puedes encontrar servicios de todo tipo relacionado con el urbanismo de Arganda"
          }
          enlace={
            "https://www.esri.es/es-es/descubre-los-gis/casos-de-exito/administracion-/2023/cs-aytoarganda-smartcity"
          }
        ></CardEjemplo>
      </>
    );
  }
  if (props.titulo === "Story Maps" && estadoBoton) {
    ejemplosRenderizados = (
      <>
        <CardEjemplo
          imagen={
            "https://www.esri.com/content/dam/esrisites/en-us/arcgis/products/storymaps-2023/overview-update/okavango-explore.jpg"
          }
          titulo={"Exploración de Okavango"}
          descripcion={
            "Descubra cómo The National Geographic Okavango Wilderness Project, en colaboración con The Wild Bird Trust, utiliza las imágenes de 360º de EarthViews para cartografiar las vías fluviales y conservar el Okavango."
          }
          enlace={
            "https://storymaps.arcgis.com/stories/df468704609b472f846330f84b42334b"
          }
        ></CardEjemplo>
        <CardEjemplo
          imagen={
            "https://www.esri.com/content/dam/esrisites/en-us/arcgis/products/storymaps-2023/overview-update/urban-change.jpg"
          }
          titulo={"Cambio urbano 1992-2020"}
          descripcion={
            "Los límites de las ciudades se amplían en Estados Unidos. A medida que los límites de nuestras ciudades se expanden para dar cabida a una población creciente y a sus actividades económicas, se va ejerciendo presión sobre el entorno circundante."
          }
          enlace={
            "https://storymaps.arcgis.com/briefings/3a77266dfb2b4f468e158b15ab70a309"
          }
        ></CardEjemplo>
        <CardEjemplo
          imagen={
            "https://www.esri.com/content/dam/esrisites/en-us/arcgis/products/storymaps-2023/overview-update/community-led-conservation.jpg"
          }
          titulo={"Conservación comunitaria"}
          descripcion={
            "Una colección de historias creadas por The Nature Conservancy demuestran cómo, a pesar de cubrir menos del 1 por ciento de la superficie de la Tierra, los ecosistemas de agua dulce contienen el 10 por ciento de las especies conocidas del mundo y son el sustento de miles de millones de personas."
          }
          enlace={"https://arcg.is/1SbWq5"}
        ></CardEjemplo>
      </>
    );
  }

  function buttonHandler(_eventoClick: any) {
    if (estadoBoton) {
      setEstadoBoton(false);
    }

    if (estadoBoton == false) {
      setEstadoBoton(true);
    }
  }

  return (
    <div className="aplicacion-arcgis">
      <div className="informacion-aplicacion">
        <div className="logo">
          <img src={props.logo} alt="Logo" />
        </div>
        <div className="texto-aplicacion">
          <h1>{props.titulo}</h1>
          <h2>{props.descripcion}</h2>
          <a
            href="https://www.linkedin.com/in/juan-notivoli-zamora-572b48232"
            target="_blank"
          >
            {props.enlace}
          </a>
          <button onClick={buttonHandler}>Ver Ejemplos</button>
        </div>
      </div>

      <div className="ejemplos-aplicacion">{ejemplosRenderizados}</div>
    </div>
  );
}

export default AplicacionArcGIS;

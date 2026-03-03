import "./AplicacionArcGIS.css";

interface AplicacionArcGISProps {
  logo: string;
  titulo: string;
  descripcion: string;
  enlace: string;
}

function AplicacionArcGIS(props: AplicacionArcGISProps) {
  return (
    <div className="aplicacion-arcgis">
      <div className="logo">
        <img src={props.logo} alt="Logo" />
      </div>
      <div className="aplicacion1">
        <h1>{props.titulo}</h1>
        <h2>{props.descripcion}</h2>
        <a
          href="https://www.linkedin.com/in/juan-notivoli-zamora-572b48232"
          target="_blank"
        >
          {props.enlace}
        </a>
      </div>
    </div>
  );
}

export default AplicacionArcGIS;

import "./App.css";
import AplicacionArcGIS from "./components/AplicacionArcGIS/AplicacionArcGIS";

function App() {
  return (
    <>
      <AplicacionArcGIS
        logo={
          "https://th.bing.com/th/id/R.6d756c5ba615c2f4d5ce1e7e458248b7?rik=YooOYNzFi9Qd5w&pid=ImgRaw&r=0"
        }
        titulo={"Experience Builder"}
        descripcion={"Descripción de Experience Builder"}
        enlace={"Enlace de la App"}
      ></AplicacionArcGIS>

      <AplicacionArcGIS
        logo={
          "https://www.esriuk.com/content/dam/esrisites/en-us/common/icons/product-logos/StoryMaps.png"
        }
        titulo={"Story Maps"}
        descripcion={"Descripción de Story Maps"}
        enlace={"Enlace de la App"}
      ></AplicacionArcGIS>
    </>
  );
}

export default App;

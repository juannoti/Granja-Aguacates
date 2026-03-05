import "./CardEjemplo.css";

interface CardEjemploProps {
  imagen: string;
  titulo: string;
  descripcion: string;
  enlace: string;
}

function CardEjemplo(props: CardEjemploProps) {
  return (
    <div className="card-ejemplo">
      <img className="imagen" src={props.imagen} alt="Imagen" />
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>
      <a href={props.enlace} target="_blank">
        Enlace del Ejemplo
      </a>
    </div>
  );
}

export default CardEjemplo;

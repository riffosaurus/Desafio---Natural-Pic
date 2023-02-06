//importamos el contexto
import Context from "../context/Context";
//importamos el hook useContext
import { useContext } from "react";



export default function Favoritos() {
  //consumimos el contexto
  const { favoritos } = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       {/* recorremos el array de favoritos y mostramos los datos en el navegador */}
        {favoritos.map((photo) => {
          return (
            <div className="foto" key={photo.id}
            style={{ backgroundImage:`url(${photo.src.small})`}}
            >
     
    </div>
          );
        })}
      </div>
    </div>
  );
}

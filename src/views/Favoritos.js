//importamos el contexto
import Context from "../context/Context";
//importamos el hook useContext
import { useContext } from "react";



export default function Favoritos() {
  //consumimos el contexto
  const { favoritos, setFavoritos } = useContext(Context);

  //funcion para eliminar la foto de favoritos
const deleteFavoritos = (id) => {
  //filtramos el array de favoritos para obtener el objeto que tenga el id que se le pasa a la función
  const foto = favoritos.filter((photo) => photo.id === id);
  //cambiamos el estado de liked a false
  foto[0].liked = false;
  //filtramos el array de favoritos para obtener todos los objetos que no tengan el id que se le pasa a la función
  const newFavoritos = favoritos.filter((photo) => photo.id !== id);
  //actualizamos el estado de favoritos
  setFavoritos(newFavoritos);

};

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       {/* recorremos el array de favoritos y mostramos los datos en el navegador */}
        {favoritos.map((photo) => {
          return (
            <div className="foto" key={photo.id}
            style={{ backgroundImage:`url(${photo.src.small})`}}
            onClick={() => deleteFavoritos(photo.id)}
            >
     
    </div>
          );
        })}
      </div>
    </div>
  );
}

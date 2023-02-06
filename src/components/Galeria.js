import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useState, useEffect } from "react";
//importamos el contexto
import Context from "../context/Context";
//importamos el hook useContext
import { useContext } from "react";

export default function Home() {

  //consumimos el contexto
  const { data, favoritos, setFavoritos } = useContext(Context);
  //console.log para mostrar el id del primero objeto de data, debido a typescript debemos usar el operador de opcional ? para que no marque error,
  //con ? preguntamos si existe data.photos[0] y si existe, entonces ejecuta el código que sigue
console.log(data.photos?.[0].id);

//funcion para agregar foto a favoritos
const addFavoritos = (id) => {
  //condicion para revisar que la foto no este en favoritos. some() revisa si existe por lo menos un elemento en el array que cumpla con la condición
  if(favoritos.some((photo) => photo.id === id)){
    return;
  }
  else {
  //filtramos el array de data para obtener el objeto que tenga el id que se le pasa a la función
  const foto = data.photos?.filter((photo) => photo.id === id);
  //agregamos el objeto a favoritos
  setFavoritos([...favoritos, ...foto]);
  //cambiamos el estado de liked a true
  foto[0].liked = true;
  //mostramos en consola el array de favoritos
  console.log(favoritos)
} 
};

  return (
    <div className="galeria grid-columns-5 p-3">

      {/* recorremos el array de data y mostramos los datos en el navegador */}
      {data.photos?.map((photo) => {
        return (
          <div className="foto" key={photo.id}
          style={{ backgroundImage:`url(${photo.src.small})`}}
          //onClick para que al hacer click en la foto se ejecute la función
          onClick={() => addFavoritos(photo.id)}
          >
            <Heart filled={photo.liked}/>
          </div>
        );
      }
        )
      }
   {/*    <img src={data.photos[0].src.small} alt="" /> */}
    </div>
  );
}

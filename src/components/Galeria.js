import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useState, useEffect } from "react";
//importamos el contexto
import Context from "../context/Context";
//importamos el hook useContext
import { useContext } from "react";

export default function Home() {

  //consumimos el contexto
  const { data, setData } = useContext(Context);
  //console.log para mostrar el id del primero objeto de data, debido a typescript debemos usar el operador de opcional ? para que no marque error,
  //con ? preguntamos si existe data.photos[0] y si existe, entonces ejecuta el código que sigue
console.log(data.photos?.[0].id);

  return (
    <div className="galeria grid-columns-5 p-3">

      {/* recorremos el array de data y mostramos los datos en el navegador */}
      {data.photos?.map((photo) => {
        return (
          <div className="galeria__item" key={photo.id}>
            <img src={photo.src.small} alt="" />
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

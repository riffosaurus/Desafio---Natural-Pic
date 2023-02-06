import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Context from "./context/Context";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const endpoint = "/fotos.json";

    //useState para guardar los datos que se obtengan de la API en un array dentro de un estado global
    const [data, setData] = useState([]);

    //useState para tener un estado donde guardar las fotos favoritas
    const [favoritos, setFavoritos] = useState([]);


/* //función para obtener los datos de la API
const fetchFotos = () => {
fetch(endpoint)
//despues del fetch se puede usar el método then para obtener la respuesta de la API en formato json
.then(response => {
  return response.json();
  //despues de tener los datos en formato json se puede usar el método then para guardar los datos en el estado global
}).then(data => {
  setData(data);
  //si hay un error se puede usar el método catch para mostrarlo en consola
}).catch(error => {
  console.log(error);
});

} */

const fetchFotos = async () => {
  const response = await fetch(endpoint);
  const datafotos = await response.json();
 //filtramos los datos con un mape, manteniedo de photos: id, src, y liked
  const fotosFiltradas = {
    photos: datafotos.photos.map((photo) => { 
      return {
        id: photo.id,
        src: photo.src,
        liked: false,
      };
    }),
    
};
  setData(fotosFiltradas);
 
};


console.log(data);


  //useEffect para que se ejecute una sola vez al cargar la página
  useEffect(() => {
    fetchFotos();
  }, []);



//creamos un objeto donde guardar el estado global
const context = { data, setData, favoritos, setFavoritos };


  return (
    <div className="App">
      {/* entregamos el objeto con los datos del estado global */}
      <Context.Provider value={context}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useState, useEffect } from "react";

export default function Home() {


useEffect(() => {
    fetchFotos();
  }, []);

  const [data, setData] = useState([]);

const fetchFotos = () => {
  fetch('/fotos.json')
  .then(response => {
    return response.json();
  }).then(data => {
    setData(data);
  }).catch(error => {
    console.log(error);
  });

}
   
    console.log(data);
  ;

  return (
    <div className="galeria grid-columns-5 p-3">

    </div>
  );
}

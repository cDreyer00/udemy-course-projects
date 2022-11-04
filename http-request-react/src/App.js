import React, { useEffect, useState } from "react";
import "./style.css"
import REACTLOGO from "./logo512.png"
///https://sujeitoprogramador.com/rn-api/?api=posts



function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((apiResult) => apiResult.json())
        .then((apiJson) => {
          setNutri(apiJson)
        })
    }
    loadApi()
  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="title">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} />
            <p className="subtitle">
              {item.subtitulo}
            </p>
            <a className="button">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;

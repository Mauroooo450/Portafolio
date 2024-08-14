import React, { useState } from 'react'

export const PrimerComponente = () => {
  //let nombre = "Mauro";
  let nombres = [
    "Mauro",
    "Lolo",
    "Lucas",
    "Fede"
  ];

  const[nombre, setNombre] = useState("Juan");

  const CambiarNombre = (NuevoNombre) => {
    setNombre(NuevoNombre);

  }
  return (
    <div>
      <h2>Holaaa</h2>
      <p>HOla mundo</p>
      <p>Mi nombre es {nombre}</p>
      <button onClick={e => CambiarNombre("Mauro Pistoni")}>Cambiar Nombre

      </button>
    
      <ul>
        {
          nombres.map(nombres => {
            return (<li>
              {nombres}
            </li>)
          })
        }
      </ul>
    </div>

  )
}

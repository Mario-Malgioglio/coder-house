import React, { useState, useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function AgregarAlCarrito() {
  const [unidades, setUnidades] = useState(0);
  const [mensaje, setMensaje] = useState("producto agragado al carrito");

  return (
    <>
      <div>
        <h6>
          Cantidad:<label> {unidades} </label>
        </h6>
        <br></br>
        <label> </label>
        <button
          className="btn-info m-1"
          onClick={
            unidades > 0
              ? () => setUnidades(unidades - 1)
              : console.log("debe mayor que cero")
          }
        >
          -
        </button>
        <button
          className="btn-info m-1"
          onClick={() => setUnidades(unidades + 1)}
        >
          +
        </button>
        <button
          className="btn-danger m-1"
          onClick={
            unidades > 0 ? () => alert(mensaje) : console.log("debe > 0")
          }
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
}

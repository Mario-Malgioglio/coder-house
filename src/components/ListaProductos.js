import React from "react";
import { Button, Card } from "react-bootstrap";
import Producto from "./Producto";
//import OtroProducto from "./OtroProducto";
export default function ListaProductos() {
  return (
    <>
      <h3>Listado de productos</h3>
      <div className="mr-n5">
        <a>
          <Producto />
        </a>
      </div>
    </>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Carrito from "./Carrito";
import ListaProductos from "./ListaProductos";

export default function NavBar() {
 
 
  return (
    <Router>
      <Link to="/">
        <h3>Coder-House</h3>
      </Link>

      <ul className="nav nav-fill ">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/productos">Productos </Link>
        </li>
      </ul>

      <div>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/productos">
            <ListaProductos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2></h2>
    </div>
  );
}

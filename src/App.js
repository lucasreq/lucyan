import React from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./img/logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Default from "./pages/Default";
import Modal from './components/Modal';
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={ProductList} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;

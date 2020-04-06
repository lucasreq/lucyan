import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
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
import Login from "./auth/Login";
import User from "./auth/UserPage"
import SignUp from "./auth/SignUp"
import { AuthProvider } from "./auth/Auth"
import PrivateRoute from "./auth/PrivateRoute"
import Pay from "./pages/pay"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <AuthProvider>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/products" component={ProductList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/user" component={User} />
          <Route path="/pay" component={Pay} />
          {/*<Route component={Default} />*/}
        </AuthProvider>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
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
import BagForm from "./pages/BagForm";
import {env} from "./config"
import AdminRoute from "./auth/AdminRoute"
import AdminPage from "./auth/AdminPage";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/products" component={ProductList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/user" component={User} />
          <PrivateRoute path="/Custom" component={BagForm} env={env}/>
          <AdminRoute path="/admin" component={AdminPage}/>
          <Route component={Default} />
        </Switch>
      </AuthProvider>
      <Modal />
    </React.Fragment>
  );
}

export default App;

import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {Link} from "react-router-dom"
import app from "../firebase";
import { AuthContext } from "./Auth.js";
import "../Login.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Login col-md-6">
      <h1 style={{textAlign: "center"}}>Log in</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>
            Email
          </label>
          <input name="email" type="email" placeholder="Email" className="form-control"/>
        </div>
        <div className="form-group">
          <label>
            Password
          </label>  
          <input name="password" type="password" placeholder="Password" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
        <Link to="/signup">
          <button className="btn btn-success" style={{marginLeft:"25px"}}>
            <span>Register</span>
          </button>
        </Link>
      </form>
      
    </div>
  );
};

export default withRouter(Login);


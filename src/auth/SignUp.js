import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="Login col-md-6">
    <h1 style={{textAlign: "center"}}>Sign up</h1>
    <form onSubmit={handleSignUp}>
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
      <button type="submit" className="btn btn-success">Sign up</button>
    </form>
    
  </div>
  );
};

export default withRouter(SignUp);
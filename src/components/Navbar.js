import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import styled from "styled-components";
import {ButtonContainer} from './button'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            width="30"
            height="40"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/Products" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="nav-item ml-auto">
              <i className="fas fa-cart-plus" />
            </span>
            
          </ButtonContainer>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/user" className="nav-link">
              Profile
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
  color:var(--mainWhite) !important;
  font-size:1.3rem;
  text-transform:capitalize !important;
}
position:fixed;
  top:0;
  right:0;
  left:0;
  z-index:30;
`
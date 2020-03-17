import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import { ButtonContainer } from "./button";

export default class Home extends Component {
  render() {
    return (
      <ContentHome className="col-9 mx-auto col-md-6 col-lg-auto my-auto">
        <div className="jumbotron">
          <h1 className="display-4 text-center">Lucyan</h1>
          <p className="lead text-center">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p className="text-center">
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <hr />
          <div className="card-group">
            <ProductWrapper className="card">
                <img src="img/plage.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Sac de plage</h5>
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </ProductWrapper>
            <ProductWrapper className="card">
                <img src="img/ville.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Sac de ville</h5>
                    <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                    </p>
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </ProductWrapper>
            <ProductWrapper className="card">
                    <img src="img/pochette.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pochette soirée</h5>
                        <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This card has even longer
                        content than the first to show that equal height action.
                        </p>
                        <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
            </ProductWrapper>
            
          </div>
        </div>

        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">test</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">€</span>
            test
          </h5>
        </div>
      </ContentHome>
    );
  }
}

Home.propTypes = {
  home: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
const ContentHome = styled.div`
.card {
    border-color: transparent;
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    background: rgba(247, 247, 247);
  }
`
const ProductWrapper = styled.div`
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.3s linear;
    opacity: 0.5;
    
  }
  &:hover {
      .card-img-top{
        opacity: 1;
      }
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
  }
`;

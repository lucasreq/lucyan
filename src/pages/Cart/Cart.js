import React, { Component } from 'react'
import Title from '../../components/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context'
import CartList from './CartList';
import CartItem from './CartItem';
import { Button } from 'react-bootstrap';
import { ButtonContainer } from '../../components/button';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if(cart.length>0){
              return(
                <React.Fragment>
                  <Title name="your" title="cart"/>
                  <CartColumns />
                  <CartList value={value}/>
                  <Link to="/pay">
                    <ButtonContainer>
                      <span>Pay</span>
                    </ButtonContainer>
                  </Link>
                  
                </React.Fragment>
              );
            }
            else {
              return (
                <EmptyCart />
              )
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}

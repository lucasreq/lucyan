import React, { Component } from 'react'
import Title from '../../components/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals'
import viewCart from '../../functions'

export default function Cart() {

    let cart = viewCart()
    
    return (
      <section>
        {value => {
          const {cart} = value;
          if(cart.length>0){
            return(
             <div>

             </div>
            );
          }
          else {
            return (
              <EmptyCart />
            )
          }
        }}
      </section>
    )
  }

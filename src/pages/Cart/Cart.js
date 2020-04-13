import React, { Component } from 'react'
import Title from '../../components/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals'
import viewCart from '../../functions'


let cart = viewCart()


export default function Cart() {

    return (
      <div>
          {cart.map(spell =>{
            console.log(spell)
          })}
      </div>
    )}
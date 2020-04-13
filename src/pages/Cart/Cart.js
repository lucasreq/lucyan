import React from 'react'
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
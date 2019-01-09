import React from 'react'

const CartPresentational = props => {
  const cart = props.cart
  if (cart.length === 0) return <div>Cart is Empty</div>
  return <div>Populated Cart goes here</div>
}

export default CartPresentational

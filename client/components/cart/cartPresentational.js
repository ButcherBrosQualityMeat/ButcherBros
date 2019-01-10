import React from 'react'

const CartPresentational = props => {
  const cart = props.cart
  const contents = cart.contents
  if (contents === 0) return <div>Cart is Empty</div>
  return (
    <div>{contents.map(item => <div key={item.productId}>{item}</div>)}</div>
  )
}

export default CartPresentational

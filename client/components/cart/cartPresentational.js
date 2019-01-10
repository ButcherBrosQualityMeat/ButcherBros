import React from 'react'

const CartPresentational = props => {
  const {cart, products} = props
  const contents = cart.contents
  if (contents.length === 0 || products.length === 0)
    return (
      <div className="container">
        <div className="row">Cart is Empty</div>
      </div>
    )
  return (
    <div className="container">
      <div className="row">
        {contents.map(item => {
          const product = products.find(e => e.id === item.productId)
          return (
            <p key={product.id}>
              Quantity: {item.quantity}, Product Name: {product.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default CartPresentational

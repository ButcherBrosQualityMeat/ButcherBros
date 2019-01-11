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
        <table className="table">
          <tr>
            <th scope="col">Quantity</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
          {contents.map(item => {
            const product = products.find(e => e.id === item.productId)
            return (
              <tr key={product.id}>
                <td>{item.quantity}</td>
                <td>{product.name}</td>
                <td>{product.price * item.quantity}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default CartPresentational

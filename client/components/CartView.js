import React from 'react'

const CartView = props => {
  const {products, contents, totalPrice} = props
  if (contents.length === 0 || products.length === 0)
    return (
      <div className="container">
        <div className="row">Cart is Empty</div>
      </div>
    )
  return (
    <table className="table">
      <tbody>
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
              <td>${product.price * item.quantity / 100}</td>
            </tr>
          )
        })}
        <tr>
          <td />
          <td>
            <b>Total</b>
          </td>
          <td>
            <b>${totalPrice / 100}</b>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default CartView

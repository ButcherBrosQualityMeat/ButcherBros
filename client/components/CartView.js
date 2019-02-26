import React from 'react'
import {Link} from 'react-router-dom'

/*
A functional component that takes in the array of all products,
contents with which to populate the cart/list of items purchased,
and the total price of everything in the cart/purchased
*/

const CartView = props => {
  const {products, contents, totalPrice} = props
  if (contents.length === 0 || products.length === 0)
    return (
      <div className="container">
        <div className="row">Cart is Empty</div>
      </div>
    )
  return (
    <table width="60%" className="table">
      <tbody>
        <tr>
          <th scope="col">Quantity</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th className="text-right" scope="col">
            Image
          </th>
        </tr>
        {/* map over all contents of the cart */}
        {contents.map(item => {
          const product = products.find(e => e.id === item.productId)
          return (
            <tr key={product.id}>
              <td>{item.quantity}</td>
              <td>{product.name}</td>
              <td>${product.price * item.quantity / 100}</td>
              <td className="p-3">
                <Link to={`/products/${product.id}`}>
                  <img
                    className="rounded float-right"
                    height="50px"
                    width="50px"
                    src={product.imageUrl}
                  />
                </Link>
              </td>
            </tr>
          )
        })}
        <tr>
          <td />
          <td>
            <b className="text-right">Total</b>
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

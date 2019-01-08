import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const HomePage = props => {
  //const { products } = props;
  return (
    <div>
      <h1>Butcher Bros</h1>
      <hr />

      <div>
        <h3>Categories</h3>
        <ul>
          <li>Beef</li>
          <li>Pork</li>
          <li>Chicken</li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage

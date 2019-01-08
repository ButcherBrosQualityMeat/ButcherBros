import React from 'react'
import {connect} from 'react-redux'

const CategoryView = props => {
  const {category} = props
  return (
    <div>
      <h1>Butcher Bros Premium {category.name}...</h1>
      <p>{category.description}description placeholder</p>
      <img src={category.imageUrl} />
      <br />
      <h2>{category.name} selection...</h2>
      {category.products.map(product => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.imageUrl} />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const HomePage = props => {
  //const { products } = props;
  return (
    <div>
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <h5 className="hero-header">Butcher Bros</h5>
              <p className="hero-sub-header">
                The Central Coasts Finest Selection Of Premium Cuts
              </p>
              <p>
                <a
                  href="/products"
                  className="btn btn-danger btn-large hero-button"
                >
                  View Selection »
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

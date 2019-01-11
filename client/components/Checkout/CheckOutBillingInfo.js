import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const CheckoutBillingInfo = props => {
  return (
    <div className="container-fluid bg-light py-3">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h3 className="text-center mb-4">Billing Info</h3>
            <fieldset>
              <div className="form-group has-error">
                <input
                  className="form-control input-lg"
                  placeholder="Name on Card"
                  name="nameOnCard"
                  type="text"
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="Card Number"
                  name="cardNumber"
                  type="1111-2222-3333-4444"
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="Expiration Month"
                  name="expirationMonth"
                  type="text"
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="Expiration Year"
                  name="expirationYear"
                  type="number"
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="CVV"
                  name="cvv"
                  type="text"
                />
              </div>
              <input
                className="btn btn-lg btn-dark btn-block"
                value="Review Cart →"
                type="submit"
              />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(CheckoutBillingInfo)

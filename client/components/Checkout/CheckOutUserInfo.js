import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const CheckoutUserInfo = props => {
  return (
    <div className="container-fluid bg-light py-3">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h3 className="text-center mb-4">User Info</h3>
            <fieldset>
              <div className="form-group has-error">
                <input
                  className="form-control input-lg"
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="Email"
                  name="email"
                  type="email"
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="Mailing Address"
                  name="mailingAddress"
                  type="address"
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="City"
                  name="city"
                  type="city"
                />
              </div>
              <div className="form-group">
                <select className="form-control input-lg">
                  <option selecterd="">State</option>
                  <option selecterd="">Alabama</option>
                  <option selecterd="">Alaska</option>
                  <option selecterd="">Arizona</option>
                  <option selecterd="">Arkansas</option>
                  <option selecterd="">California</option>
                  <option selecterd="">Colorado</option>
                  <option selecterd="">Connecticut</option>
                  <option selecterd="">Delaware</option>
                  <option selecterd="">Florida</option>
                  <option selecterd="">Georgia</option>
                  <option selecterd="">Hawaii</option>
                  <option selecterd="">Idaho</option>
                  <option selecterd="">Illinois</option>
                  <option selecterd="">Indiana</option>
                  <option selecterd="">Iowa</option>
                  <option selecterd="">Kansas</option>
                  <option selecterd="">Kentucky</option>
                  <option selecterd="">Louisiana</option>
                  <option selecterd="">Maine</option>
                  <option selecterd="">Maryland</option>
                  <option selecterd="">Massachusetts</option>
                  <option selecterd="">Michigan</option>
                  <option selecterd="">Minnesota</option>
                  <option selecterd="">Mississippi</option>
                  <option selecterd="">Missouri</option>
                  <option selecterd="">Montana</option>
                  <option selecterd="">Nebraska</option>
                  <option selecterd="">Nevada</option>
                  <option selecterd="">New Hampshire</option>
                  <option selecterd="">New Jersey</option>
                  <option selecterd="">New Mexico</option>
                  <option selecterd="">New York</option>
                  <option selecterd="">North Carolina</option>
                  <option selecterd="">North Dakota</option>
                  <option selecterd="">Ohio</option>
                  <option selecterd="">Oklahoma</option>
                  <option selecterd="">Oregon</option>
                  <option selecterd="">Pennsylvania</option>
                  <option selecterd="">Rhode Island</option>
                  <option selecterd="">South Carolina</option>
                  <option selecterd="">South Dakota</option>
                  <option selecterd="">Tennessee</option>
                  <option selecterd="">Texas</option>
                  <option selecterd="">Utah</option>
                  <option selecterd="">Vermont</option>
                  <option selecterd="">Virginia</option>
                  <option selecterd="">Washington</option>
                  <option selecterd="">West Virginia</option>
                  <option selecterd="">Wisconsin</option>
                  <option selecterd="">Wyoming</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  className="form-control input-lg"
                  placeholder="Zip Code"
                  name="zipCode"
                  type="zip"
                />
              </div>
              <input
                className="btn btn-lg btn-dark btn-block"
                value="Billing Info →"
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

export default connect(mapStateToProps)(CheckoutUserInfo)

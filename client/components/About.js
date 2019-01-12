import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
//leaving in header and footer for future use
const About = () => {
  return (
    <div className="card text-center">
      <div className="card-header" />
      <div className="card-body">
        <h5 className="card-title">A Little Bit About Us...</h5>
        <p className="card-text">
          We are a full-service, third-generation family owned and operated
          butcher shop in Sparks, Nevada. We offer quality products at
          competitive pricing. Fresh cuts of USDA Choice quality beef, marinated
          tri-tip, stuffed pork chops, country bacon, fresh smoked ham, cream
          cheese-filled bacon-wrapped jalapeno poppers, korean short ribs and
          more. We have it all … choice quality, great selection and outstanding
          customer service! Oh, and one more thing: “If we don’t have it, we can
          get it!!” We have resources all over the U.S. that will help us find
          whatever it is you’re looking for!
        </p>
        <Link className="btn btn-dark btn-lg" to="/products">
          View Selection &raquo;
        </Link>
      </div>
      <div className="card-footer text-muted" />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(About)

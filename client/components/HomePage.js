import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const HomePage = props => {
  const {categories, products} = props

  return categories.length ? (
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
      <div className="container text-center">
        <div>
          <h2>About Us</h2>
          <p>
            Building a website is, in many ways, an exercise of willpower. It’s
            tempting to get distracted by the bells and whistles of the design
            process, and forget all about creating compelling content. It's that
            compelling content that's crucial to making inbound marketing work
            for your business. So how do you balance your remarkable content
            creation with your web design needs? It all starts with the "About
            Us" page. For a remarkable about page, all you need to do is figure
            out your company's unique identity, and then share it with the
            world. Easy, right? Of course not. Your "About Us" page is one of
            the most important pages on your website, and it needs to be well
            crafted. This profile also happens to be one of the most commonly
            overlooked pages, which is why you should make it stand out.
          </p>
        </div>
        <div className="conatiner">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={categories[0].imageUrl}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={categories[1].imageUrl}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={categories[2].imageUrl}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.product.allCategories,
    products: state.product.allProducts
  }
}

export default connect(mapStateToProps)(HomePage)

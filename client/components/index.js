/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as HomePage} from './HomePage'
export {default as SinglePageView} from './SinglePageView'
export {default as About} from './About'
export {default as Footer} from './footer'
export {default as Cart} from './Cart'
export {default as AllProducts} from './AllProducts'
export {default as SingleCategory} from './SingleCategory'
export {default as Checkout} from './Checkout/Checkout'
export {default as CheckoutForm} from './CheckoutForm'
export {Login, Signup} from './auth-form'

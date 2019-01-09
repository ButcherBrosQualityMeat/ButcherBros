import axios from 'axios'

// Initial State
const initialState = {
  allProducts: [],
  allCategories: [],
  selectedProduct: {},
  selectedCategory: {}
}

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
const GET_SINGLE_CATEGORY = 'GET_SINGLE_CATEGORY'

// Action Creators
const getAllProducts = products => {
  return {
    type: GET_ALL_PRODUCTS,
    products
  }
}

const getSingleProduct = product => {
  return {
    type: GET_SINGLE_PRODUCT,
    product
  }
}

const getAllCategories = categories => {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}

const getSingleCategory = category => {
  return {
    type: GET_SINGLE_CATEGORY,
    category
  }
}

// Thunk Creators

export const fetchAllProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/products')
      const products = response.data
      dispatch(getAllProducts(products))
    } catch (err) {
      console.log(err)
    }
  }
}
//call fetchAllProducts where rendering, make a request to our server ('/api/products')
//that request is going to return an object with a .data, which equals what you are requesting
//then we're dsipatching getAllProducts with products as an arguement. Products contains the action.products payload
//that we are adding to state

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, allProducts: action.products}
    case GET_SINGLE_PRODUCT:
      return {...state, selectedProduct: action.product}
    case GET_ALL_CATEGORIES:
      return {...state, allCategories: action.categories}
    case GET_SINGLE_CATEGORY:
      return {...state, selectedCategory: action.category}
    default:
      return state
  }
}

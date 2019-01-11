import axios from 'axios'

// Initial State
const initialState = {
  allProducts: [],
  allCategories: []
}

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

// Action Creators
const getAllProducts = products => {
  return {
    type: GET_ALL_PRODUCTS,
    products
  }
}

const getAllCategories = categories => {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}

// Thunk Creators

export const fetchAllProducts = () => {
  return async dispatch => {
    const response = await axios.get('/api/products')
    const products = response.data
    dispatch(getAllProducts(products))
  }
}

export const fetchAllCategories = () => {
  return async dispatch => {
    const response = await axios.get('/api/categories')
    const categories = response.data
    dispatch(getAllCategories(categories))
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
    case GET_ALL_CATEGORIES:
      return {...state, allCategories: action.categories}
    default:
      return state
  }
}

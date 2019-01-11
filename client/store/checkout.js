import axios from 'axios'

const PAYMENT = 'PAYMENT'

const payment = credentials => {
  return {
    type: PAYMENT,
    credentials
  }
}

export const processPayment = credentials => {
  return async dispatch => {
    const response = await axios.post('/api/stripe/charge', credentials)
    dispatch(payment(response.data))
  }
}

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case PAYMENT:
      return {...state}
    default:
      return state
  }
}

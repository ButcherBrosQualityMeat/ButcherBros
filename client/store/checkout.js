import axios from 'axios'

const PAYMENT = 'PAYMENT'

const payment = paid => {
  return {
    type: PAYMENT,
    paid
  }
}

export const processPayment = credentials => {
  return async dispatch => {
    const response = await axios.post('/api/stripe/charge', credentials)
    dispatch(payment(response.data.paid))
  }
}

const initialState = {
  paid: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PAYMENT:
      return {...state, paid: action.paid}
    default:
      return state
  }
}

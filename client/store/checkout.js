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
    // OB/JL: dry dead log, burn it
    console.log(response.data)
    dispatch(payment(response.data.status))
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

import {
    CART_ADD_ITEMS, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD
} from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id,qty) => async (dispatch, getState) =>{
    
        
        const { data } = await axios.get(`/api/product/${id}`)
        dispatch({
            type: CART_ADD_ITEMS,
            payload: {
              product: data._id,
              name: data.name,
              image: data.image,
              price: data.price,
              countInStock: data.countInStock,
              qty,
            },
          })
          console.log(getState().cart.cartItems)
          localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

    
   
}

export const saveShippingAddress = (data) => async (dispatch) =>{
    
        dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    })
    console.log(data)
    localStorage.setItem('shippingAddress', JSON.stringify(data))



}

export const savePaymentMethod = (data) => async (dispatch) =>{
    
  dispatch({
type: CART_SAVE_PAYMENT_METHOD,
payload: data,
})
console.log(data)
localStorage.setItem('paymentMethod', JSON.stringify(data))



}
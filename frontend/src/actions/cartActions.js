import {
    CART_ADD_ITEMS
} from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id,qty) => async (dispatch, getState) => {
    try {
        
        const { data } = await axios.get(`/api/product/${id}`)
        dispatch({ type: CART_ADD_ITEMS, payloda:{
                product: data._id,
                name: data.name,    
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
        }})

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)

    } catch (error) {
        
    }
}

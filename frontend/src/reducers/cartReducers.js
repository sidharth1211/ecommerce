import {
   CART_ADD_ITEMS,
   CART_REMOVE_ITEMS, 
} from '../constants/cartConstants.js'

export const  cartReducer = (state={cartItems:[]}, action) => {
    switch(action.type){
        case CART_ADD_ITEMS:
            const item = action.payload

            const existItem= state.cartItems.find(x => x.product === item.product)
            if(existItem){
                return {
                    ...state,
                    cartItems: [...state.cartItems,]
                }
            }
            else{
                return {
                    ...state,
                    cartItems: state.cartItems.map(
                        x=>x.product === existItem.product ? item:x
                    )
                }
            }
        default:
           return state
        
    }
}
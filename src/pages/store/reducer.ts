
const initState = {
    cartItems:[]
}
export const cartReducer = (state = initState, action:Actions) => {
    if (action.type === 'cart/addToCart') {

        return {
            cartItems: [...state.cartItems, action.payload]
            
        }
    };

    if (action.type === 'cart/removeFromCart') {
        return {
            cartItems: state.cartItems.filter((item) => item != action.payload)
        }
    }

    if (action.type === 'cart/emptyCart') {
        return {
            cartItems: []
        }
    }
    
    return state;
}


import { createSlice } from "@reduxjs/toolkit"

const initState = {
    cartItems: [],
    isLogin:false
}

export const basketSlice = createSlice({
     
    name: "basket",
    initialState: initState,
    reducers: {
        addToCart(state, action) {
            state.cartItems = [...state.cartItems, action.payload];
         },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item != action.payload);
         },
        emptyCart(state) {
            state.cartItems = [];
        }
    }
    
})

// export const cartReducer = (state = initState, action:Actions) => {
//     if (action.type === 'cart/addToCart') {

//         return {
//             cartItems: [...state.cartItems, action.payload]
            
//         }
//     };

//     if (action.type === 'cart/removeFromCart') {
//         return {
//             cartItems: state.cartItems.filter((item) => item != action.payload)
//         }
//     }

//     if (action.type === 'cart/emptyCart') {
//         return {
//             cartItems: []
//         }
//     }

//     return state;
// }


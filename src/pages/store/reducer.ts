import { productList } from "@/mock/productList";
import { CartItem, Product } from "@/types/store/Interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface CartState{
    cartItems: CartItem[]
}
const initState:CartState = {
    cartItems: [],
    
}

export const basketSlice = createSlice({
     
    name: "basket",
    initialState: initState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = state.cartItems.find(
                (el) => el.product.id === action.payload.id
            );
            if (item) item.qty++;
            else {
                state.cartItems.push({
                    product: action.payload,
                    qty: 1,
                });
                

            }
            // state.cartItems = [...state.cartItems, action.payload];
        },

        removeFromCart: (state, action: PayloadAction<Product>)=> {
            const item = state.cartItems.find(
                (el) => el.product.id === action.payload.id
            );
            if (item) {
                item.qty--;
                if (item.qty === 0) {
                    state.cartItems = state.cartItems.filter(
                        (el) => el.product.id !== action.payload.id
                    )
                }
            }
            // state.cartItems = state.cartItems.filter((item) => item != action.payload);
        },
        emptyCart(state) {
            state.cartItems = [];
        }
    }
    
});


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


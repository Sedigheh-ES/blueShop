import { productList } from "@/mock/productList";
import { CartItem, Product } from "@/types/store/Interface";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import { reduxState } from "@/types/store/Store";
import { ProductType } from "@/types/Product";


const initState:reduxState = {
    cartItems:[],
    quantity: 0
    
}

export const basketSlice = createSlice({
   
    name: "basket",
    initialState: initState,
    reducers: {
        addToCart (state, action) {         
            state.cartItems = [...state.cartItems, action.payload];          
        },

        removeFromCart(state, action){          
            state.cartItems = state.cartItems.filter((item) => item != action.payload);
        },
        emptyCart(state) {
            state.cartItems = [];
        }
    }
    
});


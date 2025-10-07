import { ProductType, cartItem } from "@/types/Product";
import { CartItem } from "@/types/store/Interface";
import { PayloadAction, createSelector, createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";


export interface CartState{
cartItems:cartItem[]
}

const initialState: CartState = {
    cartItems:[],
    
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCard: (state, action: PayloadAction<ProductType>) => {
            const itemInCard = state.cartItems.find((el) => el.product?.id === action.payload?.id);
            
            if (itemInCard) itemInCard.qty++
            else {
                state.cartItems.push({
                    product: action.payload,
                    qty: 1
                });
            }
        },

        removeFromCard: (state, action: PayloadAction<ProductType>) => {
            const itemInCard = state.cartItems.find((el) => el.product?.id === action.payload?.id);
            if (itemInCard)
                itemInCard.qty--
            else {
                state.cartItems = state.cartItems.filter((el) => el.product?.id !== action.payload?.id);
            }
            
        },

        
    }
});

const cartItems = (state: RootState) => state.cart.cartItems;

export const productQtyInCartSelector = createSelector(
    
  [cartItems, (cartItems, productId: number) => productId],
  (cartItems, productId) =>
    cartItems.find((el:any) => el.product?.id === productId)?.qty
);

export const totalCartItemsSelector = createSelector(
  [cartItems],
  (cartItems) =>
    cartItems.reduce(
      (total: number, curr: CartItem) =>
        (total += curr.qty),
      0
    )
);

export const totalPriceSelector =
    createSelector(
        [cartItems],
        (cartItems) => cartItems.reducer((total: number, current: CartItem) => (total += current.product.price),0)
    
    );
export const productQtySelector =
    createSelector(
        [cartItems, (productId: number) => productId],
        (cartItems, productId) =>
            cartItems.find((el:any) => el.product.id === productId)?.qty
    );



export const { addToCard, removeFromCard } = cartSlice.actions;
export default cartSlice.reducer;
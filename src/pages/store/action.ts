import { title } from "process"

export const addtoCardAction = (productID:number) => {
    return {
        type: 'cart/addToCart',
        payload: productID,
        
    }
}

export const removeFromCardAction = (productID:number) => {
    return {
        type: 'cart/removeFromCart',
        payload:productID
    }
}

export const emptyCart = () => {
    return {
        type: 'cart/emptyCart'
       
    }
}
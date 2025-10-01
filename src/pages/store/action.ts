

export const addtoCardAction = (productID:number,image:string) => {
    return {
        type: 'cart/addToCart',
        payload: productID,image
        
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
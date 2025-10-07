import { useAppSelector } from '@/pages/store/store'
import React from 'react'
import CartItemCard from '../components/common/basket/CartItemCard'
import { ProductType } from '@/types/Product'
import { totalCartItemsSelector } from './store/reducer'

interface Props{
cartItem: ProductType
}

export default function CartPage(props:Props) {
    const cartItems = useAppSelector(
        (state) => state.cart.cartItems
    )
    
  return (
      <div className="p-2">
      {cartItems.map((item) => (
        <CartItemCard cartItems={item} />
      ))}

           {
          cartItems ?      
            cartItems.map((item,index) => {
              return (           
                <div className='flex items-center justify-center w-full mb-2'>           
                  <span className='border-b border-dark_header flex w-full p-4'>{item.product?.title}</span>                                    
                </div>
      
                 
              )
            }) :
             <span>Basket is empty</span>
        }
      {/* <p className="text-slate-600">
        Total Price:{" "}
        <span className="text-slate-900 font-bold">
          {totalPrice} $
        </span>
      </p> */}
    </div>
  )
}

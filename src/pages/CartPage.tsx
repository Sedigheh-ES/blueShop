import { useAppSelector } from '@/pages/store/store'
import React from 'react'
import CartItemCard from '../components/common/basket/CartItemCard'

export default function CartPage() {
    const cartItem = useAppSelector(
        (state) => state.cart.cartItems
    )
  return (
      <div className='p-2'>
          {
              cartItem.map((item)=>(<CartItemCard cartItem={item.product}/>))
          }
          

    </div>
  )
}

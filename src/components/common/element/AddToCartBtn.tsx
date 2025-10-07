
import { addtoCardAction } from '@/pages/store/action';
import { addToCard, productQtyInCartSelector, removeFromCard } from '@/pages/store/reducer';
import { useAppDispatch, useAppSelector } from '@/pages/store/store';
import { ProductType, cartItem } from '@/types/Product'
import React from 'react'
import QtyBtn from './QtyBtn';

interface Props {
  product: ProductType;
}
export default function AddToCartBtn(prop: Props) {
  const qty = useAppSelector(state => productQtyInCartSelector(state, prop.product?.id));
  const dispatch = useAppDispatch();
  if (!qty) {
    return (
      <div className='py-1 px-2 border bg-blue_main text-bg_light_green texr-sm'>

        <button onClick={() => dispatch(addToCard(prop?.product))}>Add To Cart</button>


      </div>
    )
  }

  return (
    <QtyBtn
      onIncrease={() => dispatch(removeFromCard(prop?.product))}
      onDecrease={() => dispatch((addToCard(prop?.product)))}
      qty={qty} />
  )

}

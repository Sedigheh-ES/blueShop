import { ProductType, cartItem } from '@/types/Product'
import Image from 'next/image';
import React from 'react'
import QtyBtn from '../element/QtyBtn';
import { useAppDispatch, useAppSelector } from '@/pages/store/store';
import { addToCard, productQtyInCartSelector, removeFromCard } from '@/pages/store/reducer';

interface Props {
    cartItem: ProductType;
}
export default function CartItemCard(props: Props) {
    const qty = useAppSelector(state => productQtyInCartSelector(state, props.cartItem?.id));
    const dispatch = useAppDispatch();
   
    return (
       
            <div className='grid grid-cols-4 items-center py-2'>
                <Image src={props.cartItem?.image} alt={props.cartItem?.title} width={240} height={240} className='flex items-center' />
                <p>{props.cartItem?.title} title</p>
                <p>{props.cartItem?.price} Price</p>
                <QtyBtn
                    onIncrease={() => dispatch(removeFromCard(props.cartItem))}
                    onDecrease={() => dispatch((addToCard(props.cartItem))) }
                    qty={qty} />

             </div>
    

    )
}

import React, { useEffect, useState } from 'react'
import IconBox from '../icon-box/IconBox';
import { useDispatch, useSelector } from 'react-redux';

import { basketSlice } from '@/pages/store/reducer-bk';

import { reduxState } from '@/types/store/Store';
import { productList } from '@/mock/productList';
import { ProductType } from '@/types/Product';
import { useAppSelector } from '@/pages/store/store';
import {  totalCartItemsSelector } from '@/pages/store/reducer';

interface Props {
  product: ProductType;
}
export default function Basket(props: Props) {
 

  const dispatch = useDispatch();
  const cartItems = useSelector<reduxState>((state) => state.cartItems) as Array<number>;
  const totalCartItem = useAppSelector(totalCartItemsSelector);
 
  const emptyCartHandler = () => {
    // dispatch(emptyCart());  
    dispatch(basketSlice.actions.emptyCart())
  }


  const [showMobileBasket, setShowMobileBasket] = useState<boolean>(false);

const basketBtnClickHandler = (e:any) => {
    e.stopPropagation();
    setShowMobileBasket((prevState) => !prevState);
  };

   const basketBodyClickHandler = (e:any) => {
     e.stopPropagation();
   }
  
  useEffect(() => {
    const clickHandler = () => {
      setShowMobileBasket(false);
    };
    document.addEventListener("click", (clickHandler) => {
      setShowMobileBasket(false);
    });
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  

  return (
    <>
       
    <div className='relative border border-[#B4B4B4] rounded-md pl-3 pr-3 pt-[7px] pb-[7px] text-dark_header flex items-center justify-center' onClick={basketBtnClickHandler}>
        <IconBox icon={'icon-shopping-cart'} link={'#'} />   
        {

          !!totalCartItem &&
          (<div key={totalCartItem } className='bg-red_badge rounded-full w-6 h-6 text-bg_light_green 
          flex items-center justify-center absolute -top-3 -right-1
          animate-ping-pingOnce'>
              {totalCartItem}
            </div>)
        }
      </div>
     
 
      <div onClick={basketBodyClickHandler} className={`${showMobileBasket ? 'left-0 fixed overflow-y-scroll' : '-left-[100%] absolute'}
         container bg-stroke_light_green transition-all w-3/5 rounded-tr-[24px] lg:rounded-[0px] lg:w-auto flex lg:hidden top-0 bottom-0
          lg:static flex-col justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center h-[100vh]
          lg:z-10 bg-white lg:h-[70px] mobile-menu z-50 border-[1px] border-l-blue_main border-t-blue_main border-r-[#FFFFFF]
           border-b-[#FFFFFF]`}>
        {
          cartItems ?      
            cartItems.map((item,index) => {
              return (           
                <div className='flex items-center justify-center w-full mb-2'>           
                  <span className='border-b border-dark_header flex w-full p-4' key={item}>{item}</span>                                    
                </div>
      
                 
              )
            }) :
             <span>Basket is empty</span>
        }
        <div className='flex items-center justify-center gap-4'>
        <button className={'bg-blue_main text-stroke_light_green text-[16px] text-center py-3 px-5 rounded-md'} onClick={emptyCartHandler}>Empty Cart</button>
        <button className={'bg-blue_main text-stroke_light_green text-[16px] text-center py-3 px-5 rounded-md'}>CheckOut</button>
</div>

        
      </div>
      </>

  )
}

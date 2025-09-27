import React, { useEffect, useState } from 'react'
import IconBox from '../icon-box/IconBox';
import { useSelector } from 'react-redux';
import { productList } from '@/mock/productList';


export default function Basket() {
  const cartItems = useSelector((state) => state.cartItems);


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
       
    <div className='border border-[#B4B4B4] rounded-md pl-3 pr-3 pt-[7px] pb-[7px] text-dark_header flex items-center justify-center' onClick={basketBtnClickHandler}>
      <IconBox icon={'icon-shopping-cart'} link={'#'} />

        
    </div>
       <div  onClick={basketBodyClickHandler} className={`${showMobileBasket? 'left-0 fixed overflow-y-scroll' :'-left-[100%] absolute' }  container bg-stroke_light_green transition-all w-3/5 rounded-tr-[24px] lg:rounded-[0px] lg:w-auto flex  top-0 bottom-0  lg:static flex-col lg:hidden justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center h-[100vh] bg-white lg:h-[70px] mobile-menu z-50 border-[1px] border-l-blue_main border-t-blue_main border-r-[#FFFFFF] border-b-[#FFFFFF]`}>
        {
          cartItems ?      
            cartItems.map((item,index) => {
              return (
                <div>
                  <span key={item}>{item}</span>                    
                </div>
      
                 
              )
            }) :
             <span>Basket is empty</span>
           }
        
      </div>
      </>

  )
}

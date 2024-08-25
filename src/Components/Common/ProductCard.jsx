import React from 'react'
import { CiStar } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export const ProductCard = ({ product }) => {

    const { img, title, price } = product;

  return (
    <div className='border-[#e5e5e5] border cursor-pointer hover:border-soft_primary transition-all duration-300 product-card'>
        <div className='relative product-img'>
            <img src={img} alt="apple" />
            <div className='absolute right-5 top-4 bg-[#e5e5e5] rounded-full p-1 mt-[-4px] opacity-0 invisible'>
                <IoIosHeartEmpty className='text-2xl'/>
            </div>
            <div className='absolute right-5 top-12 bg-[#e5e5e5] rounded-full p-1 opacity-0 invisible'>
                <IoEyeOutline className='text-2xl'/>
            </div>
        </div>
        <div className='product-info flex justify-between items-center'>
            <div className='ms-1 mb-1'>
                <h3 className='pb-1 text-[#4d4d4d] text-sm'>{title}</h3>
                <div className='flex gap-1 pb-1'>
                    <span>&#36;{price}</span>
                    <span className='line-through text-[#999]'>&#36;{price}</span>
                </div>
                <div className='stars flex pb-1'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><CiStar /></span>
                </div>
             </div>
            <div className='bg-[#e5e5e5] rounded-full p-1 me-2 shopping-basket'>
                <CiShoppingBasket className='icon text-3xl'/>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
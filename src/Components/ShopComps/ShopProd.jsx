import React from 'react'
import ShopProdCard from './ShopProdCard';
import { shopProducts } from '../../Data/shopProducts';
import '../../Styles/shop.css';

const ShopProd = () => {
  return (
    <div className='section'>
        <div className='shop-filters pb-9 flex justify-between'>
            <div className='flex gap-5'>
                <div className='category'>
                    <select name="" id="categories" className='cursor-pointer'>
                        <option value="">Select Category</option>
                        <option value="">Wing Chair</option>
                        <option value="">Vegetables</option>
                        <option value="">Health & Beauties</option>
                        <option value="">Medicine</option>
                    </select>
                </div>
                <div className='category'>
                    <select name="" id="categories" className='cursor-pointer'>
                        <option value="">Select Price</option>
                        <option value="">Min &#36;15 - Max &#36;300</option>
                        <option value="">Min &#36;30 - Max &#36;600</option>
                        <option value="">Min &#36;60 - Max &#36;1200</option>
                    </select>
                </div>
                <div className='category'>
                    <select name="" id="categories" className='cursor-pointer'>
                        <option value="">Select Rating</option>
                        <option value="">⭐⭐⭐⭐⭐</option>
                        <option value="">⭐⭐⭐⭐</option>
                        <option value="">⭐⭐⭐</option>
                        <option value="">⭐⭐</option>
                        <option value="">⭐</option>
                    </select>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='category'>
                    <select name="" id="categories" className='cursor-pointer'>
                        <option value="">Sort By: Latest</option>
                        <option value="">Sort By: Oldest</option>
                        <option value="">Sort By: Trending</option>
                    </select>
                </div>
                <div className='category'>
                    <select name="" id="categories" className='cursor-pointer'>
                        <option value="">Show: 16</option>
                        <option value="">Show: 01</option>
                        <option value="">Show: 02</option>
                        <option value="">Show: 03</option>
                        <option value="">Show: 04</option>
                        <option value="">Show: 05</option>
                        <option value="">Show: 06</option>
                        <option value="">Show: 07</option>
                        <option value="">Show: 08</option>
                        <option value="">Show: 09</option>
                        <option value="">Show: 10</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='active-filters'>
            <hr />
            <div className='flex justify-between w-[85%] mx-auto py-2'>
                <div className='flex gap-6'>
                    <p>Active Filters: </p>
                    <span>value</span>
                    <span>value</span>
                </div>
                <div>
                    results Results Found.
                </div>
            </div>
            <hr />
        </div>
        <div className='flex flex-wrap gap-6 pt-6'>
            {
                shopProducts.map((item, index) => (
                    <ShopProdCard product={item} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default ShopProd
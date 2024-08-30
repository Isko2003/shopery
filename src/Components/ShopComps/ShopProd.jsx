import React from 'react'
import ShopProdCard from './ShopProdCard';
import { shopProducts } from '../../Data/shopProducts';

const ShopProd = () => {
  return (
    <div className='section'>
        <div className='flex flex-wrap gap-6'>
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
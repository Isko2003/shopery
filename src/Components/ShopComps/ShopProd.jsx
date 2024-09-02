import React, { useState } from 'react'
import ShopProdCard from './ShopProdCard';
import { shopProducts } from '../../Data/shopProducts';
import '../../Styles/shop.css';
import { IoIosClose } from "react-icons/io";


const ShopProd = () => {
    const [selectedValues, setSelectedValues] = useState({
        select1: '',
        select2: '',
        select3: '',
        select4: '',
        select5: '',
    });

    const { select1, select2, select3, select4, select5 } = selectedValues;

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

  return (
    <div className='section'>
        <div className='shop-filters pb-9 flex justify-between'>
            <div className='flex gap-5'>
                <div className='category'>
                    <select name="select1" id="categories" className='cursor-pointer' onChange={handleSelectChange}>
                        <option value="">Select Category</option>
                        <option value="Wing Chair">Wing Chair</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Health & Beauties">Health & Beauties</option>
                        <option value="Medicine">Medicine</option>
                    </select>
                </div>
                <div className='category'>
                    <select name="select2" id="categories" className='cursor-pointer' onChange={handleSelectChange}>
                        <option value="">Select Price</option>
                        <option value="Min $15 - Max $300">Min &#36;15 - Max &#36;300</option>
                        <option value="Min $30 - Max $600">Min &#36;30 - Max &#36;600</option>
                        <option value="Min $60 - Max $1200">Min &#36;60 - Max &#36;1200</option>
                    </select>
                </div>
                <div className='category'>
                    <select name="select3" id="categories" className='cursor-pointer' onChange={handleSelectChange}>
                        <option value="">Select Rating</option>
                        <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                        <option value="⭐⭐⭐">⭐⭐⭐</option>
                        <option value="⭐⭐">⭐⭐</option>
                        <option value="⭐">⭐</option>
                    </select>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='category'>
                    <select name="select4" id="categories" className='cursor-pointer' onChange={handleSelectChange}>
                        <option value="Latest">Sort By: Latest</option>
                        <option value="Oldest">Sort By: Oldest</option>
                        <option value="Trending">Sort By: Trending</option>
                    </select>
                </div>
                <div className='category'>
                    <select name="select5" id="categories" className='cursor-pointer' onChange={handleSelectChange}>
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
                    <div className='flex gap-1 items-center'>
                        <span>{select1}</span>
                        {select1 ? <IoIosClose  className='icon'/> : ''}
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span>{select2}</span>
                        {select2 ? <IoIosClose  className='icon'/> : ''}
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span>{select3}</span>
                        {select3 ? <IoIosClose  className='icon'/> : ''}
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span>{select4}</span>
                        {select4 ? <IoIosClose  className='icon'/> : ''}
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span>{select5}</span>
                        {select5 ? <IoIosClose  className='icon'/> : ''}
                    </div>
                </div>
                <div>
                    2,547 Results Found.
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
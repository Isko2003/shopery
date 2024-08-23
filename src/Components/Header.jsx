import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import '../Styles/header.css';
import logo from '../assets/imgs/logo.png';
import { IoSearchSharp } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";


const Header = () => {
  const price = 57;
  return (
    <header className='w-full'>
      <div className='background flex justify-between h-16 ps-20 pe-36 items-center'>
        <div className='flex gap-4'>
          <CiLocationOn className='icon'/>
          <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </div>
        <div className='flex gap-2'>
          <div className='flex items-center gap-2 cursor-pointer'>
            Eng
            <span><MdKeyboardArrowDown className='icon'/></span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            USD
            <span><MdKeyboardArrowDown className='icon'/></span>
          </div>
          <div className='line flex items-center justify-center'></div>
          <div className='register-btn flex gap-2 items-center justify-center'>
            <button>Sign In</button>
            <span className='text-sm w-1'>/</span>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className='flex justify-around items-center p-3 ps-12 pt-5'>
        <div className='header-img cursor-pointer'>
          <img src={logo} alt="shopery-logo" />
        </div>
        <div className='flex justify-center items-center'>
          <div className='header-input'>
            <input type="text" placeholder='Search' className='search-input br-6'/>
            <span className='search-icon'><IoSearchSharp className='icon'/></span>
          </div>
          <div>
            <button className='search-btn br-6 hover:transition-all duration-500 ease'>Search</button>
          </div>
        </div>
        <div className='header-cart flex gap-2 items-center'>
          <div>
            <IoIosHeartEmpty className='icon text-3xl cursor-pointer'/>
          </div>
          <div className='line-cart flex items-center justify-center'></div>
          <div>
            <FaShoppingBasket className='icon text-3xl cursor-pointer'/>
          </div>
          <div>
            <p>Shopping Cart:</p>
            <span>&#36;{price}.00</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
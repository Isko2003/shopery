import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import '../Styles/header.css';
import logo from '../assets/imgs/logo.png';
import { IoSearchSharp } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  const price = 57;
  return (
    <header className='w-full'>
      <div className='background flex justify-between h-16 ps-20 pe-36 items-center'>
        <div className='flex gap-4 location'>
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
      <div className='flex justify-around items-center p-3 ps-12 pt-5 header-hamburger'>
        {/* HAMBURGER MENU */}
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer header-svg'>
            <path d="M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3 18H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <div className='header-img cursor-pointer'>
          <img src={logo} alt="shopery-logo" />
        </div>
        <div className='flex justify-center items-center header-center'>
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
          <div className='shopping-cart'>
            <p>Shopping Cart:</p>
            <span>&#36;{price}.00</span>
          </div>
        </div>
      </div>
      <div className='header-nav background h-14 ps-20 flex justify-between pe-32'>
        <nav className='pt-4'>
          <ul className='flex justify-around nav-lists'>
            <li>
              <span>Home</span>
              <span><MdKeyboardArrowDown className='icon'/></span>
            </li>
            <li>
              <span>Shop</span>
              <span><MdKeyboardArrowDown className='icon'/></span>
            </li>
            <li>
              <span>Pages</span>
              <span><MdKeyboardArrowDown className='icon'/></span>
            </li>
            <li>
              <span>Blog</span>
              <span><MdKeyboardArrowDown className='icon'/></span>
            </li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className='header-contact flex gap-2 items-center cursor-pointer'>
          <div className='phone-icon'>
            <FaPhoneVolume />
          </div>
          <div>
            <span>(219) 555-0114</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
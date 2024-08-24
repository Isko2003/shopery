import React from 'react'
import '../../Styles/header.css'
import { IoSearchSharp } from "react-icons/io5";

export const Button = () => {
  return (
    <div className='hidden md:flex justify-center items-center'>
    <div className='header-input'>
      <input type="text" placeholder='Search' className='search-input br-6'/>
      <span className='search-icon'><IoSearchSharp className='icon'/></span>
    </div>
    <button className='search-btn br-6 hover:transition-all duration-500 ease'>Search</button>
  </div>
  )
}

export default Button
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../Styles/header.css";
import logo from "../assets/imgs/logo.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import SearchInput from "./Common/SearchInput";
import HeaderCross from "./Common/HeaderCross";
import { Link } from "react-router-dom";

const Header = () => {
  const price = 57;

  const [show, setShow] = useState(true);

  return (
    <header className="w-full">
      <div className="background flex justify-between h-16 ps-20 pe-36 items-center">
        <div className="hidden gap-4 location lg:flex">
          <CiLocationOn className="icon" />
          <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 cursor-pointer">
            Eng
            <span>
              <MdKeyboardArrowDown className="icon" />
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            USD
            <span>
              <MdKeyboardArrowDown className="icon" />
            </span>
          </div>
          <div className="line flex items-center justify-center"></div>
          <div className="register-btn flex gap-2 items-center justify-center">
            <button>Sign In</button>
            <span className="text-sm w-1">/</span>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center p-3 xs:ps-0 md:ps-0 pt-5">
        {/* HAMBURGER MENU */}
        <div className="xs:block lg:hidden" onClick={() => setShow(!show)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer header-svg"
          >
            <path
              d="M3 12H21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 6H21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 18H15"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <Link to={"/"}>
          <div className="header-img cursor-pointer">
            <img src={logo} alt="shopery-logo" />
          </div>
        </Link>
        <div>
          <SearchInput />
        </div>
        <div className="header-cart flex gap-2 items-center">
          <div>
            <IoIosHeartEmpty className="icon text-3xl cursor-pointer" />
          </div>
          <div className="line-cart flex items-center justify-center"></div>
          <div>
            <FaShoppingBasket className="icon text-3xl cursor-pointer" />
          </div>
          <div className="shopping-cart hidden lg:block">
            <p>Shopping Cart:</p>
            <span>&#36;{price}.00</span>
          </div>
        </div>
      </div>

      <div
        className={`header-sidebar bg-black fixed top-0 w-72 left-6 z-[9999] transition-all duration-300 ease-linear ${show && "close"} relative`}
      >
        <button className="header-cross absolute right-0 top-2">
          <HeaderCross />
        </button>
        <div className="header-mobile-sidebar">
          <div className="header-mobile-top">
            <div className="flex justify-around">
              <div className="header-input w-40">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input br-6 w-60 pt-1"
                />
                <span className="search-icon">
                  <IoSearchSharp className="icon" />
                </span>
              </div>
              <button className="search-btn br-6 hover:transition-all duration-500 ease h-6 pt-1 ps-9 w-11">
                <IoSearchSharp className="icon" />
              </button>
            </div>
            <ul>
              <li>
                <a href="" className="flex gap-1">
                  Home
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </a>
                <ul className="hidden">
                  <li>
                    <a href="#">Home 01</a>
                  </li>
                  <li>
                    <a href="#">Home 02</a>
                  </li>
                  <li>
                    <a href="#">Home 03</a>
                  </li>
                  <li>
                    <a href="#">Home 04</a>
                  </li>
                  <li>
                    <a href="#">Home 05</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" className="flex gap-1">
                  Shop
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </a>
                <ul className="hidden">
                  <li>Shop 01</li>
                  <li>Shop 02</li>
                </ul>
              </li>
              <li>
                <a href="#" className="flex gap-1">
                  Pages
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-1">
                  Blog
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </a>
                <ul className="hidden">
                  <li>Blog 01</li>
                  <li>Blog 02</li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="header-mobile-bottom">
            <div className="header-mobile-user">
              <div className="header-mobiler-user-img"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-nav background h-14 ps-20 justify-between pe-32 hidden lg:flex">
        <nav className="pt-4">
          <ul className="flex justify-around nav-lists">
            <li>
              <span>Home</span>
              <span>
                <MdKeyboardArrowDown className="icon" />
              </span>
            </li>
            <li className="relative shop-list z-[9999]">
              <span>Shop</span>
              <span>
                <MdKeyboardArrowDown className="icon" />
              </span>
              <ul className="opacity-0 invisible absolute top-5 left-0 bg-[#e5e5e5] w-[200px] h-[60px] text-black rounded-md z-[9999]">
                <li className="mb-2 p-1 hover:bg-[#00b207]">Shop 01</li>
                <Link to={"/shop"}>
                  <li className="mb-2 p-1 hover:bg-[#00b207]">Shop 02</li>
                </Link>
              </ul>
            </li>
            <li className="relative shop-list">
              <span>Pages</span>
              <span>
                <MdKeyboardArrowDown className="icon" />
              </span>
              <ul className="opacity-0 invisible absolute top-5 left-0 bg-[#e5e5e5] w-[200px] text-black rounded-md z-[9999]">
                <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                  User Dashboard
                </li>
                <Link to={"/shop"}>
                  <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                    Order History
                  </li>
                </Link>
                <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                  Order Details
                </li>
                <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                  Account Settings
                </li>
                <Link to={"/product-details"}>
                  <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                    Product Details
                  </li>
                </Link>
                <Link to={"/wishlist"}>
                  <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                    Wishlist
                  </li>
                </Link>
                <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                  Shopping Cart
                </li>
                <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                  Sign In
                </li>
                <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                  Create Account
                </li>
                <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">Faq</li>
                <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                  Error 404
                </li>
              </ul>
            </li>
            <li className="relative shop-list">
              <span>Blog</span>
              <span>
                <MdKeyboardArrowDown className="icon" />
              </span>
              <ul className="opacity-0 invisible absolute top-5 left-0 bg-[#e5e5e5] w-[200px] text-black rounded-md z-[9999]">
                <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                  Blog List
                </li>
                <li className="mb-2 p-[6px] ps-3 hover:bg-[#00b207]">
                  Single Blog
                </li>
              </ul>
            </li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="header-contact flex gap-2 items-center cursor-pointer">
          <div className="phone-icon">
            <FaPhoneVolume />
          </div>
          <div>
            <span>(219) 555-0114</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

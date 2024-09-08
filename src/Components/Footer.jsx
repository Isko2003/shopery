import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="flex w-[100%] bg-[#f7f7f7] justify-center items-center">
          <div className="flex gap-2 flex-col w-[80%] bg-[#f7f7f7] justify-between items-center p-4 mb-8 mt-8 xl:flex-row ">
            <div className="gap-4 flex flex-col justify-center lg: justify-start ">
              <h1 className="flex justify-center lg:justify-start text-[#1A1A1A] text-[1rem] font-semibold md:text-[1.7rem] ">
                Subscribe Our Newsletter
              </h1>
              <p className="text-center xl:text-[#999999] text-start text-0.5xl pr-4 ">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </p>
            </div>
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email Address"
                className="bg-[#ffffff] py-2.5 px-6 text-1xl w-[300px] sm:w-[400px] rounded-3xl  "
              />
              <button className="text-[#ffffff] bg-[#00b207] text-1xl py-2.5 px-6 rounded-3xl absolute top-[0px] right-[0px]">
                Subscribe
              </button>
            </div>
            <ul className="flex justify-center items-center gap-4 text-2xl">
              <li className="w-[50px] h-[50px] rounded-full flex justify-center items-center hover:bg-[#00b207] duration-500">
                <a href="">
                  <i class="fa-brands fa-facebook" ></i>
                </a>
              </li>
              <li className="w-[50px] h-[50px] rounded-full flex justify-center items-center hover:bg-[#00b207] duration-500">
                <a href="">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="w-[50px] h-[50px] rounded-full flex justify-center items-center hover:bg-[#00b207] duration-500">
                <a href="">
                  <i class="fa-brands fa-pinterest"></i>
                </a>
              </li>
              <li className="w-[50px] h-[50px] rounded-full flex justify-center items-center hover:bg-[#00b207] duration-500">
                <a href="">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[100%] flex flex-col justify-center items-center bg-[#1A1A1A]">
          <div className="bg-[#1A1A1A] grid grid-cols-2 grid-row-3 justify-center items-start w-[80%] gap-x-8  mt-8 mb-8 xl:grid-cols-5 grid-row-1 ">
            <div className="flex justify-center flex-col items-start gap-4 ">
              <div><img src="https://shopery.netlify.app/main/src/images/logo-nl-white.png" alt="" /></div>
              <p className="text-[#999999] text-[16px] w-[100%]">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
              <div><a href="" className="text-[#ffffff] text-[16px] border-b border-[#00b207] hover:text-[#00b207]">(219)555-0114</a>  or  <a href="" className="text-[#ffffff] text-[16px] border-b border-[#00b207] hover:text-[#00b207]">Proxy@gmail.com</a></div>
            </div>
            <div className="w-[100%] lg:w-[75%] grid grid-rows-2 grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-4">
              <div className=" flex flex-col gap-4  " >
              <h2 className="text-[#ffffff] text-[16px]">My Account</h2>
              <ul className="flex-col flex gap-2">
                <li className="text-[#999999] text-[14px] hover:text-[#ffffff]"><a href="">My Account</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">order History</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Shoping Cart</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Wishlist</a></li>
              </ul>
            </div>
            <div className="  flex flex-col gap-4 " >
              <h2 className="text-[#ffffff] text-[16px]">My Helps</h2>
              <ul className="flex-col flex gap-2" >
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Contact</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">faq</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Terms & Condition</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="  flex flex-col gap-4 ">
              <h2 className="text-[#ffffff] text-[16px]">Proxy</h2>
              <ul className="flex-col flex gap-2" >
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">About</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Shop</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Product</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Track Order</a></li>
              </ul>
            </div>
            <div className="  flex flex-col gap-4 ">
              <h2 className="text-[#ffffff] text-[16px]">Categories</h2>
              <ul className="flex-col flex gap-2">
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Fruit & Vegetables</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Meat & Fish</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Bread & Bakery</a></li>
                <li className="text-[#999999] text-[14px]  hover:text-[#ffffff]"><a href="">Beauty & Health</a></li>
              </ul>
            </div>
            </div>
            
          </div>
          <div className="bg-[#1A1A1A] flex flex-col md:flex-row justify-between items-center w-[80%] gap-2 mt-4 mb-4 border-t border-[#333333]">
          <div className="text-[#808080] text-[12px] md:text-[14px]">
          Shopery eCommerce © 2021. All Rights Reserved
          </div>
          <div className="flex gap-2">
         <div><img src="https://shopery.netlify.app/main/src/images/brand-icon/img-01.png" alt="" /></div>
         <div><img src="https://shopery.netlify.app/main/src/images/brand-icon/img-02.png" alt="" /></div>
         <div><img src="https://shopery.netlify.app/main/src/images/brand-icon/img-03.png" alt="" /></div>
         <div><img src="https://shopery.netlify.app/main/src/images/brand-icon/img-04.png" alt="" /></div>
         <div><img src="https://shopery.netlify.app/main/src/images/brand-icon/img-05.png" alt="" /></div>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

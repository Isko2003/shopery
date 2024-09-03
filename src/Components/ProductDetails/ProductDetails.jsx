import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import PageContainer from "../Common/PageContainer";
import ProductBreadCrumb from "../Common/ProductBreadCrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../Styles/swiper.css";
import cabbage from "../../assets/imgs/cabbage.png";
import cabbage1 from "../../../public/cabbage-1.png";
import cabbage2 from "../../../public/cabbage-2.png";
import cabbage3 from "../../../public/cabbage-3.png";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import brandimg from "../../assets/imgs/brand-img.png";
import "../../Styles/productSwiper.css";
const ProductDetails = () => {
  const productCrumbs = [
    { id: 0, title: "Category", url: "/categories" },
    { id: 2, title: "Vegetables", url: "/categories/vegetables" },
    { id: 1, title: "Cabbage", url: "/categories/vegetables/cabbage" },
  ];

  return (
    <PageContainer>
      <section>
        <div className="relative py-10">
          <ProductBreadCrumb links={productCrumbs} />
          <div className="breadcrumb-img"></div>
        </div>
        <div className="flex items-center gap-[20px] h-[]">
          <div className="flex items-center w-[700px]">
            <div className="w-[350px] flex justify-center h-[500px]">
              <Swiper
                direction="vertical"
                spaceBetween={30}
                slidesPerView={7}
                loop={true}
                mousewheel={true}
                navigation
                pagination={{
                  clickable: true,
                }}
                scrollbar={{
                  draggable: true,
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={cabbage} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cabbage1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cabbage2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cabbage3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cabbage2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cabbage1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cabbage} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={cabbage2} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="ms-[-6rem]">
              <img
                src={cabbage}
                alt="cabbage-img"
                width={"504px"}
                height={"556px"}
                className="object-cover"
              />
            </div>
          </div>
          <div className="product-details w-[570px] h-[576px]">
            <div className="product-title flex items-center gap-2 pb-2">
              <h1 className="font-bold text-3xl">Chinese Cabbage</h1>
              <div className="bg-soft_primary w-[100px] h-[32px] p-[10px] br-6">
                <p className="text-center flex items-center justify-center h-3">
                  In Stock
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="stars flex pb-1">
                  <span>
                    <FaStar className="text-yellow-400" />
                  </span>
                  <span>
                    <FaStar className="text-yellow-400" />
                  </span>
                  <span>
                    <FaStar className="text-yellow-400" />
                  </span>
                  <span>
                    <FaStar className="text-yellow-400" />
                  </span>
                  <span>
                    <FaStar className="text-yellow-400" />
                  </span>
                </div>
                <div>
                  <p>4 Review</p>
                </div>
              </div>
              <span className="w-[4px] h-[4px] rounded-full inline-block my-0 mx-[12px] bg-[#b2b2b2]">
                .
              </span>
              <div>
                <p className="text-[#4d4d4d]">SKU: 2,51,594</p>
              </div>
            </div>
            <div className="product-price flex items-center py-4 gap-2">
              <span className="text-[#b2b2b2] text-[20px] line-through">
                &#36;48.00
              </span>
              <span className="text-[#2c742f] font-bold text-xl">
                &#36;17.28
              </span>
              <span className="bg-[#ea4b481a] rounded-lg py-[4px] px-[7px]">
                <p className="text-sm text-[#ea4b48]">64% Off</p>
              </span>
            </div>
            <hr className="py-1" />
            <div className="flex justify-between">
              <div className="flex items-center py-3 gap-2">
                <span>Brand: </span>
                <a href="#">
                  <img src={brandimg} alt="brand-img" />
                </a>
              </div>
              <div className="flex items-center gap-1">
                <span>Share Item: </span>
                <div className="logos flex items-center gap-2">
                  <a href="" className="text-[#4d4d4d] py-[4px] px-[8px]">
                    <FaFacebookF className="text-lg" />
                  </a>
                  <a href="" className="text-[#4d4d4d] py-[4px] px-[8px]">
                    <FaTwitter className="text-lg" />
                  </a>
                  <a href="" className="text-[#4d4d4d] py-[4px] px-[8px]">
                    <FaPinterestP className="text-lg" />
                  </a>
                  <a href="" className="text-[#4d4d4d] py-[4px] px-[8px]">
                    <FaInstagram className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-content py-3">
              <p className="capitalize text-[#808080] text-[14px] w-[500px]">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.
              </p>
            </div>
            <hr className="pt-3" />
            <div className="flex gap-6 items-center py-3">
              <div className="w-[105px] rounded-full h-[43px] bg-[#e5e5e5] p-1">
                <div className="flex gap-3 items-center justify-center text-center">
                  <span className="counter-btn flex items-center justify-center cursor-pointer">
                    -
                  </span>
                  <span>0</span>
                  <span className="counter-btn flex items-center justify-center cursor-pointer">
                    +
                  </span>
                </div>
              </div>
              <div>
                <button className="flex gap-1 items-center add-to-cart">
                  <span className="flex items-center text-center ms-8">
                    Add To Cart
                  </span>
                  <span className="flex items-center text-center ms-4">
                    <CiShoppingBasket />
                  </span>
                </button>
              </div>
              <div className="fav-icon">
                <span>
                  <CiHeart />
                </span>
              </div>
            </div>
            <hr />
            <div className="flex gap-2 pt-2">
              <h3>Category: </h3>
              <a href="" className="text-[#808080]">
                Vegetables
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <h3>Tag: </h3>
              <span className="text-[#808080]">Vegetables</span>
              <span className="text-[#808080]">Healthy</span>
              <span className="text-[#808080]">Chinese</span>
              <span className="text-[#808080]">Cabbage</span>
              <span className="text-[#808080]">Green Cabbage</span>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ProductDetails;

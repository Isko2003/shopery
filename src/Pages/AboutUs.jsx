import React from "react";
import PageContainer from "../Components/Common/PageContainer";
import breedcrumb from "../../src/assets/imgs/breedcrumb.jpg";
import Man from "../../src/assets/imgs/Man.png";
import bannerImg from "../../src/assets/imgs/banner-lg-12.png";
import { FcOk } from "react-icons/fc";
import Deliver from "../../src/assets/imgs/Deliver.png";
import ClientTestimonials from "../Components/ClientTestimonials";
import AboutSlider from "../Components/AboutSlider/AboutSlider";
import { Link } from "react-router-dom";
import FoodStoreSlider from '../Components/FoodStoreSlider/FoodStoreSlider'
const AboutUs = () => {
  return (
    <div>
      <PageContainer>
        <div
          className=" flex justify-center items-center bg-cover bg-center bg-no-repeat h-[15vh] w-full"
          style={{
            backgroundImage: `url(${breedcrumb}) `,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="w-[80%] ">
            <ul className="flex justify-start items-center gap-4">
              <li className="text-[rgb(128,128,128)] text-[22px]">
                <Link to={"/"}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8L9 1L17 8V18H12V14C12 13.2044 11.6839 12.4413 11.1213 11.8787C10.5587 11.3161 9.79565 11 9 11C8.20435 11 7.44129 11.3161 6.87868 11.8787C6.31607 12.4413 6 13.2044 6 14V18H1V8Z"
                      stroke="#808080"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li className="text-[rgb(128,128,128)] text-[22px]"> > </li>
              <li className="text-[rgb(15,120,10)] font-medium text-[20px]">
                About
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <div className="w-[80%] grid grid-cols-1 grid-row-2 gap-4 justify-center items-center mb-[50px] mt-[50px] lg:grid-cols-2">
            <div className="flex flex-col justify-center items-start gap-4">
              <h5 className="text-[#1a1a1a] text-[28px] font-bold sm:text-[48px]">
                100% Trusted Organic Food Store
              </h5>
              <p className="text-[#666666] text-[15px] sm:text-[19px]">
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
                elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </p>
            </div>
            <div
              className="bg-cover bg-center h-[40vh] rounded-lg sm:h-[60vh]"
              style={{ backgroundImage: `url(${Man})` }}
            ></div>
          </div>
        </div>
        <div
          className="bg-cover bg-center w-[100%] flex justify-center items-center  "
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="w-[80%] grid grid-cols-1 gap-4 justify-center items-center mb-[50px] mt-[50px] xl:grid-cols-2">
            <div className="hidden xl:block"></div>
            <div className="flex flex-col justify-center items-start gap-4">
              <h5 className="text-[#fff] w-full text-[28px] font-bold md:text-[48px] ">
                100% Trusted Organic Food Store
              </h5>
              <p className="text-[#666666] w-[100%] text-[16px] md:text-[18px] xl:w-[100%]">
                Pellentesque a ante vulputate leo porttitor luctus sed eget
                eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
                feugiat.
              </p>
              <div className="w-[100%] md:hidden block"><FoodStoreSlider></FoodStoreSlider></div>
              <div className="md:flex justify-center items-center hidden">
                <div className="flex flex-col justify-center items-start gap-8">
                  <div className="flex justify-center items-center gap-4">
                    <div className="rounded-full bg-[#00b207] text-[#fff] w-[70px] h-[70px] flex justify-center items-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#)">
                          <path
                            d="M36.4905 0.538949C36.4372 0.343152 36.3046 0.178413 36.1246 0.0846357C35.7694 -0.103321 35.329 0.032269 35.141 0.387478C35.1405 0.388382 35.14 0.389287 35.1396 0.390192C35.1396 0.410294 31.4528 7.56272 20.1352 8.80906C18.6589 8.96657 17.2158 9.35173 15.8574 9.95088C13.4259 11.008 11.4178 12.8477 10.1523 15.1775C8.97092 17.3659 8.48162 19.8614 8.74919 22.3339C8.94629 24.1363 9.54826 25.8709 10.5102 27.4078C8.49992 28.8511 2.12345 33.8405 1.54852 39.1958C1.5063 39.5954 1.79618 39.9537 2.19581 39.9959C2.59555 40.0381 2.95367 39.7482 2.99589 39.3486C3.52257 34.5682 9.50504 29.9326 11.3705 28.5898C13.6099 31.3398 16.963 32.8917 20.5613 33.145C22.9832 33.3013 25.4079 32.8883 27.6414 31.9389C30.0659 30.9216 32.2072 29.3308 33.8812 27.3032C38.1951 22.0766 40.2496 13.2919 36.4905 0.538949ZM11.7887 26.6881C11.5113 26.2512 11.2667 25.7943 11.0569 25.3211C10.6155 24.3228 10.3307 23.2624 10.2126 22.1771C9.96638 19.9995 10.3869 17.7984 11.4188 15.865C12.5341 13.8152 14.3032 12.1975 16.4444 11.2696C17.6685 10.7366 18.9677 10.3962 20.296 10.2605C27.766 9.45636 32.1604 6.13143 34.428 3.71914C33.0957 8.10538 30.8019 12.1393 27.7138 15.5273L27.2715 11.0726C27.249 10.6713 26.9054 10.3643 26.5042 10.3868C26.103 10.4093 25.7959 10.7529 25.8184 11.1541C25.8195 11.1739 25.8214 11.1937 25.8241 11.2133L26.391 16.9385C23.0098 20.3679 18.3099 23.8135 11.7887 26.6881ZM32.7554 26.3705V26.3745C31.2345 28.2262 29.2863 29.6806 27.0785 30.6121C25.0483 31.4701 22.8448 31.8391 20.6458 31.6896C17.5845 31.5345 14.7118 30.1639 12.6651 27.8822C15.0635 26.8209 17.3826 25.5888 19.6045 24.1954L25.993 25.4016C26.39 25.4638 26.7623 25.1923 26.8245 24.7953C26.8845 24.4123 26.6338 24.0495 26.2543 23.9703L21.3453 23.0415C23.612 21.4848 25.7219 19.7115 27.6454 17.7466C27.6807 17.7162 27.713 17.6826 27.7419 17.6461C32.8157 12.3632 34.9747 7.13655 35.8753 3.92017C38.36 14.5181 36.4583 21.8917 32.7554 26.3705Z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath>
                            <rect width="40" height="40" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5  className="text-[#fff]">
                        100% Organic Food
                      </h5>
                      <p className="text-[#666666]">
                        100% healthy & Fresh food.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div className="rounded-full bg-[#00b207] text-[#fff] w-[70px] h-[70px] flex justify-center items-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#)">
                          <path
                            d="M31.1384 17.3704C30.9781 16.8758 30.5586 16.5221 30.0439 16.4474L23.9436 15.5609L21.2156 10.0337C20.9859 9.56711 20.52 9.27734 19.9999 9.27734C19.4798 9.27734 19.0139 9.56711 18.7843 10.0332L16.056 15.5609L9.95566 16.4474C9.44137 16.5221 9.02199 16.8755 8.86113 17.3702C8.70082 17.8641 8.83215 18.3965 9.20426 18.7598L13.6187 23.0625L12.5766 29.138C12.4886 29.6503 12.695 30.1584 13.1157 30.4641C13.3533 30.637 13.6314 30.7248 13.9114 30.7247C14.1268 30.7247 14.3434 30.6727 14.5435 30.5675L19.9999 27.6989L25.4559 30.5676C25.6496 30.6693 25.8677 30.7231 26.0865 30.7231C26.375 30.7231 26.6505 30.6336 26.8837 30.4641C27.3036 30.1587 27.5104 29.6509 27.4228 29.1384L27.0106 26.7347C26.9515 26.3909 26.6247 26.1599 26.2813 26.2189C25.9375 26.2779 25.7066 26.6045 25.7656 26.9482L26.1778 29.3515C26.1836 29.3862 26.1691 29.422 26.1409 29.4424C26.099 29.473 26.0686 29.4627 26.0434 29.4494L20.2934 26.4264C20.1095 26.3298 19.8898 26.3297 19.7056 26.4264L13.955 29.4495C13.9243 29.4657 13.8861 29.4629 13.8579 29.4424C13.8293 29.4216 13.8151 29.387 13.8211 29.3519L14.9194 22.9488C14.9546 22.7438 14.8868 22.5348 14.7379 22.3898L10.0859 17.8555C10.0607 17.8309 10.0514 17.7936 10.0621 17.7606C10.0729 17.7273 10.1023 17.7024 10.1369 17.6974L16.5659 16.7632C16.7717 16.7333 16.9495 16.6041 17.0415 16.4177L19.9169 10.5918C19.9482 10.5284 20.0509 10.5279 20.0825 10.5921L22.9578 16.4177C23.0497 16.6041 23.2276 16.7333 23.4333 16.7632L29.8624 17.6974C29.8969 17.7025 29.9261 17.727 29.9371 17.7609C29.9479 17.7939 29.9386 17.831 29.9136 17.8553L25.2615 22.3898C25.1127 22.5348 25.0447 22.744 25.08 22.9488L25.427 24.9719C25.4858 25.3156 25.8125 25.5466 26.1561 25.4876C26.5 25.4286 26.7309 25.102 26.6718 24.7583L26.381 23.0625L30.7954 18.7595C31.1678 18.3964 31.2991 17.8639 31.1384 17.3704Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.3"
                          ></path>
                          <path
                            d="M3.63141 19.3682H0.631562C0.282734 19.3682 0 19.6509 0 19.9997C0 20.3485 0.282734 20.6313 0.631562 20.6313H3.63141C3.98031 20.6313 4.26297 20.3485 4.26297 19.9997C4.26297 19.6509 3.98023 19.3682 3.63141 19.3682Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.3"
                          ></path>
                          <path
                            d="M39.3682 19.3682H36.3684C36.0195 19.3682 35.7368 19.651 35.7368 19.9997C35.7368 20.3485 36.0195 20.6313 36.3684 20.6313H39.3682C39.7171 20.6313 39.9997 20.3485 39.9997 19.9997C39.9997 19.6509 39.7171 19.3682 39.3682 19.3682Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.3"
                          ></path>
                          <path
                            d="M7.97907 31.1274L5.8579 33.2485C5.61118 33.495 5.61118 33.895 5.85782 34.1416C5.98118 34.265 6.14282 34.3266 6.30446 34.3266C6.46603 34.3266 6.62774 34.265 6.75095 34.1417L8.87212 32.0205C9.11884 31.7739 9.11884 31.374 8.8722 31.1274C8.62556 30.8807 8.22563 30.8807 7.97907 31.1274Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.3"
                          ></path>
                          <path
                            d="M33.2487 5.85694L31.1274 7.97804C30.8807 8.22468 30.8807 8.6246 31.1274 8.87124C31.2507 8.9946 31.4123 9.05624 31.574 9.05624C31.7356 9.05624 31.8973 8.9946 32.0205 8.87116L34.1417 6.75007C34.3884 6.50351 34.3884 6.10358 34.1418 5.85694C33.8951 5.61022 33.4952 5.61015 33.2487 5.85694Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.3"
                          ></path>
                          <path
                            d="M20.0002 35.7373C19.6513 35.7373 19.3687 36.0201 19.3687 36.3689V39.3686C19.3687 39.7175 19.6514 40.0002 20.0002 40.0002C20.3491 40.0002 20.6318 39.7174 20.6318 39.3686V36.3689C20.6318 36.02 20.3491 35.7373 20.0002 35.7373Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.3"
                          ></path>
                          <path
                            d="M20.0002 4.26297C20.3491 4.26297 20.6318 3.98016 20.6318 3.63141V0.631562C20.6318 0.282734 20.349 0 20.0002 0C19.6513 0 19.3687 0.282812 19.3687 0.631562V3.63141C19.3687 3.98023 19.6513 4.26297 20.0002 4.26297Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.3"
                          ></path>
                          <path
                            d="M32.0205 31.1274C31.774 30.8807 31.3741 30.8807 31.1274 31.1274C30.8807 31.3739 30.8807 31.7739 31.1274 32.0205L33.2487 34.1417C33.3719 34.265 33.5337 34.3267 33.6952 34.3267C33.8568 34.3267 34.0185 34.265 34.1418 34.1416C34.3884 33.895 34.3884 33.4951 34.1417 33.2485L32.0205 31.1274Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.3"
                          ></path>
                          <path
                            d="M7.979 8.87214C8.10236 8.9955 8.264 9.05714 8.42564 9.05714C8.5872 9.05714 8.74892 8.9955 8.8722 8.87229C9.11884 8.62565 9.11884 8.22573 8.8722 7.97909L6.75103 5.85783C6.50447 5.61119 6.10463 5.61119 5.85783 5.85783C5.61119 6.1044 5.61119 6.50432 5.85783 6.75096L7.979 8.87214Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.3"
                          ></path>
                        </g>
                        <defs>
                          <clipPath>
                            <rect width="40" height="40" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[#fff]">Customer Feedback</h5>
                      <p className="text-[#666666]">Our happy customer</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div className="rounded-full bg-[#00b207] text-[#fff] w-[70px] h-[70px] flex justify-center items-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.7021 26.3041C31.7247 26.3041 30.7962 26.687 30.0957 27.3793C29.3952 28.0798 29.0043 28.992 29.0043 29.9694C29.0043 30.9468 29.3871 31.859 30.0957 32.5595C30.8043 33.2518 31.7247 33.6346 32.7021 33.6346C34.7058 33.6346 36.3348 31.9893 36.3348 29.9694C36.3348 27.9494 34.7058 26.3041 32.7021 26.3041ZM32.7021 32.0056C31.5781 32.0056 30.6333 31.0771 30.6333 29.9694C30.6333 28.8617 31.5781 27.9331 32.7021 27.9331C33.8098 27.9331 34.7058 28.8454 34.7058 29.9694C34.7058 31.0934 33.8098 32.0056 32.7021 32.0056ZM33.6469 14.0948C33.5003 13.9564 33.3048 13.8831 33.1012 13.8831H28.9228C28.4749 13.8831 28.1083 14.2496 28.1083 14.6975V21.3764C28.1083 21.8244 28.4749 22.1909 28.9228 22.1909H35.5528C36.0008 22.1909 36.3673 21.8244 36.3673 21.3764V16.9048C36.3673 16.6768 36.2696 16.4569 36.0986 16.3021L33.6469 14.0948ZM34.7383 20.5619H29.7373V15.5039H32.7835L34.7383 17.2632V20.5619ZM12.8121 26.3041C11.8347 26.3041 10.9061 26.687 10.2057 27.3793C9.50519 28.0798 9.11423 28.992 9.11423 29.9694C9.11423 30.9468 9.49705 31.859 10.2057 32.5595C10.9143 33.2518 11.8347 33.6346 12.8121 33.6346C14.8157 33.6346 16.4447 31.9893 16.4447 29.9694C16.4447 27.9494 14.8157 26.3041 12.8121 26.3041ZM12.8121 32.0056C11.688 32.0056 10.7432 31.0771 10.7432 29.9694C10.7432 28.8617 11.688 27.9331 12.8121 27.9331C13.9198 27.9331 14.8157 28.8454 14.8157 29.9694C14.8157 31.0934 13.9198 32.0056 12.8121 32.0056ZM7.37935 27.306H5.74221V25.1394C5.74221 24.6914 5.37569 24.3249 4.92771 24.3249C4.47974 24.3249 4.11322 24.6914 4.11322 25.1394V28.1205C4.11322 28.5684 4.47974 28.935 4.92771 28.935H7.37935C7.82733 28.935 8.19385 28.5684 8.19385 28.1205C8.19385 27.6725 7.82733 27.306 7.37935 27.306ZM11.5089 22.867C11.5089 22.419 11.1423 22.0525 10.6944 22.0525H0.814498C0.366524 22.0525 0 22.419 0 22.867C0 23.3149 0.366524 23.6815 0.814498 23.6815H10.6944C11.1423 23.6815 11.5089 23.3231 11.5089 22.867ZM2.46793 19.9266L12.3478 19.9836C12.7958 19.9836 13.1623 19.6253 13.1704 19.1773C13.1786 18.7212 12.8121 18.3546 12.3641 18.3546L2.48422 18.2976C2.47607 18.2976 2.47607 18.2976 2.47607 18.2976C2.0281 18.2976 1.66158 18.656 1.66158 19.104C1.65343 19.5601 2.01996 19.9266 2.46793 19.9266ZM4.12951 16.2288H14.0094C14.4573 16.2288 14.8239 15.8623 14.8239 15.4143C14.8239 14.9663 14.4573 14.5998 14.0094 14.5998H4.12951C3.68153 14.5998 3.31501 14.9663 3.31501 15.4143C3.31501 15.8623 3.68153 16.2288 4.12951 16.2288ZM39.6986 15.1292L33.8668 10.2993C33.7202 10.1771 33.541 10.1119 33.3456 10.1119H26.4875V7.17973C26.4875 6.73176 26.121 6.36523 25.673 6.36523H4.92771C4.47974 6.36523 4.11322 6.73176 4.11322 7.17973V13.1419C4.11322 13.5898 4.47974 13.9564 4.92771 13.9564C5.37569 13.9564 5.74221 13.5898 5.74221 13.1419V7.99423H24.8666V27.306H18.1877C17.7398 27.306 17.3732 27.6725 17.3732 28.1205C17.3732 28.5684 17.7398 28.935 18.1877 28.935H28.1328C28.5807 28.935 28.9473 28.5684 28.9473 28.1205C28.9473 27.6725 28.5807 27.306 28.1328 27.306H26.4956V11.7409H33.0605L38.371 16.1392L38.314 27.2897H37.4669C37.0189 27.2897 36.6524 27.6562 36.6524 28.1042C36.6524 28.5522 37.0189 28.9187 37.4669 28.9187H39.1203C39.5683 28.9187 39.9348 28.5603 39.9348 28.1123L40 15.7645C39.9919 15.5202 39.886 15.284 39.6986 15.1292Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[#fff]">Free Shipping</h5>
                      <p className="text-[#666666]">
                        Free shipping with discount
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-8">
                  <div className="flex justify-center items-center gap-4">
                    <div className="rounded-full bg-[#00b207] text-[#fff] w-[70px] h-[70px] flex justify-center items-center">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#)">
                          <path
                            d="M30.3165 13.6891V12.305C30.3165 8.99244 29.1443 5.91429 27.0191 3.63025C24.8409 1.28571 21.8459 0 18.5787 0H17.4367C14.1695 0 11.1745 1.28571 8.99636 3.63025C6.87115 5.91429 5.69888 8.99244 5.69888 12.305V13.6891C3.11989 13.863 1.07031 16.0109 1.07031 18.6353V20.7983C1.07031 23.5286 3.29384 25.7521 6.02409 25.7521H8.81485C9.31401 25.7521 9.72241 25.3437 9.72241 24.8445V14.5815C9.72241 14.0824 9.31401 13.674 8.81485 13.674H7.51401V12.305C7.51401 6.32269 11.7796 1.81513 17.4291 1.81513H18.5712C24.2283 1.81513 28.4863 6.32269 28.4863 12.305V13.674H27.1854C26.6863 13.674 26.2779 14.0824 26.2779 14.5815V24.837C26.2779 25.3361 26.6863 25.7445 27.1854 25.7445H28.456C28.0854 30.479 24.8258 31.5756 23.3132 31.8252C22.8972 30.5471 21.6947 29.6244 20.2804 29.6244H18.0115C16.2569 29.6244 14.8275 31.0538 14.8275 32.8084C14.8275 34.563 16.2569 36 18.0115 36H20.288C21.7552 36 22.988 35.0017 23.3585 33.6555C24.0997 33.5496 25.272 33.2849 26.4367 32.6042C28.0779 31.6437 30.0216 29.6849 30.2787 25.737C32.8728 25.5782 34.93 23.4227 34.93 20.7908V18.6277C34.9375 16.0109 32.8955 13.8555 30.3165 13.6891ZM7.92241 23.9294H6.03922C4.30729 23.9294 2.90056 22.5227 2.90056 20.7908V18.6277C2.90056 16.8958 4.30729 15.4891 6.03922 15.4891H7.92241V23.9294ZM20.288 34.1849H18.0115C17.2552 34.1849 16.6426 33.5723 16.6426 32.816C16.6426 32.0597 17.2552 31.4471 18.0115 31.4471H20.288C21.0443 31.4471 21.6569 32.0597 21.6569 32.816C21.6569 33.5723 21.0443 34.1849 20.288 34.1849ZM33.1224 20.7908C33.1224 22.5227 31.7157 23.9294 29.9838 23.9294H28.1006V15.4891H29.9838C31.7157 15.4891 33.1224 16.8958 33.1224 18.6277V20.7908Z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath>
                            <rect width="36" height="36" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[#fff]">Great Support 24/7</h5>
                      <p className="text-[#666666]">
                        Instant access to Contact
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div className="rounded-full bg-[#00b207] text-[#fff] w-[70px] h-[70px] flex justify-center items-center">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#)">
                          <path
                            d="M32.3819 31.201L30.3103 7.85427C30.273 7.39226 29.8855 7.04202 29.4161 7.04202H25.0493C25.0418 3.15959 21.8822 0 17.9998 0C14.1174 0 10.9578 3.15959 10.9503 7.04202H6.58352C6.12151 7.04202 5.73401 7.39226 5.6893 7.85427L3.61768 31.201C3.61768 31.2308 3.61768 31.2532 3.61768 31.283C3.61768 33.8837 6.00973 36 8.94577 36H27.0538C29.9899 36 32.3819 33.8837 32.3819 31.283C32.3819 31.2532 32.3819 31.2308 32.3819 31.201ZM17.9998 1.78845C20.8986 1.78845 23.2534 4.14324 23.2608 7.04202H12.7388C12.7462 4.14324 15.101 1.78845 17.9998 1.78845ZM27.0538 34.2041H8.94577C7.00828 34.2041 5.42848 32.9149 5.40613 31.3128L7.40323 8.83047H10.9503V11.9677C10.9503 12.4595 11.3527 12.8619 11.8445 12.8619C12.3364 12.8619 12.7388 12.4595 12.7388 11.9677V8.83047H23.2608V11.9677C23.2608 12.4595 23.6632 12.8619 24.155 12.8619C24.6469 12.8619 25.0493 12.4595 25.0493 11.9677V8.83047H28.5964L30.5935 31.3202C30.5711 32.9149 28.9913 34.2041 27.0538 34.2041Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M21.7183 18.6145L16.4424 23.8904L14.2888 21.7369C13.9385 21.3866 13.3722 21.3866 13.022 21.7369C12.6717 22.0871 12.6717 22.6534 13.022 23.0037L15.809 25.7907C15.9803 25.9621 16.2114 26.0515 16.4424 26.0515C16.6734 26.0515 16.8969 25.9621 17.0758 25.7907L22.9851 19.8813C23.3353 19.5311 23.3353 18.9648 22.9851 18.6145C22.6349 18.2717 22.0685 18.2717 21.7183 18.6145Z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath>
                            <rect width="36" height="36" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[#fff]">100% Sucure Payment</h5>
                      <p className="text-[#666666]">
                        We ensure your money is save
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div className="rounded-full bg-[#00b207] text-[#fff] w-[70px] h-[70px] flex justify-center items-center">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#)">
                          <path
                            d="M34.5561 8.48713C34.5561 8.35036 34.5257 8.21359 34.465 8.08442C34.3434 7.82609 34.1078 7.65133 33.8495 7.59814L18.3721 0.0911777C18.1213 -0.0303926 17.825 -0.0303926 17.5743 0.0911777L1.9449 7.66653C1.64097 7.81089 1.44342 8.11482 1.42822 8.45673V8.46433C1.42822 8.47193 1.42822 8.47953 1.42822 8.49472V27.5053C1.42822 27.8548 1.62577 28.1739 1.9449 28.3259L17.5743 35.9012C17.5819 35.9012 17.5819 35.9012 17.5895 35.9088C17.6123 35.9164 17.6351 35.924 17.6579 35.9392C17.6655 35.9392 17.6731 35.9468 17.6882 35.9468C17.711 35.9544 17.7338 35.962 17.7566 35.9696C17.7642 35.9696 17.7718 35.9772 17.7794 35.9772C17.8022 35.9848 17.8326 35.9848 17.8554 35.9924C17.863 35.9924 17.8706 35.9924 17.8782 35.9924C17.9086 35.9924 17.9466 36 17.977 36C18.0074 36 18.0454 36 18.0758 35.9924C18.0834 35.9924 18.091 35.9924 18.0985 35.9924C18.1213 35.9924 18.1517 35.9848 18.1745 35.9772C18.1821 35.9772 18.1897 35.9696 18.1973 35.9696C18.2201 35.962 18.2429 35.9544 18.2657 35.9468C18.2733 35.9468 18.2809 35.9392 18.2961 35.9392C18.3189 35.9316 18.3417 35.924 18.3645 35.9088C18.3721 35.9088 18.3721 35.9088 18.3797 35.9012L34.0546 28.3031C34.3662 28.1511 34.5713 27.832 34.5713 27.4825V8.50992C34.5561 8.50232 34.5561 8.49472 34.5561 8.48713ZM17.9694 1.92233L31.5245 8.49472L26.5325 10.9185L12.9774 4.34614L17.9694 1.92233ZM17.9694 15.0671L4.41429 8.49472L10.8879 5.35669L24.443 11.9291L17.9694 15.0671ZM3.25178 9.96117L17.0576 16.6551V33.6218L3.25178 26.9278V9.96117ZM18.8812 33.6218V16.6551L25.3624 13.5095V17.9468C25.3624 18.4483 25.7727 18.8586 26.2742 18.8586C26.7756 18.8586 27.1859 18.4483 27.1859 17.9468V12.6205L32.7326 9.93077V26.8974L18.8812 33.6218Z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath>
                            <rect width="36" height="36" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[#fff]">100% Organic Food</h5>
                      <p className="text-[#666666]">
                        100% healthy & Fresh food.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] bg-[#fff] flex justify-center items-center">
          <div className="w-[80%] grid grid-cols-1 grid-rows-2 lg:grid-cols-2  lg:grid-rows-1 justify-center items-center mb-[50px] mt-[50px]">
            <div className="flex flex-col justify-center items-start gap-4">
              <h5 className="text-[#1a1a1a] text-[28px] font-bold sm:text-[48px]">
                We Delivered, You Enjoy Your Order.
              </h5>
              <p className="text-[#666666] text-[16px] sm:text-[20px]">
                Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
                ultrices consectetur velit dapibus eu. Mauris sollicitudin
                dignissim diam, ac mattis eros accumsan rhoncus. Curabitur
                auctor bibendum nunc eget elementum.
              </p>
              <div className="flex justify-start items-center gap-2 ">
                <FcOk />
                Sed in metus pellentesque.
              </div>
              <div className="flex justify-start items-center   gap-2 ">
                <FcOk />
                Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
              </div>
              <div className="flex justify-start items-center  gap-2 ">
                <FcOk />
                Maecenas ut nunc fringilla erat varius.
              </div>
              <button className="text-[14px] leading-[16.8px] px-[32px] py-[14px] font-semibold rounded-[43px] text-white bg-[#00b207] inline-block">
                Shop Now <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div
              className="bg-cover bg-center h-[70%] sm:h-[100%]"
              style={{ backgroundImage: `url(${Deliver})` }}
            ></div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center pb-[50px]"
          style={{
            background: "linear-gradient(180deg, #f2f2f2 0%, #ffffff 100%)",
          }}
        >
          <h1 className="text-[28px] text-[#1a1a1a] font-bold mt-[50px] md:text-[48px]">
            Our Awesome Team
          </h1>
          <p className="text-center text-[16px] text-[#808080] w-[70%] mb-[50px] md:w-[45%]">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>
    <AboutSlider></AboutSlider>
          
        </div>
        <div>
          <ClientTestimonials></ClientTestimonials>
        </div>
      </PageContainer>
    </div>
  );
};

export default AboutUs;

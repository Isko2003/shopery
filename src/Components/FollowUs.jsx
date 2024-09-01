import React from "react";
import AutoPlaySlider from "./ReactSlick/AutoPlaySlider";
function FollowUs() {
  return (
    <>
      {" "}
      <div className="flex flex-col justify-center items-center gap-8 bg-white w-[100%]">
        <div className="p-4 mt-4 w-[80%]">
          <AutoPlaySlider></AutoPlaySlider>
        </div>
        <h1 className="text-[1.2rem] md:text-3xl font-black">Follow us on Instagram</h1>
        <div className="w-[80%]  justify-between items-center gap-4 mb-16 mt-4 grid grid-cols-2 md:grid-cols-3  xl:grid-cols-6  ">
          <div className="relative  h-[18vh]  overflow-hidden rounded-lg flex justify-center items-center cursor-pointer xs:h-[25vh]  ">
            <div className="absolute inset-0 bg-[url('https://shopery.netlify.app/main/src/images/instagram/img-01.jpg')] bg-cover bg-center transition-transform duration-300 transform hover:scale-110"></div>
            <i className="fa-brands fa-instagram text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-200 z-10"></i>
          </div>
          <div className="relative  h-[18vh]  overflow-hidden rounded-lg flex justify-center items-center cursor-pointer  xs:h-[25vh] ">
            <div className="absolute inset-0 bg-[url('https://shopery.netlify.app/main/src/images/instagram/img-02.png')] bg-cover bg-center transition-transform duration-300 transform hover:scale-110"></div>
            <i className="fa-brands fa-instagram text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-200 z-10"></i>
          </div>
          <div className="relative  h-[18vh] overflow-hidden rounded-lg flex justify-center items-center cursor-pointer  xs:h-[25vh] ">
            <div className="absolute inset-0 bg-[url('https://shopery.netlify.app/main/src/images/instagram/img-03.png')] bg-cover bg-center transition-transform duration-300 transform hover:scale-110"></div>
            <i className="fa-brands fa-instagram text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-200 z-10"></i>
          </div>
          <div className="relative  h-[18vh] overflow-hidden rounded-lg flex justify-center items-center cursor-pointer  xs:h-[25vh] ">
            <div className="absolute inset-0 bg-[url('https://shopery.netlify.app/main/src/images/instagram/img-04.png')] bg-cover bg-center transition-transform duration-300 transform hover:scale-110"></div>
            <i className="fa-brands fa-instagram text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-200 z-10"></i>
          </div>
          <div className="relative  h-[18vh] overflow-hidden rounded-lg flex justify-center items-center cursor-pointer  xs:h-[25vh] ">
            <div className="absolute inset-0 bg-[url('https://shopery.netlify.app/main/src/images/instagram/img-05.png')] bg-cover bg-center transition-transform duration-300 transform hover:scale-110"></div>
            <i className="fa-brands fa-instagram text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-200 z-10"></i>
          </div>
          <div className="relative  h-[18vh] overflow-hidden rounded-lg flex justify-center items-center cursor-pointer  xs:h-[25vh] ">
            <div className="absolute inset-0 bg-[url('https://shopery.netlify.app/main/src/images/instagram/img-06.png')] bg-cover bg-center transition-transform duration-300 transform hover:scale-110"></div>
            <i className="fa-brands fa-instagram text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-200 z-10"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default FollowUs;

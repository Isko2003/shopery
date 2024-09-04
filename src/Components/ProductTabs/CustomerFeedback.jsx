import React from "react";
import { FaCheck } from "react-icons/fa6";
import manwithbox from "../../assets/imgs/man-with-box.png";
import { FaPlay } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
const CustomerFeedback = () => {
  return (
    <section className="flex gap-5 w-[85%] mx-auto py-1">
      <div className="customer-feedback"></div>
      <div>
        <div className="man-img">
          <div className="w-[451px] h-[300px] cursor-pointer relative">
            <img
              src={manwithbox}
              alt="man-with-box"
              width={"inherit"}
              height={"inherit"}
              className="object-cover"
            />
            <div className="play-btn absolute top-[50%] left-[50%] translate-x-[-30%] translate-y-[-50%]">
              <a href="https://youtu.be/JkaxUblCGz0" className="video-url">
                <FaPlay className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="w-[451px] discount">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <span>
                  <MdDiscount className="text-2xl text-soft_primary" />
                </span>
                <div>
                  <h3 className="py-1">64% Discount</h3>
                  <p className="text-[#808080]">Save Your 64% Money With Us</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <MdDiscount className="text-2xl text-soft_primary" />
                </span>
                <div>
                  <h3 className="py-1">100% Organic</h3>
                  <p className="text-[#808080]">100% Organic Vegetables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;

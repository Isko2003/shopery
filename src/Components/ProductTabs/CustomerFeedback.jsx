import React from "react";
import { FaCheck } from "react-icons/fa6";
import manwithbox from "../../assets/imgs/man-with-box.png";
import { FaPlay } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import dianne from "../../assets/imgs/dianne.png";
import robert from "../../assets/imgs/robert.png";
import jacob from "../../assets/imgs/jacob.png";
import ralph from "../../assets/imgs/ralph.png";
import { FaStar } from "react-icons/fa";

const CustomerFeedback = () => {
  return (
    <section className="flex gap-5 w-[85%] mx-auto py-1 justify-between">
      <div className="customer-feedback">
        <section className="mb-[40px] w-[700px]">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <div className="customer-img w-[50px] h-[50px] rounded-full">
                <img
                  src={dianne}
                  alt="customer"
                  width={"inherit"}
                  height={"inherit"}
                  className="object-cover"
                />
              </div>
              <div className="customer-info">
                <div>
                  <h3>Jane Cooper</h3>
                </div>
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
              </div>
            </div>
            <div>
              <p className="text-[#808080]">2 Min Ago</p>
            </div>
          </div>
          <div className="customer-text">
            <p className="text-[#808080]">
              Duis at ullamcorper nulla, eu dictum eros.
            </p>
          </div>
          <hr />
        </section>
        <section className="mb-[40px]">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <div className="customer-img w-[50px] h-[50px] rounded-full">
                <img
                  src={robert}
                  alt="customer"
                  width={"inherit"}
                  height={"inherit"}
                  className="object-cover"
                />
              </div>
              <div className="customer-info">
                <div>
                  <h3>Kristin Watson</h3>
                </div>
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
              </div>
            </div>
            <div>
              <p className="text-[#808080]">30 Apr, 2021</p>
            </div>
          </div>
          <div className="customer-text">
            <p>
              Keep the soil evenly moist for the healthiest growth. If the sun
              gets too hot, Chinese cabbage tends to "bolt" or go to seed; in
              long periods of heat, some kind of shade may be helpful. Watch out
              for snails, as they will harm the plants.
            </p>
          </div>
          <hr />
        </section>
        <section className="mb-[40px]">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <div className="customer-img w-[50px] h-[50px] rounded-full">
                <img
                  src={jacob}
                  alt="customer"
                  width={"inherit"}
                  height={"inherit"}
                  className="object-cover"
                />
              </div>
              <div className="customer-info">
                <div>
                  <h3>Jacob Jones</h3>
                </div>
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
              </div>
            </div>
            <div>
              <p className="text-[#808080]">2 Min Ago</p>
            </div>
          </div>
          <div className="customer-text">
            <p>
              Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia
              lacus.
            </p>
          </div>
          <hr />
        </section>
        <section className="mb-[40px]">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <div className="customer-img w-[50px] h-[50px] rounded-full">
                <img
                  src={ralph}
                  alt="customer"
                  width={"inherit"}
                  height={"inherit"}
                  className="object-cover"
                />
              </div>
              <div className="customer-info">
                <div>
                  <h3>Ralph Edwards</h3>
                </div>
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
              </div>
            </div>
            <div>
              <p className="text-[#808080]">2 Min Ago</p>
            </div>
          </div>
          <div className="customer-text">
            <p>
              200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom
              Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's
              Choice, Bok Choi, from USA
            </p>
          </div>
          <hr />
        </section>
      </div>
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

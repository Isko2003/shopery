import React from "react";
import { FaCheck } from "react-icons/fa6";
import manwithbox from "../../assets/imgs/man-with-box.png";
import { FaPlay } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

const Description = () => {
  return (
    <section className="xlg:flex gap-5 w-[85%] mx-auto py-1 description-section">
      <div className="description-text">
        <div className="py-1">
          <p className="py-1 xlg:w-[500px]">
            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
            posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
            vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
            porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
            Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus.
            Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
            scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
            commodo quis, egestas elementum leo. Donec convallis mollis enim.
            Aliquam id mi quam. Phasellus nec fringilla elit.
          </p>
          <p className="py-1">
            Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
            iaculis, metus faucibus elementum tincidunt, turpis mi viverra
            velit, pellentesque tristique neque mi eget nulla. Proin luctus
            elementum neque et pharetra.
          </p>
          <ul className="py-1">
            <li className="flex gap-2">
              <span>
                <FaCheck />
              </span>
              <p>100 g of fresh leaves provides.</p>
            </li>
            <li className="flex gap-2">
              <span>
                <FaCheck />
              </span>
              <p>100 g of fresh leaves provides.</p>
            </li>
            <li className="flex gap-2">
              <span>
                <FaCheck />
              </span>
              <p>100 g of fresh leaves provides.</p>
            </li>
            <li className="flex gap-2">
              <span>
                <FaCheck />
              </span>
              <p>100 g of fresh leaves provides.</p>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            totam eos nostrum suscipit molestiae dolorem maxime, reprehenderit
            labore praesentium repudiandae a? Minus consequuntur ad dignissimos
            error corporis tenetur ducimus odit.
          </p>
        </div>
      </div>
      <div className="man-img-wrapper">
        <div className="man-img">
          <div className="mb-7 cursor-pointer relative">
            <div>
              <img
                src={manwithbox}
                alt="man-with-box"
                width={"inherit"}
                height={"inherit"}
                className="object-cover"
              />
            </div>
            <div className="play-btn absolute top-[50%] left-[50%] translate-x-[-30%] translate-y-[-50%]">
              <a href="https://youtu.be/JkaxUblCGz0" className="video-url">
                <FaPlay className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="xlg:w-[350px] xl:w-[451px] discount py-7">
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

export default Description;

import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import robert from "../assets/imgs/robert.png";
import { FaStar } from "react-icons/fa";

const ClientCard = ({ client }) => {
  const { img, text, clientName, position } = client;

  return (
    <div className="bg-[white] flex justify-between client-box">
      <div className="w-[350px] h-[35vh]">
        <div className="quotes">
          <RiDoubleQuotesR className="text-4xl text-[#649e66]" />
        </div>
        <div className="client-text">
          <p className="w-[320px] py-4 text-sm text-left">{text}</p>
        </div>
        <div className="client-info flex justify-between items-center">
          <div className="flex gap-4">
            <div className="rounded-full">
              <img src={img} alt="client" />
            </div>
            <div className="flex flex-col justify-center">
              <h3>{clientName}</h3>
              <p>{position}</p>
            </div>
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
    </div>
  );
};

export default ClientCard;

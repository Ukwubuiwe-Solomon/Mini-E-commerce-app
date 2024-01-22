import React from "react";
import bannerImg from "/banner.png";
import {FaShoppingBag} from 'react-icons/fa'

const Banner = () => {
  return (
    <div className="bg-primaryBG xl:px-28 px-4 py-12">
      <div className="py-28 flex flex-col md:flex-row justify-between items-center gap-14">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="bg-Black hover:bg-orange-500 py-2 px-6 rounded-sm font-semibold text-white flex items-center gap-2"><FaShoppingBag className="inline-flex" />Shop Now</button>
        </div>
        <div className="md:w-1/2">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

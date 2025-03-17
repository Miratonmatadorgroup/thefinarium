import React, { useEffect, useRef } from 'react';
import looper from '../../assets/images/looper.png'
import sparkling from '../../assets/images/spark.png'
import ringimg from '../../assets/images/ring.png'
import trustimg from '../../assets/images/trust.png'
import demoimg from '../../assets/images/demo.png'
import arrowimg from '../../assets/images/arrow.png'
import world3dimg from '../../assets/images/pngtree.png'
import balanceimg from '../../assets/images/Balance.png'
import cardimg from '../../assets/images/card.png'
import NavBar from './NavBar';



const HeroSection = () => {

  return (
    <div className="w-full mb-[7rem] lg:mb-[20rem]  " >

      {/* background bg */}
      <div className='rectbg  overflow-hidden '>
        {/* The animated background */}
        <div
          className="absolute top-0 left-0 w-[100%] lg:h-full h-[95dvh] md:h-[70dvh] bg-cover bg-start z-0"
          style={{
            backgroundImage: `url(${looper})`,
            animation: 'moveBackground 5s ease-in-out infinite alternate'
          }}
        >
        </div>

        {/* Inline keyframes  */}
        <style jsx>{`
        @keyframes moveBackground {
          0% {
            transform: translateX(0) scale(1.05);
          }
          100% {
            transform: translateX(-10%) scale(1.15);
          }
        }
      `}</style>
      </div>
      <div className="w-full z-40 flex items-start flex-col gap-20 lg:gap-32">
        {/* Navbar component */}
        <NavBar />
        <div className="w-11/12 mx-auto flex-col  lg:flex-row flex z-10 items-center justify-between gap-5 relative">
          <div className="flex flex-col lg:w-[50%] w-full  mx-auto mt-8 lg:mt-0 items-start gap-8">
            <div className="w-11/12 mx-auto lg:w-full">
              <div className="w-fit px-3 py-1.5 rounded-full bg-white flex items-center gap-2">
                <img src={sparkling} alt="sparkling img" />
                <div className="text-[16px] brightness-100">#1 Top Fintech Banking Excellence</div>
              </div>
            </div>
            <div className="relative md:w-11/12 lg:w-full mx-auto ">
              <h1 className='font-bold  text-white text-center md:text-start leading-[1.2] text-[36px] md:text-[58px] lg:text-[61px] relative z-20'>
                The Future of Finance, Embedded
              </h1>
              <img src={ringimg}
                className='absolute z-10 w-[9.5rem] md:w-fit md:-top-10 -top-5 -right-2 md:right-[5rem] lg:-right-6' alt="ring vector" />
            </div>
            <div className="w-11/12 mx-auto lg:w-full flex flex-col items-start gap-3 lg:gap-5 ">
              <div className="text-white text-center text-[16px] md:text-start w-11/12 mx-auto md:mx-0 md:w-10/12">
                Offer your customers banking, payments, lending, and financial services—all seamlessly integrated into your product.
              </div>
              <div className="flex items-center lg:gap-4 gap-2">
                <img src={trustimg} alt="trustees image" />
                <div className="text-white text-[16px]">Trusted by top 1% founders</div>
              </div>
              <div className="flex items-center gap-4 cursor-pointer">
                <div className="w-fit py-2 px-3 hover:scale-105 transition duration-500 md:py-3 lg:px-4 flex gap-2 bg-[#262626] rounded-full">
                  <img src={demoimg} alt="demo vector" />
                  <div className="text-white">Try Live Demo</div>
                </div>
                <div className="w-fit pl-5 hover:scale-105 transition duration-500 pr cursor-pointer flex gap-2 items-center bg-transparent border border-[#262626] rounded-full">
                  <div className="font-semibold">Get Started</div>
                  <img src={arrowimg} alt="arrow vector" className='pr-1 py-0.5 w-10' />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] w-full md:w-fit md:ml-auto ">
            <div className="w-full relative flex items-center justify-center">
              <img src={world3dimg} alt="world 3d image"
                className='lg:h-[24rem] md:-mt-[7rem] lg:-mt-[9rem] mt-7 lg:mr-20 w-[18rem] md:w-[27rem] lg:w-fit' />
              <img src={balanceimg} alt="credit card image"
                className='absolute lg:-top-[4.5rem] md:-top-[1rem] md:w-[300px] top-[5.9rem] z-20 lg:w-[379px] w-[211px] right-8 md:right-3 lg:right-8' />
              <img src={cardimg} alt="credit card image"
                className='absolute lg:top-[6.5rem] lg:h-[355px] md:top-[8rem] top-[12.4rem] md:w-[800px] lg:right-10 lg:w-[568px] w-[290px] md:right-3' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
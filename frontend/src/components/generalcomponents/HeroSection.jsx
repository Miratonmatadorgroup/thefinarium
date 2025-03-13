import React from 'react';
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
        <div className="w-full overflow-hidden">
      <div className='w-full rectbg h-[80dvh]  z-40 overflow-hidden relative'>
        {/* The animated background */}
        <div
          className="absolute top-0 left-0 w-[100%] h-full bg-cover bg-start z-0"
          style={{
            backgroundImage: `url(${looper})`,
            animation: 'moveBackground 5s ease-in-out infinite alternate'
          }}
        >
        </div>
        <div className="w-11/12 mx-auto mt-10 flex items-start flex-col gap-20">
        {/* Navbar component */}
          <NavBar/>

          <div className="w-full flex z-50 items-center justify-between gap-5 relative">
            <div className="flex flex-col w-1/2 items-start gap-8">
              <div className="w-fit px-3 py-1.5 rounded-full bg-white flex items-center gap-2">
                <img src={sparkling} alt="sparkling img" />
                <div className="">#1 Top Fintech Banking Excellence</div>
              </div>
              <div className="relative">
                <h1 className='font-bold text-white leading-[1.2] text-[61px] relative z-50'>
                  The Future of Finance, Embedded
                </h1>
                <img src={ringimg} className='absolute z-10 -top-12 -right-5' alt="ring vector" />
              </div>
              <div className="flex flex-col items-start gap-5 ">
                <div className="text-white">
                  Offer your customers banking, payments, lending, and financial services—all seamlessly integrated into your product.
                </div>
                <div className="flex items-center gap-4">
                  <img src={trustimg} alt="trustees image" />
                  <div className="text-white">Trusted by top 1% founders</div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-fit py-3 px-4 flex gap-2 bg-[#262626] rounded-full">
                    <img src={demoimg} alt="demo vector" />
                    <div className="text-white">Try Live Demo</div>
                  </div>
                  <div className="w-fit pl-5 pr cursor-pointer flex gap-2 items-center bg-transparent border border-[#262626] rounded-full">
                    <div className="font-semibold">Get Started</div>
                    <img src={arrowimg} alt="arrow vector" className='pr-1 py-0.5' />
                  </div>
                </div>
              </div>
            </div>


            <div className="w-1/2">
              <div className="w-full relative">
                <img src={world3dimg} alt="world 3d image" className='h-[26rem] -mt-12' />
                <img src={balanceimg} alt="credit card image" className='absolute top-32 z-50 right-10' />
                <img src={cardimg} alt="credit card image" className='absolute top-[19rem] right-10' />
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default HeroSection;
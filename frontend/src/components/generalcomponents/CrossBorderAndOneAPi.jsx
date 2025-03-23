import React, { useEffect, useRef } from 'react'
import crossborderimg from '../../assets/images/crossborder.png'
import codesimg from '../../assets/images/codes.png'
import mobilecodesimg from '../../assets/mobile/codes-mobile.png'
import checkboximg from '../../assets/images/checkbox.png'
import mapimg from '../../assets/images/map.png'
import topimg from '../../assets/images/line-curve-top.png'
import bottomimg from '../../assets/images/line-curve-bottom.png'
import rightimg from '../../assets/images/line-curve-right.png'
import leftimg from '../../assets/images/line-curve-left.png'
import nijaimg from '../../assets/images/nija.png'
import usaimg from '../../assets/images/usaimg.png'
import ukayimg from '../../assets/images/ukay.png'
import canadaimg from '../../assets/images/canada.png'
import RoundOutlineButton from './RoundOutlineButton'
import RoundArrowButton from './RoundArrowButton'
import anime from "animejs";
import { useInView } from "react-intersection-observer";

const CrossBorderAndOneAPi = () => {
  const lead = `leading-[1.2]`

  const optionsOne = [
    {
      title: 'Send & Receive Worldwide ',
      desc: ' → Enable users to send and receive payments across multiple currencies.'
    },
    {
      title: 'Fast, Cost-Effective Transfers ',
      desc: ' → Competitive FX rates and real-time settlement options.'
    },
    {
      title: 'Multi-Currency Accounts ',
      desc: '→ Let customers hold, convert, and transact in multiple currencies.'
    },
    {
      title: 'Seamless API Integration ',
      desc: ' → Power international payments within your platform in days, not months.'
    },
  ]

  const optionsTwo = [
    {
      title: 'Issue & manage cards  ',
      desc: ' → Branded debit, credit, and prepaid cards'
    },
    {
      title: 'Create accounts ',
      desc: '→ NDIC/FDIC-insured checking & savings accounts'
    },
    {
      title: 'Move money',
      desc: ' → Instant payments, ACH, wire, and faster settlements'
    },
    {
      title: 'Lend smarter',
      desc: '→ Offer loans, BNPL, and credit products'
    },
  ]

  const usaRef = useRef(null);
  const canadaRef = useRef(null);
  const nigeriaRef = useRef(null);
  const ukRef = useRef(null);

  const { ref: containerRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      // Shake animation for USA image
      anime({
        targets: usaRef.current,
        translateY: [-5, 5],
        duration: 1000,
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
      });

      anime({
        targets: canadaRef.current,
        translateX: [-5, 5],
        duration: 1000,
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        delay: 200, 
      });

      anime({
        targets: nigeriaRef.current,
        translateY: [-5, 5],
        duration: 1000,
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        delay: 400, 
      });

      anime({
        targets: ukRef.current,
        translateX: [-5, 5],
        duration: 1000,
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        delay: 600, 
      });
    }
  }, [inView]);
  return (
    <div className='w-full'>
      <div className="w-11/12 mx-auto">
        <div className="flex items-center flex-col text-[var(--color-dark)] lg:flex-row mb-32 lg:mb-40 gap-16 justify-between">
          <div className="w-full md:w-1/2 h-[392px] lg:h-[590px] relative" ref={containerRef}>
            <div
              style={{ backgroundImage: `url(${mapimg})` }}
              className="absolute inset-0 bg-cover bg-center bg-[#fcfcfc] rounded-4xl z-0"
            ></div>

            <div className="absolute inset-0 flex items-center justify-center w-full">
              <div className="relative w-[300px] h-[300px]">
                <img src={topimg} alt="line top image" className="absolute top-10 left-28 lg:left-24 transform -translate-x-1/2 animate-pulse" />
                <img src={rightimg} alt="line right image" 
                className="absolute -right-5 md:-right-6 lg:top-[6.2rem] top-[6rem]" />
                <img src={bottomimg} alt="line bottom image" className="absolute bottom-0 right-5 transform -translate-x-1/2 animate-pulse" />
                <img src={leftimg} alt="line left image" className="absolute -left-8 lg:-left-10 top-32" />

                {/* Country Images with Refs */}
                <img
                  src={usaimg}
                  alt="usa image"
                  className="absolute country-flag top-17 lg:top-15 w-2/3 lg:w-fit -left-16 lg:-left-18"
                  ref={usaRef}
                />
                <img
                  src={canadaimg}
                  alt="canada image"
                  className="absolute country-flag w-2/3 lg:w-fit -right-15 lg:-right-24 top-8"
                  ref={canadaRef}
                />
                <img
                  src={nijaimg}
                  alt="nija image"
                  className="absolute country-flag w-2/3 lg:w-fit -right-[4rem] lg:-right-[7.5rem] bottom-14 md:bottom-10"
                  ref={nigeriaRef}
                />
                <img
                  src={ukayimg}
                  alt="uk image"
                  className="absolute country-flag w-2/3 lg:w-fit -bottom-10 left-2"
                  ref={ukRef}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="w-full flex lg:items-start items-center flex-col gap-5">
              <RoundOutlineButton text={`Effortless & Seamless`} />
              <div className={`${lead} text-center w-full  lg:text-start font-bold text-[22px] lg:text-[39px] lg:w-10/12`}>Cross-Border Transfers Made Easy</div>
              <div className="lg:text-[16px] text-[#6D6D6D] text-[13px] text-start">Global payments, simplified. Our APIs empower you to seamlessly move money across borders with fast, secure, and compliant international transfers.</div>
              <div className="grid grid-cols-1 gap-5 w-full">
                {optionsOne.map((item, i) => (
                  <div key={i} className="w-full flex items-start gap-2">
                    <img src={checkboximg} alt="" />
                    <div className="text-[16px]"><span className={`${lead} font-bold `}>{item.title}</span> <span>{item.desc}</span></div>
                  </div>
                ))}
              </div>
              <RoundArrowButton title={`Start Building`} text={`text-white`} />
            </div>
          </div>
        </div>

        <div className="flex items-center text-[var(--color-dark)] flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
          <div className="w-full lg:w-1/2">
            <div className="w-full flex lg:items-start items-center flex-col gap-5">
              <RoundOutlineButton text={`Build & Launch`} />
              <div className={`${lead} font-bold text-[25px] lg:text-[39px] lg:w-10/12`}>One API, Endless Possibilities</div>
              <div className="text-[16px] text-[#6D6D6D] md:self-start ">Seamlessly integrate financial services into your platform with just a few lines of code.</div>
              <div className="grid grid-cols-1 gap-5 w-full">
                {optionsTwo.map((item, i) => (
                  <div key={i} className="w-full flex items-start gap-2">
                    <img src={checkboximg} alt="" />
                    <div className="text-[16px]"><span className={`${lead} font-bold `}>{item.title}</span> <span>{item.desc}</span></div>
                  </div>
                ))}
              </div>
              <RoundArrowButton title={`View Developer Docs`} text={`text-white`} />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="w-full">
              {/* Desktop Image */}
              <img src={codesimg} alt="cross border image" className="w-full lg:h-[590px] hidden sm:hidden lg:block object-cover" />

              {/* Mobile Image */}
              <img src={mobilecodesimg} alt="cross border image" className="w-full lg:h-[590px] block lg:hidden object-cover" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CrossBorderAndOneAPi
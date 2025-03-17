import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoundOutlineButton from './RoundOutlineButton';
import testimg1 from '../../assets/images/test-img1.png';
import testimg2 from '../../assets/images/test-img2.png';
import chevron from '../../assets/images/chevron.png';
import solar_star from '../../assets/images/solar_star.png';
import demoimg from '../../assets/images/demo.png'
import solar_star_dark from '../../assets/images/solar_star-dark.png';
import trustimg from '../../assets/images/trust.png'
import RoundArrowButton from './RoundArrowButton';
import { IoArrowForwardSharp } from 'react-icons/io5';

const Testimonials = () => {
    const sliderRef = useRef(null);
    const [, setCurrentSlide] = useState(0);
    const lead = `leading-[1.2] text-[25px] md:text-[39px]  font-bold`;

    const testimonials = [
        {
            img: testimg1,
            name: 'Shade',
            job_title: 'CEO of Finarium USA',
            content: `FInarium has revolutionized the way we integrate with our banking partners. Their platform is incredibly intuitive, and the support team is always available to help. Since implementing Finarium, we've seen a significant reduction in manual errors and an increase in overall efficiency. We couldn't be happier with the results!`
        },
        {
            img: testimg2,
            name: 'Emmanuel Maks',
            job_title: 'CEO, Marasoftpay',
            content: `Marasoftpay has revolutionized the way we integrate with our banking partners. Their platform is incredibly intuitive, and the support team is always available to help. Since implementing Finarium, we've seen a significant reduction in manual errors and an increase in overall efficiency. "`
        },

        
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        afterChange: (index) => setCurrentSlide(index),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.03,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };


    return (
        <div className='w-full mt-[23rem] md:-mt-[60rem] lg:mt-0'>
            <div className="w-10/12 mx-auto">
                <div className="w-full flex items-start gap-2 flex-col">
                    <RoundOutlineButton text={`Testimonials`} />
                    <div className={`${lead}`}>Don't take our word for it</div>
                    <div className="mt-2 w-full relative">
                        <Slider ref={sliderRef} {...settings}>
                            {testimonials.map((item, i) => (
                                <div key={i} className="px-2">
                                    <div className="bg-[#d9d9d9] w-full min-h-[50dvh] md:min-h-[40dvh] lg:min-h-[60dvh] flex flex-col items-center gap-3 rounded-2xl px-5 py-5">
                                        <img src={item.img} alt={`${item.name}'s portrait`} />
                                        <div className="leading-[1.2] text-[16px] font-bold">{item.name}</div>
                                        <div className="leading-[1.2] text-[#7A7A7A] text-[16px]">{item.job_title}</div>
                                        <div className="leading-[1.2] text-[16px] tracking-wide flex-grow overflow-auto">
                                            {item.content}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {new Array(4).fill(0).map((_, k) => (
                                                <img key={k} src={solar_star} alt="five star rating" />
                                            ))}
                                            <img src={solar_star_dark} alt="five star rating" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                        <div
                            className="absolute cursor-pointer  -right-5 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
                            onClick={goToNext}
                        >
                            <img src={chevron} className='' alt="Next testimonial" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="mb-10 mt-16 w-11/12 md:mb-24  mx-auto flex items-center">
                <div className="relative w-full  h-[406px] md:h-[460px] lg:h-[500px] rounded-xl overflow-hidden">
                    {/* Background Image Container */}
                    <div className="linebg w-full h-full"></div>

                    {/* Overlay to reduce brightness */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[#3f3f3f]/70 rounded-xl"></div>

                    {/* Content Container */}
                    <div className="absolute top-0 left-0 w-full   h-full flex items-center justify-center flex-col gap-3  text-white ">
                        <div className="flex items-center gap-2">
                            {new Array(5).fill(0).map((_, k) => (
                                <img key={k} src={solar_star} alt="five star rating" />
                            ))}
                            <div>4.9/5</div>
                        </div>
                        <img src={trustimg} alt="Trust Badge" />
                        <div className="text-[13px] md:text-[16px] font-light text-center">
                            Over 100K+ Entrepreneurs and businesses choose us.
                        </div>
                        <div className="text-[25px] md:text-[40px] lg:text-[61px] font-bold w-full lg:w-[70%] mx-auto text-center leading-[1.2]">
                            Ready to Build the Future of Finance?
                        </div>
                        <div className="text-[13px] px-5 md:text-[16px]  text-center">
                            Embed banking, payments, and lending in days, not months.
                        </div>
                        <div className="flex w-full md:w-11/12 md:justify-center mx-auto px-2 justify-between gap-4   items-center">
                            <div className="w-1/2 md:w-1/3 hover:scale-105 transition duration-500 cursor-pointer lg:w-1/4 py-3 md:justify-center px-4 flex gap-2 bg-[#cc5802] rounded-full">
                                <img src={demoimg} alt="Demo Vector" className='w-5' />
                                <div className="text-white text-[13px] md:text-[16px]">Request a Demo</div>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer flex  items-center justify-between gap-3 pl-3 py-0.5 lg:py-1 rounded-full border  border-[#cc5802] hover:scale-105 transition duration-500">
                                <div className={`text-[#cc5802] text-[13px] md:text-[16px] `}>Open an Account</div>
                                <div className="md:p-3 p-2 rounded-full bg-[#cc5802] mr-0.5">
                                    <IoArrowForwardSharp className={`text-white`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
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

const Testimonials = () => {
    const sliderRef = useRef(null);
    const [, setCurrentSlide] = useState(0);
    const lead = `leading-[1.2] text-[39px] font-bold`;

    const testimonials = [
        {
            img: testimg1,
            name: 'Shade',
            job_title: 'CEO, BankFactory US',
            content: `BankFactory has revolutionized the way we integrate with our banking partners. Their platform is incredibly intuitive, and the support team is always available to help. Since implementing Finarium, we've seen a significant reduction in manual errors and an increase in overall efficiency. We couldn't be happier with the results!`
        },
        {
            img: testimg2,
            name: 'Emmanuel Maks',
            job_title: 'CEO, Marasoftpay',
            content: `Marasoftpay has revolutionized the way we integrate with our banking partners. Their platform is incredibly intuitive, and the support team is always available to help. Since implementing Finarium, we've seen a significant reduction in manual errors and an increase in overall efficiency. We couldn't be happier with the results!"`
        },

        {
            img: testimg1,
            name: 'Sarah Johnson',
            job_title: 'CTO, TechFlow Solutions',
            content: `The integration capabilities of this platform are outstanding. We've been able to connect our systems seamlessly, resulting in faster transactions and happier customers. The technical support team has been responsive and knowledgeable throughout our implementation journey.`
        },
        {
            img: testimg2,
            name: 'David Chen',
            job_title: 'Director of Operations, PayEase',
            content: `We've tried several banking integration platforms, but this one stands out for its reliability and ease of use. Our development team was able to implement it quickly, and we've seen a 40% improvement in processing times. The analytics dashboard has also provided valuable insights for our business decisions.`
        }
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className='w-full'>
            <div className="w-11/12 mx-auto">
                <div className="w-full flex items-start gap-2 flex-col">
                    <RoundOutlineButton text={`Testimonials`} />
                    <div className={`${lead}`}>Don't take our word for it</div>
                    <div className="mt-2 w-full relative">
                        <Slider ref={sliderRef} {...settings}>
                            {testimonials.map((item, i) => (
                                <div key={i} className="px-2">
                                    <div className="bg-[#d9d9d9] w-full h-[60dvh] flex items-center flex-col gap-3 rounded-md py-10 px-5">
                                        <img src={item.img} alt={`${item.name}'s portrait`} />
                                        <div className={`leading-[1.2] text-[16px] font-bold`}>{item.name}</div>
                                        <div className={`leading-[1.2] text-[#7A7A7A] text-[16px]`}>{item.job_title}</div>
                                        <div className={`leading-[1.2] text-[16px] tracking-wide`}>{item.content}</div>
                                        <div className="flex items-center gap-3">
                                            {new Array(4).fill(0).map((_, k) => (
                                                <img key={k} src={solar_star} alt='five star rating' />
                                            ))}
                                            <img src={solar_star_dark} alt="five star rating" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div
                            className="absolute cursor-pointer top-1/2 -right-8 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
                            onClick={goToNext}
                        >
                            <img src={chevron} className='' alt="Next testimonial" />
                        </div>
                    </div>
                </div>
                <div className="my-40 w-full flex items-center ">
                    <div className=" w-full linebg">
                        <div className="h-full flex items-center justify-center rounded-[30px] bg-[#3d3d3d]/70  bg-opacity-50">
                            <div className="flex items-center flex-col gap-5 text-white">
                                <div className="flex items-center gap-2">
                                    {new Array(5).fill(0).map((_, k) => (
                                        <img key={k} src={solar_star} alt='five star rating' />
                                    ))}
                                    <div className="">4.9/5</div>
                                </div>
                                <img src={trustimg} alt="" />
                                <div className="text-[16px]">Over 100K+ Entrepreneurs. and businesses choose us.</div>
                                <div className={`leading-[1.2] text-[40px] lg:text-[61px] font-bold w-full lg:w-[70%] mx-auto  text-center`}>Ready to Build the Future of Finance?</div>
                                <div className="text-[16px]">Embed banking, payments, and lending in days, not months.</div>
                                <div className="flex w-full  justify-center lg:w-1/2 flex-col lg:flex-row gap-5 items-center">
                                    <div className="w-fit py-3 px-4 flex gap-2 bg-[#cc5802] rounded-full">
                                        <img src={demoimg} alt="demo vector" />
                                        <div className="text-white">Request a Demo</div>
                                    </div>
                                    <RoundArrowButton title={`Open an Account`}/>
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
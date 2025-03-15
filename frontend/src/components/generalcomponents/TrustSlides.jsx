import React from 'react';
import Marquee from 'react-fast-marquee';
import marafaimg from '../../assets/images/marafa.png';
import miratonimg from '../../assets/images/miraton.png';
import astraimg from '../../assets/images/astra.png';
import riseimg from '../../assets/images/risevest.png';

const TrustSlides = () => {
    const images = [
        { img: marafaimg },
        { img: astraimg },
        { img: miratonimg },
        { img: riseimg },
    ];

    return (

        <div className="mt-20 mb-10 md:mt-[10rem] lg:-mt-8 w-11/12  mx-auto px-5 ">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between">
                <div className="font-semibold text-[16px] w-full  lg:w-1/4 mb-4 md:mb-0">
                    Trusted By Over 25k+ Companies and Businesses Across the Globe.
                </div>
                <div className="w-full lg:w-5/6 ">
                    <Marquee
                        speed={40}
                        gradient={false}
                    >
                        {images.map((img, i) => (
                            <div key={i} className="mx-4 mt-3 lg:mt-0">
                                <img
                                    src={img.img}
                                    alt={`Trusted company ${i}`}
                                    className="lg:h-[60.37px] h-[58px] w-[205px] object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>

    );
};

export default TrustSlides;
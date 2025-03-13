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
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <div className="font-semibold text-[16px] w-full md:w-1/4 mb-4 md:mb-0">
                Trusted By Over 25k+ Companies and Businesses Across the Globe.
            </div>
            <div className="w-full md:w-3/4">
                <Marquee 
                    speed={40} 
                    gradient={false}
                >
                    {images.map((img, i) => (
                        <div key={i} className="mx-4">
                            <img 
                                src={img.img} 
                                alt={`Trusted company ${i}`}
                                className="h-[65.37px] w-[205px] object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TrustSlides;
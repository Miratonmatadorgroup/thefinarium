import React from 'react'
import HeroSection from '../../components/generalcomponents/HeroSection'
import WhyChooseUs from '../../components/generalcomponents/WhyChooseUs'
import BuildAndLaunch from '../../components/generalcomponents/BuildAndLaunch'
import CrossBorderAndOneAPi from '../../components/generalcomponents/CrossBorderAndOneAPi'
import WhoWeHelp from '../../components/generalcomponents/WhoWeHelp'
import Testimonials from '../../components/generalcomponents/Testimonials'
import Footer from '../../components/generalcomponents/Footer'
import TrustSlides from '../../components/generalcomponents/TrustSlides'

const HomePage = () => {
    const gray = `bg-[#e7e7e7]`
    return (
        <div className="w-full bg-[#f6f6f6] overflow-x-hidden ">
            <div className="pb-10 lg:pb-20">
                <HeroSection />
                <div className="w-full  ">
                    <TrustSlides />
                </div>
                <div className="w-11/12 mx-auto">
                    <WhyChooseUs />
                </div>
            </div>
            <div className={`${gray} w-full py-10`}>
                <BuildAndLaunch />
            </div>
            <div className="py-20">
                <CrossBorderAndOneAPi />
            </div>
            <div className="py-10  min-h-[200dvh]">
                <WhoWeHelp />
            </div>
            <div className="py-0 w-full ">
                <Testimonials />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
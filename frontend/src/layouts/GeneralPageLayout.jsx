import React from 'react'
import Footer from '../components/generalcomponents/Footer'
import HeroSection from '../components/generalcomponents/HeroSection'

const GeneralPageLayout = ({ children }) => {
    return (
        <div>
            <HeroSection />
            <div className='mt-16'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default GeneralPageLayout
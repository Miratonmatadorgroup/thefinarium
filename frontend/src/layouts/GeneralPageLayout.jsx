import React from 'react'
import NavBar from '../components/generalcomponents/NavBar'
import Footer from '../components/generalcomponents/Footer'

const GeneralPageLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div className='mt-16'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default GeneralPageLayout
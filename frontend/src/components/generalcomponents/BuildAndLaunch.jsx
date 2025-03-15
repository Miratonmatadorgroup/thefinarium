import React from 'react'
import img1 from '../../assets/images/build1.png'
import img2 from '../../assets/images/build2.png'
import img3 from '../../assets/images/build3.png'
import img4 from '../../assets/images/build4.png'
import cardimg from '../../assets/images/buildcard.png'
import { IoArrowForwardSharp } from "react-icons/io5";
import RoundOutlineButton from './RoundOutlineButton'
import RoundArrowButton from './RoundArrowButton'

const BuildAndLaunch = () => {
    const lead = `leading-[1.2]`

    const options = [
        {
            img: img1,
            title: 'Accounts & Payments',
            desc: ' → Create branded bank accounts and move money in real-time.'
        },
        {
            img: img2,
            title: 'Cards & Issuing ',
            desc: ' → Launch virtual and physical debit, credit, and prepaid cards.'
        },
        {
            img: img3,
            title: 'Lending & Credit',
            desc: ' → Offer buy now, pay later (BNPL), credit lines, and working capital.'
        },
        {
            img: img4,
            title: 'Embedded Finance ',
            desc: ' → Integrate financial services natively into your platform.'
        },
    ]
    return (
        <div className='w-full'>
            <div className="w-11/12 flex-col lg:flex-row mx-auto flex items-center justify-between gap-10 lg:gap-16">
                <div className="w-full lg:w-1/2">
                    <div className="w-full flex lg:items-start items-center flex-col gap-5">
                        <RoundOutlineButton text={`Build & Launch`} />
                        <div className={`${lead} font-bold text-[25px] lg:text-start text-center lg:text-[39px] `}>Build & Launch Faster with Our Complete Embedded Finance Platform</div>
                        <div className={`text-[16px] text-center lg:text-start w-10/12 ${lead}`}>We make it effortless to integrate banking, payments, and lending into your business—without the complexity of compliance, licensing, or infrastructure.</div>
                        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-5">
                            {options.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 w-full p-2 border rounded-md border-[#cc5802]">
                                    <img src={item.img} alt={`${item.title} image`} />
                                    <div className="text-[14px] lg:text-[16px]"><span className={`${lead} font-semibold `}>{item.title}</span> <span>{item.desc}</span></div>
                                </div>
                            ))}
                        </div>
                        <RoundArrowButton title={`Explore Our Solution`} text={`text-white`}/>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full">
                        <img src={cardimg} alt="card image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildAndLaunch
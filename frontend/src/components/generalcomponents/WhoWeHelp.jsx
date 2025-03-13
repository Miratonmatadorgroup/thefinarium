import React from 'react'
import vector1 from '../../assets/images/vector-left.png'
import vector2 from '../../assets/images/vector-right.png'
import manimg from '../../assets/images/mansmiling.png'
import darkframe from '../../assets/images/darkframe.png'
import Counter from './Counter'


const WhoWeHelp = () => {
    const lead = `leading-[1.2]`
    const helpOtions = [
        {
            title: `FIntech Startups`,
            desc: 'Embed banking, payments, and lending with minimal effort.'
        },
        {
            title: `Market & Platforms`,
            desc: 'Enable financial services for your sellers and users.'
        },
        {
            title: `SaaS & B2B Platforms`,
            desc: 'Offer banking and lending to your business customers'
        },
        {
            title: `E-Commerce & Retail`,
            desc: 'Introduce seamless payments, branded cards, and BNPL.'
        },
        {
            title: `Gig & Creator Economy`,
            desc: 'Provide instant payouts and financial tools for freelancers.'
        },
    ]

    const values = [
        {
            symbol: '$',
            value: 1,
            text: 'Million',
            desc: 'Powering Over $1 Million in Transactions Annually '
        },
        {
            symbol: '%',
            value: 99.99,
            desc: '  '
        },
        {
            symbol: '/',
            value: 4.9,
            value2: 5.0,
            text: 'Million',
            desc: ' '
        },
    ]
    return (
        <div className='w-full relative o'>
            <div className="darkbg ">
                <div className="w-11/12 mx-auto relative flex items-center flex-col lg:flex-row justify-between gap-20">
                    <div className="w-full lg:w-1/2">
                        <img src={manimg} className='h-[614px] -mt-20 cursor-pointer' alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 relative flex items-start flex-col gap-5">
                        <img src={darkframe} className='absolute -top-32 -right-10 z-10 w-[469px]' alt="" />
                        <div className={`${lead} text-[39px] font-semibold text-white`}>Who We Help</div>
                        <div className="flex items-start gap-5 flex-col">
                            {helpOtions.map((item, i) => (
                                <div className="flex w-full items-start gap-4">
                                    <div className="w-[43px] flex items-center justify-center text-white h-[43px] bg-[#bf5c00] rounded-full">{i + 1}</div>
                                    <div className="flex items-start gap-2 text-white flex-col">
                                        <div className={`${lead} font-bold text-[20px]`}>{item.title}</div>
                                        <div className="text-gray-400">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" orangebg">
                <div className="w-full h-full relative">
                    <img src={vector1} className='absolute top-[11rem] left-0' alt="" />
                    <img src={vector2} className='absolute -bottom-10 right-10' alt="" />
                    <div className="w-full relative h-full  pt-40 flex items-center justify-center">
                        <div className="w-11/12 mx-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="flex items-center gap-1 flex-col">
                                <div className={`${lead} text-[45px] font-bold`}>$<Counter endValue={1}/> <span> Million</span></div>
                                <div className="text-[16px] w-8/12 text-center">Powering Over $1 Million in Transactions Annually</div>
                            </div>
                            <div className="flex items-center gap-1 flex-col">
                                <div className={`${lead} text-[45px] font-bold`}><Counter endValue={99.99}/> %</div>
                                <div className="text-[16px] w-8/12 text-center">99.99% Uptime, PCI-Level Security, and Full Compliance</div>
                            </div>
                            <div className="flex items-center gap-1 flex-col">
                                <div className={`${lead} text-[45px] font-bold`}><Counter endValue={4.9}/>/<Counter endValue={5.0}/></div>
                                <div className="text-[16px] w-8/12 text-center">4.9/5 Customer Rating – Loved by Developers & Businesses</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhoWeHelp
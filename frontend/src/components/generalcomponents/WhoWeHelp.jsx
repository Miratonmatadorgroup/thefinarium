import React from 'react'
import vector1 from '../../assets/images/vector-left.png'
import vector2 from '../../assets/images/vector-right.png'
import manimg from '../../assets/images/manimg.png'
import greenbg from '../../assets/images/greenbg.png'
import bell from '../../assets/images/bell.png'
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

   
    return (
        <div className='w-full relative my-10 '>
            <div className="darkbg ">
                <div className="w-11/12 mx-auto relative flex items-center flex-col md:gap-16 lg:gap-4 md:flex-row justify-between">
                    <div className="w-full md:w-1/2 relative  md:-top-60 lg:-top-70 lg:-left-30">
                        <img src={greenbg} className='-right-5 lg:w-[397px] -top-4  absolute  z-10 cursor-pointer' alt="" />
                        <div className="absolute  z-30 px-5 lg:right-38 top-[14rem] lg:top-[18rem] py-2 flex items-center gap-4 rounded-md bg-[#1c232e]">
                            <div className="p-2.5 rounded-full bg-[#cc5802]">
                            <img src={bell} alt="" />
                            </div>
                            <div className="flex items-start text-[12px] text-white flex-col ">
                                <div className="font-light text-[10px] lg:text-[13px]">New Invitation!</div>
                                <div className="font-bold lg:text-[16px]">Launch, scale and monetize with ease</div>
                            </div>
                        </div>
                        <img src={manimg} className=' absolute lg:w-[440px]  right-2 -top-20 z-20 cursor-pointer w-[330px]' alt="" />
                    </div>
                    <div className="w-full  md:ml-auto md:w-1/2 relative flex items-start mt-[28rem] md:mt-[3rem]  flex-col gap-3 lg:gap-8  lg:mt-[4rem]">
                        <img src={darkframe} className='absolute -top-32 -right-10 z-10 w-[469px]' alt="" />
                        <div className={`${lead} text-[35px] font-semibold text-white`}>Who We Help</div>
                        <div className="flex items-start gap-5 lg:gap-10 flex-col">
                            {helpOtions.map((item, i) => (
                                <div key={i} className="flex w-full items-start gap-4">
                                    <div className="w-15 h-11 lg:w-12 lg:h-12 flex items-center justify-center text-white  bg-[#bf5c00] text-[16px] font-bold rounded-full">{i + 1}</div>
                                    <div className="flex items-start gap-2 text-white flex-col">
                                        <div className={`${lead} font-bold text-[20px]`}>{item.title}</div>
                                        <div className="text-gray-400 text-[16px]">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" orangebg -mt-[10rem] md:-mt-[5rem] lg:-mt-[7rem]  z-10">
                <div className="w-full h-full relative">
                    <img src={vector1} className='absolute top-[11rem] md:-top-[3.3rem] left-0' alt="" />
                    <img src={vector2} className='absolute -bottom-10  md:right-2 md:-bottom-35 right-10' alt="" />
                    <div className="w-full relative h-full flex items-center justify-center">
                        <div className="w-11/12  mx-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex items-center gap-1 flex-col ">
                                <div className={`${lead}  text-[45px] font-bold`}>$<Counter endValue={1} /> <span> Million</span></div>
                                <div className="text-[16px] font-thin w-8/12 text-center">Powering Over $1 Million in Transactions Annually</div>
                            </div>
                            <div className="flex items-center gap-1 flex-col">
                                <div className={`${lead} text-[45px] font-bold`}><Counter endValue={99.99} /> %</div>
                                <div className="text-[16px] w-8/12 text-center font-thin">99.99% Uptime, PCI-Level Security, and Full Compliance</div>
                            </div>
                            <div className="flex items-center  gap-1 flex-col">
                                <div className={`${lead} text-[45px] font-bold`}><Counter endValue={4.9} />/<Counter endValue={5} /></div>
                                <div className="text-[16px] w-8/12 font-thin text-center">4.9/5 Customer Rating – Loved by Developers & Businesses</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhoWeHelp
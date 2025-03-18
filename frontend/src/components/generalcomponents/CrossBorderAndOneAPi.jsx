import React from 'react'
import crossborderimg from '../../assets/images/crossborder.png'
import codesimg from '../../assets/images/codes.png'
import mobilecodesimg from '../../assets/mobile/codes-mobile.png'
import checkboximg from '../../assets/images/checkbox.png'
import RoundOutlineButton from './RoundOutlineButton'
import RoundArrowButton from './RoundArrowButton'

const CrossBorderAndOneAPi = () => {
  const lead = `leading-[1.2]`

  const optionsOne = [
    {
      title: 'Send & Receive Worldwide ',
      desc: ' → Enable users to send and receive payments across multiple currencies.'
    },
    {
      title: 'Fast, Cost-Effective Transfers ',
      desc: ' → Competitive FX rates and real-time settlement options.'
    },
    {
      title: 'Multi-Currency Accounts ',
      desc: '→ Let customers hold, convert, and transact in multiple currencies.'
    },
    {
      title: 'Seamless API Integration ',
      desc: ' → Power international payments within your platform in days, not months.'
    },
  ]

  const optionsTwo = [
    {
      title: 'Issue & manage cards  ',
      desc: ' → Branded debit, credit, and prepaid cards'
    },
    {
      title: 'Create accounts ',
      desc: '→ NDIC/FDIC-insured checking & savings accounts'
    },
    {
      title: 'Move money',
      desc: ' → Instant payments, ACH, wire, and faster settlements'
    },
    {
      title: 'Lend smarter',
      desc: '→ Offer loans, BNPL, and credit products'
    },
  ]
  return (
    <div className='w-full'>
      <div className="w-11/12 mx-auto">
        <div className="flex items-center flex-col text-[var(--color-dark)] lg:flex-row mb-32 lg:mb-40 gap-16 justify-between">
          <div className="w-full md:w-1/2 ">
            <div className="w-full">
              <img src={crossborderimg} alt="cross border image" className='lg:h-[590px] h-[392px] ' />
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="w-full flex lg:items-start items-center flex-col gap-5">
              <RoundOutlineButton text={`Effortless & Seamless`} />
              <div className={`${lead} text-center w-full  lg:text-start font-bold text-[22px] lg:text-[39px] lg:w-10/12`}>Cross-Border Transfers Made Easy</div>
              <div className="lg:text-[16px] text-[#6D6D6D] text-[13px] text-start">Global payments, simplified. Our APIs empower you to seamlessly move money across borders with fast, secure, and compliant international transfers.</div>
              <div className="grid grid-cols-1 gap-5 w-full">
                {optionsOne.map((item, i) => (
                  <div key={i} className="w-full flex items-start gap-2">
                    <img src={checkboximg} alt="" />
                    <div className="text-[16px]"><span className={`${lead} font-bold `}>{item.title}</span> <span>{item.desc}</span></div>
                  </div>
                ))}
              </div>
              <RoundArrowButton title={`Start Building`} text={`text-white`} />
            </div>
          </div>
        </div>

        <div className="flex items-center text-[var(--color-dark)] flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
          <div className="w-full lg:w-1/2">
            <div className="w-full flex lg:items-start items-center flex-col gap-5">
              <RoundOutlineButton text={`Build & Launch`} />
              <div className={`${lead} font-bold text-[25px] lg:text-[39px] lg:w-10/12`}>One API, Endless Possibilities</div>
              <div className="text-[16px] text-[#6D6D6D] md:self-start ">Seamlessly integrate financial services into your platform with just a few lines of code.</div>
              <div className="grid grid-cols-1 gap-5 w-full">
                {optionsTwo.map((item, i) => (
                  <div key={i} className="w-full flex items-start gap-2">
                    <img src={checkboximg} alt="" />
                    <div className="text-[16px]"><span className={`${lead} font-bold `}>{item.title}</span> <span>{item.desc}</span></div>
                  </div>
                ))}
              </div>
              <RoundArrowButton title={`View Developer Docs`} text={`text-white`} />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="w-full">
              {/* Desktop Image */}
              <img src={codesimg} alt="cross border image" className="w-full lg:h-[590px] hidden sm:hidden lg:block object-cover" />

              {/* Mobile Image */}
              <img src={mobilecodesimg} alt="cross border image" className="w-full lg:h-[590px] block lg:hidden object-cover" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CrossBorderAndOneAPi
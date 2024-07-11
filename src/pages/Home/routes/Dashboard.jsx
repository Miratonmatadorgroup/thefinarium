import { motion } from "framer-motion";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { FaCircleExclamation } from "react-icons/fa6";
import { RxLink2 } from "react-icons/rx";
import { LuBadgePercent } from "react-icons/lu";
import { HiClipboardList } from "react-icons/hi";
import { HiMiniArrowLongUp, HiMiniArrowLongDown } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import {Beneficiary} from "../components/Beneficiary.jsx";
import AC from "../../../assets/images/AC.png";
import darkLady from "../../../assets/images/darkLady.png";
import JW from "../../../assets/images/JW.png";
import MM from "../../../assets/images/MM.png";
import MS from "../../../assets/images/MS.png";
import whitelady from "../../../assets/images/whitelady.png";
import ZS from "../../../assets/images/ZS.png";

export const Dashboard = () => {
    return (
        <section className="overflow-y-scroll">
            <title className="flex items-center justify-between w-full">
                <h1 className="text-[28px] font-[600]">
                    Dashboard
                </h1>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[1rem] rounded-[6px] bg-secondary text-neutral-100 py-[16px] px-[24px]"
                >
                    Send money
                </motion.button>
            </title>

            <article className="mt-10 flex items-center justify-between">
                <div className="flex items-center justify-between max-w-[501px] h-[152px] bg-black rounded-[10px] p-6 pr-10 grow">
                    <div className="text-[14px] grid gap-1">
                        <p className="text-neutral-150">Available Balance</p>
                        <p className="text-[32px] font-[600] text-neutral-100">
                            $ 140,000<span className="text-[25px] text-neutral-150">.00</span>
                        </p>
                        <p className="flex items-center gap-1 text-neutral-200">
                            Payout Balance: <span className="text-neutral-150">$139,900.99</span> <FaCircleExclamation className="text-secondary" />
                        </p>
                    </div>

                    <div>
                        <VscEye className="text-[35px] text-neutral-150" />
                    </div>
                </div>

                <div className="relative max-w-[563px] h-[152px] bg-secondary-100 rounded-[10px] p-6 border border-secondary-200 grow">
                    <div className="text-[14px] grid gap-1 max-w-[313px]">
                        <p className="text-[1rem] font-[600]">Update your KYC Information</p>
                        <p className="text-[14px] text-primary-200">
                            Please update/verify your information before <span className="text-primary-400 font-[600]">13th July 2023</span> to unlock level benefits
                        </p>
                        <p className="flex items-center gap-1 text-secondary mt-2 font-[600] text-[14px]">
                            Complete Verification <span className="text-secondary"><IoIosArrowForward className="text-[1.3rem]" /></span>
                        </p>
                    </div>

                    <div className="w-fit absolute bottom-0 right-2">
                        <img
                            src={"https://ik.imagekit.io/lordibe/shield-tick.png"}
                            alt={"kyx image"}
                        />
                    </div>
                </div>
            </article>

            <section className="grid grid-cols-12 gap-5 mt-5">
                <section className="col-span-8">
                    <header className="flex items-center justify-between">
                        <h2 className="text-[18px] font-[600]">Quick Send</h2>
                        <p className="flex items-center gap-1 text-secondary font-[600] text-[11.67px]">
                            See all beneficiaries <span className="text-secondary"><IoIosArrowForward className="text-[15px]" /></span>
                        </p>
                    </header>

                    <section className="bg-neutral-100 mt-3 flex items-center w-full justify-between px-[15px] py-[24px] border border-neutral-light rounded-[10px]">
                        {
                            beneficiaries.map((beneficiary, index) => (
                                <Beneficiary key={index} {...beneficiary} />
                            ))
                        }
                    </section>

                    <section>
                        <header className="mt-7">
                            <h2 className="text-[18px] font-[600]">Do more with Bankit</h2>
                        </header>

                        <div className="w-full flex items-center justify-between mt-4">
                            {
                                features.map((feature, index) => (
                                    <FeaturesCard key={index} {...feature} />
                                ))
                            }

                            <div className={`max-w-[170px] h-[184px] bg-primary-150 rounded-[10px] flex flex-col justify-between p-5 `}>
                                <div>
                                    <img
                                        src={'https://ik.imagekit.io/lordibe/Avatar%20Groups.png?updatedAt=1720707594065'}
                                        alt={"avatar"}
                                    />
                                </div>

                                <div className="text-[1rem] leading-[24px]">
                                    Invite your friends and earn $100
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="col-span-4">
                    <header className="flex items-center justify-between">
                        <h2 className="text-[18px] font-[600]">Recent Transactions</h2>
                        <p className="flex items-center gap-1 text-secondary font-[600] text-[11.67px]">
                            See all <span className="text-secondary"><IoIosArrowForward className="text-[15px]" /></span>
                        </p>
                    </header>

                    <section className="mt-3 flex flex-col p-2.5 bg-neutral-100 rounded-[10px] border border-neutral-light">
                        {
                            transactions.map((transaction, index) => (
                                <TransactionCard key={index} {...transaction} />
                            ))
                        }
                    </section>
                </section>
            </section>
        </section>
    );
}

// eslint-disable-next-line react/prop-types
const FeaturesCard = ({ icon, description, styles }) => {
    return (
        <div className={`max-w-[170px] h-[184px] rounded-[10px] flex flex-col justify-between p-5 ${styles}`}>
            <div>
                {icon}
            </div>

            <div className="text-[1rem] leading-[24px]">
                {description}
            </div>
        </div>
    );
}

const features = [
    {
        icon: <RxLink2 className="text-[35px] text-primary-200" />,
        description: "Sell products online without a website",
        styles: "bg-secondary-150"
    },
    {
        icon: <LuBadgePercent className="text-[35px] text-primary-200" />,
        description: "Up to 20% returns on your investment",
        styles: "bg-secondary-200"
    },
    {
        icon: <HiClipboardList className="text-[35px] text-primary-200" />,
        description: "Easily create & send invoices on the go",
        styles: "bg-secondary-500"
    }
]

// eslint-disable-next-line react/prop-types
const TransactionCard = ({ type, method, name, amount }) => {
    return (
        <div className="p-[9.75px] flex items-start justify-between">
            <div className="flex items-center gap-5">
                <div className={
                    `${type === "credit" ? 'bg-secondary-500' : 'bg-secondary-100'} 
                        rounded-full flex items-center justify-center w-[40px] h-[40px]`
                }>
                    {
                        type === "credit" ?
                            <HiMiniArrowLongDown className={`text-secondary-800 text-[25px]`} />
                            :
                            <HiMiniArrowLongUp className={`text-[25px] text-secondary`} />
                    }
                </div>
                <div className="text-[14px]">
                    <p>{type === "credit" ? 'from' : 'to'} <span className="font-[600]">{name}</span></p>
                    <p className="text-[12px] text-neutral-150">{method}</p>
                </div>
            </div>
            <p className="text-[14px] font-[600]">{type === "credit" ? '+ ' : '- '}${amount}</p>
        </div>
    )
}

const transactions = [
    {
        type: "debit",
        method: "Transfer",
        name: "Market Square",
        amount: "11,000.00"
    },
    {
        type: "credit",
        method: "Transfer",
        name: "Aliya Cornrad",
        amount: "920.00"
    },
    {
        type: "credit",
        method: "Transfer",
        name: "Martin Stanley",
        amount: "10,000.00"
    },
    {
        type: "credit",
        method: "Transfer",
        name: "Zain Siphron",
        amount: "290.00"
    },
    {
        type: "debit",
        method: "Transfer",
        name: "Ariana Bush",
        amount: "5,000.00"
    },
    {
        type: "credit",
        method: "Transfer",
        name: "Jack Westley",
        amount: "500.00"
    }
]


const beneficiaries = [
    {
        imgUrl: darkLady,
        name: 'Ariana Bush'
    },
    {
        imgUrl: MM,
        name: 'Madelyn Martin'
    },
    {
        imgUrl: ZS,
        name: 'Zain Siphron'
    },
    {
        imgUrl: whitelady,
        name: 'Zain Curtis'
    },
    {
        imgUrl: MS,
        name: 'Martin Stanley'
    },
    {
        imgUrl: AC,
        name: 'Aliya Cornrad'
    },
    {
        imgUrl: JW,
        name: 'Jack Westley'
    }
]
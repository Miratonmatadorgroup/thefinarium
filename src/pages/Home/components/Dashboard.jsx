import { motion } from "framer-motion";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { FaCircleExclamation } from "react-icons/fa6";
import { RxLink2 } from "react-icons/rx";
import { LuBadgePercent } from "react-icons/lu";
import { HiClipboardList } from "react-icons/hi";
import { HiMiniArrowLongUp, HiMiniArrowLongDown } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

export const Dashboard = () => {
    return (
        <section>
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

            <section>

            </section>
        </section>
    )
}
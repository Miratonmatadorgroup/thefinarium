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

            <article className="mt-10 flex items-center">
                <div className="flex items-center justify-between max-w-[501px] bg-black rounded-[10px] p-7 pr-10 grow">
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

                <div>
                    <div className="text-[14px] grid gap-1">
                        <p className="text-neutral-150">Update your KYC Information</p>
                        <p className="text-[32px] font-[600] text-neutral-100">

                        </p>
                        <p className="flex items-center gap-1 text-neutral-200">
                            Payout Balance: <span className="text-neutral-150">$139,900.99</span> <FaCircleExclamation className="text-secondary" />
                        </p>
                    </div>

                    <div>
                        <VscEye className="text-[35px] text-neutral-150" />
                    </div>
                </div>
            </article>
        </section>
    )
}
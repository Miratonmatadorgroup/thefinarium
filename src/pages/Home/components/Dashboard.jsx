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

            <article>
                <div>
                    <div></div>
                    <div></div>
                </div>

                <div></div>
            </article>
        </section>
    )
}
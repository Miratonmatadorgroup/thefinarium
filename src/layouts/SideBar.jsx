import { LuLogOut } from "react-icons/lu";
import { RiHome5Fill } from "react-icons/ri";
import { IoWallet } from "react-icons/io5";
import { IoCard } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiClipboardList } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom";

export const SideBar = () => {
    const navigate = useNavigate();

    return (
        <section className="w-[272px] bg-primary-800 h-dvh flex flex-col justify-between sticky top-0">
            <div>
                <div className="p-3">
                    <figure className="p-3">
                        <img src="https://ik.imagekit.io/lordibe/tr:w-219,h-56/logo%20(1).png" alt="logo" className="w-[156.43px]" />
                    </figure>

                    <div className="relative">
                        <LuSearch className="absolute text-white top-2.5 left-3"/>
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full bg-primary-400 p-2 pl-10 rounded-[4px] text-white text-[14px]"
                        />
                    </div>
                </div>

                <nav className="p-2 mt-4 grid gap-2">
                    <NavButtons
                        title="Dashboard"
                        icon={<RiHome5Fill className="text-secondary" />}
                    />
                    <NavButtons
                        title="Transactions"
                        icon={<HiClipboardList />}

                    />
                    <NavButtons
                        title="Transfer"
                        icon={<FaMoneyBillTransfer />}
                    />
                    <NavButtons
                        title="Card Service"
                        icon={<IoCard />}
                    />
                    <NavButtons
                        title="Bills Payment"
                        icon={<IoWallet />}
                    />
                    <NavButtons
                        title="POS"
                        icon={<RiDiscountPercentFill />}
                    />
                    <NavButtons
                        title="Loan"
                        icon={<FaHandHoldingDollar />}
                    />
                </nav>
            </div>

            <div>
                <div className="p-2 mt-4 grid gap-2">
                    <NavButtons
                        title="Support"
                        icon={<BiSupport />}
                    />
                    <NavButtons
                        title="Settings"
                        icon={<IoSettings />}
                    />
                </div>

                <div className="flex items-center justify-between py-[1.5rem] px-[1.7rem] my-3">
                    <div>
                        <img
                            src={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1709156022/jeqduutert9dyt5mdsya.jpg"}
                            alt={"profile phote"}
                            className={"w-[50px] h-[50px] rounded-full"}
                        />
                    </div>
                    <p className="font-bold text-neutral-100">Lord IBE</p>
                    <motion.div
                        onClick={() => navigate('/')}
                        whileHover={{ scale: 1.10 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <LuLogOut
                            className="text-white w-[1.5rem] font-bold cursor-pointer"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const NavButtons = ({title, icon}) => {
    return (
        <div className="text-neutral-150 p-3 bg-primary-400 rounded-[4px] text-[14px] flex items-center gap-2">
            <span className="text-[22px]">{icon}</span> {title}
        </div>
    )
}
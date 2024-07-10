import { motion } from "framer-motion"
import {useState} from "react";

export const Toggle = () => {
    const [selected, setSelected] = useState('test')

    return (
        <div className="flex items-center w-fit bg-secondary p-1 rounded-full">
            <Ball name={"test"} selected={selected === 'test'} setSelected={setSelected} />
            <Ball name={"live"} selected={selected === 'live'} setSelected={setSelected} />
        </div>
    )
}

const Ball = ({ name, selected, setSelected }) => {
    return (
        <div onClick={() => setSelected(name)}>
            <div
                className={`
                w-[25px] h-[25px] text-neutral-100 text-[13.85px] text-center rounded-[60px] leading-[16.62px]
                transition-colors relative cursor-pointer`}
            >
                {selected && (
                    <motion.span
                        layoutId="pill-tab"
                        transition={{ type: "spring", duration: 0.5 }}
                        className="absolute bg-white inset-0 rounded-full"
                    ></motion.span>
                )}
            </div>
        </div>
    )
}
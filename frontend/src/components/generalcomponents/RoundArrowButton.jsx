import React from 'react'
import { IoArrowForwardSharp } from 'react-icons/io5'

const RoundArrowButton = ({title,text,size}) => {
    return (
        <div className="w-fit hover:scale-105 transition duration-500 cursor-pointer flex  items-center gap-3 pl-3 py-0.5 rounded-full border border-[#cc5802]">
            <div className={`text-[#cc5802] text-${size} `}>{title}</div>
            <div className="p-3 rounded-full bg-[#cc5802] mr-0.5">
                <IoArrowForwardSharp className={`${text}`} />
            </div>
        </div>
    )
}

export default RoundArrowButton
import React from 'react'

const RoundOutlineButton = ({text}) => {
    const orangetext = `text-[#cc5802]`;
    const orangeborder = `border-[#cc5802]`;
    return (
        <div className={`w-fit px-3 py-1.5 rounded-full border ${orangeborder} flex items-center gap-2`}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#cc5802]"></div>
            <div className={`${orangetext}`}>{text}</div>
        </div>
    )
}

export default RoundOutlineButton
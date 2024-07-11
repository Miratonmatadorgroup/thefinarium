export const Beneficiary = ({ name, imgUrl }) => {
    return (
        <div className="w-[85px]">
            <div className="w-fit mx-auto">
                <img
                    src={imgUrl}
                    alt="profile picture"
                    className="w-[48px] h-[48px] rounded-full object-cover"
                />
            </div>
            <p className="font-[600] text-[12px] text-center truncate mt-2">{name}</p>
        </div>
    )
}
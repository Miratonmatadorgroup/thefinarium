import {InputField} from "../../components/InputField.jsx";

export const AddressDetails = () => {
    return (
        <section className="grid grid-cols-3 h-dvh">
            <div className="bg-primary p-[36px] h-full relative">
                <figure>
                    <img src="https://ik.imagekit.io/lordibe/tr:w-219,h-56/logo%20(1).png" alt="logo" />
                </figure>

                <div className="max-w-[293px] mt-[12vh]">
                    <h1 className="text-[32px] leading-[48px] font-[600] text-neutral-100">
                        Few click away on KYC.
                    </h1>

                    <p className="text-[18px] text-[#B2CFFF] mt-3">
                        Start your KYC in minutes. save time and money
                    </p>
                </div>

                <div className="absolute -right-14 bottom-0">
                    <img
                        src={"https://ik.imagekit.io/lordibe/Get%20started%201.png"}
                        alt="signup side image"
                        className=""
                    />
                </div>
            </div>

            <div className="bg-primary-light col-span-2 px-[60px]">
                <aside className="absolute top-0 right-0 py-[23px] px-[60px] text-end text-primary-200 text-[1rem]">
                    <span className="text-neutral-200">Having trouble?</span> Get help
                </aside>

                <header className="mt-[8rem]">
                    <h1 className="text-[28px] font-[600]">Address Details</h1>
                </header>

                <form className="mt-10 grid grid-cols-8 gap-7">
                    <InputField
                        label="Line 1"
                        type="text"
                        placeholder="Flat no / House no"
                        style="col-span-8"
                    />

                    <InputField
                        label="Line 2"
                        type="text"
                        placeholder="Street name / Bulding no / Plot  no"
                        style="col-span-8"
                    />

                    <InputField
                        label="City"
                        type="text"
                        placeholder="Enter city name"
                        style="col-span-4"
                    />

                    <InputField
                        label="Region"
                        type="text"
                        placeholder="Select region"
                        style="col-span-4"
                    />

                    <InputField
                        label="Country"
                        type="text"
                        placeholder="Enter country name"
                        style="col-span-4"
                    />

                    <InputField
                        label="Postal / Zip code"
                        type="text"
                        placeholder="Enter postal / zip code"
                        style="col-span-4"
                    />

                    <div className="col-span-4 my-8">
                        <button
                            className="mt-5 bg-primary text-neutral-100 text-[18px] w-fit py-[1rem] px-[2rem] rounded-[5px]"
                        >
                            SAVE & COUNTINUE
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
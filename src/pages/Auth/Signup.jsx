import {InputField} from "../../components/InputField.jsx";
import {Link} from "react-router-dom";

export const Signup = () => {
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
                    <h1 className="text-[28px] font-[600]">Create an account</h1>

                    <p className="text-[1rem]">
                        Sign up with your email address so that your information is not lost and safe
                        with us.
                    </p>
                </header>

                <form className="mt-10 grid grid-cols-8 gap-7">
                    <InputField
                        label="First Name"
                        type="text"
                        placeholder="Enter First name"
                        style="col-span-4"
                    />

                    <InputField
                        label="Last Name"
                        type="text"
                        placeholder="Enter Last name"
                        style="col-span-4"
                    />

                    <div className="col-span-5">
                        <InputField
                            label="Email"
                            type="email"
                            placeholder="Enter email address"
                            style="col-span-5"
                        />

                        <div>
                            <p className="text-primary text-[1rem] mt-3"> + Add more emails </p>
                        </div>
                    </div>

                    <div className="col-span-5">
                        <InputField
                            label="Phone"
                            type="email"
                            placeholder="Enter Phone number"
                            style="col-span-5"
                        />

                        <div>
                            <p className="text-primary text-[1rem] mt-3"> + Add more emails </p>
                        </div>
                    </div>

                    <div className="col-span-4">
                        <button
                            className="mt-5 bg-primary text-neutral-100 text-[18px] w-fit py-[1rem] px-[2rem] rounded-[5px]"
                        >
                            SAVE & COUNTINUE
                        </button>
                    </div>
                </form>

                <div className="text-primary-200 text-[1rem] my-8">
                    <span className="text-neutral-200">Already have an account?</span> <Link to={"/"}>Log in</Link>
                </div>
            </div>
        </section>
    )
}
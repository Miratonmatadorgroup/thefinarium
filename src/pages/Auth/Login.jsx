import {InputField} from "../../components/InputField.jsx";
import {Link, useNavigate} from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    return (
        <section className="grid grid-cols-3 h-dvh">
            <div className="bg-primary p-[36px]">
                <figure>
                    <img src="https://ik.imagekit.io/lordibe/tr:w-219,h-56/logo%20(1).png" alt="logo" />
                </figure>
            </div>

            <div className="bg-primary-light col-span-2 px-[60px] flex flex-col justify-center gap-10">
                <aside className="absolute top-0 right-0 py-[23px] px-[60px] text-end text-primary-200 text-[1rem]">
                    <span className="text-neutral-200">Having trouble?</span> Get help
                </aside>

                <header className="">
                    <h1 className="text-[28px] font-[600]">Login ✌️</h1>
                    <p className="text-[1rem]">Welcome back to Bankit.</p>
                </header>

                <form className="grid grid-cols-8 gap-7">
                    <InputField
                        label="Email"
                        type="email"
                        placeholder="Enter email address"
                        style="col-span-5"
                    />

                    <div className="col-span-5">
                        <InputField
                            label="Password"
                            type="password"
                            placeholder="Enter password"
                            style="col-span-5"
                        />

                        <div className="mt-3 text-primary-200 text-[1rem] text-right">
                            Forgot Password?
                        </div>
                    </div>

                    <div className="col-span-5">
                        <button
                            onClick={() => navigate('/home')}
                            className="bg-primary text-neutral-100 text-[18px] w-[163px] p-[1rem] rounded-[5px]"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>

                <div className="py-[23px] text-primary-200 text-[1rem]">
                    <span className="text-neutral-200">Don't have an account?</span> <Link to={"/signup"}>Sign up</Link>
                </div>
            </div>
        </section>
    )
}
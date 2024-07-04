export const Login = () => {
    return (
        <section className="grid grid-cols-3 h-dvh">
            <div className="bg-primary p-[36px]">
                <figure>
                    <img src="https://ik.imagekit.io/lordibe/tr:w-219,h-56/logo%20(1).png" alt="logo" />
                </figure>
            </div>

            <div className="bg-primary-light col-span-2 px-[60px]">
                <aside className="py-[23px] text-end text-primary-200 text-[1rem]">
                    <span className="text-neutral-200">Having trouble?</span> Get help
                </aside>

                <header className="mb-10 mt-[10vh]">
                    <h1 className="text-[28px] font-[600]">Login ✌️</h1>
                    <p className="text-[1rem]">Welcome back to Bankit.</p>
                </header>

                <form>
                    <InputField
                        label="Email"
                        type="email"
                        placeholder="Enter email address"
                        style="col-span-5"
                    />

                    <InputField
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        style="col-span-5"
                    />

                    <button
                        className="mt-10 bg-primary text-neutral-100 text-[18px] w-[163px] p-[1rem] rounded-[5px]"
                    >
                        SUBMIT
                    </button>
                </form>

                <div className="py-[23px] text-primary-200 text-[1rem] mt-10">
                    <span className="text-neutral-200">Don't have an account?</span> Sign up
                </div>
            </div>
        </section>
    )
}

// eslint-disable-next-line react/prop-types
const InputField = ({ label, type, placeholder, handleChange, style }) =>
    (
        <div className="grid grid-cols-8">
            <div className={`${style}`}>
                <div className="grid">
                    <label
                        htmlFor={label}
                        className="text-[1rem] mt-5"
                    >
                        Email
                    </label>

                    <input
                        type={type}
                        id={type}
                        placeholder={placeholder}
                        onChange={(e) => handleChange(e)}
                        className={`p-[1.3rem] rounded-[8px] mt-3 shadow-md`}
                    />
                </div>
            </div>
        </div>
    )
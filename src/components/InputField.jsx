// eslint-disable-next-line react/prop-types
export const InputField = ({ label, type, placeholder, handleChange, style }) =>
    (
        <div className={`${style}`}>
            <div className="grid">
                <label
                    htmlFor={label}
                    className="text-[1rem]"
                >
                    {label}
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
    )
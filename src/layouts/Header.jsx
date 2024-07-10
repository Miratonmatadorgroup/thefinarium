import {Toggle} from "../components/Toggle.jsx";
import { IoNotifications } from "react-icons/io5";

export const Header = () => {
    return (
        <header className="w-full bg-white p-4 flex items-center justify-end gap-8 shadow-sm">
            <div className="flex items-center gap-2 text-[12px]">
                <p>Test</p>
                <Toggle />
                <p>Live</p>
            </div>

            <div className="h-[32px] border-r border-neutral-150"></div>

            <div className="relative">
                <IoNotifications className="w-[2rem]" />

                <div className="absolute -top-1 -right-1 w-[1.3rem] h-[1.3rem] bg-secondary rounded-full text-neutral-100 text-[13px] flex items-center justify-center">
                    4
                </div>
            </div>

            <div>
                <img
                    src={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1709156022/jeqduutert9dyt5mdsya.jpg"}
                    alt={"profile phote"}
                    className={"w-[35px] h-[35px] rounded-full"}
                />
            </div>
        </header>
    )
}
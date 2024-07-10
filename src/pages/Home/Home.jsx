import {SideBar} from "../../layouts/SideBar.jsx";
import {Header} from "../../layouts/Header.jsx";

export const Home = () => {
    return (
        <div className="flex bg-primary-100">
            <div>
                <SideBar />
            </div>

            <div className="w-full">
                <Header />
            </div>
        </div>
    )
}
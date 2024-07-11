import {SideBar} from "../../layouts/SideBar.jsx";
import {Header} from "../../layouts/Header.jsx";
import {Dashboard} from "./routes/Dashboard.jsx";

export const Home = () => {
    return (
        <div className="relative flex bg-primary-100">
            <div className="fixed border-t-[4px] border-secondary w-full z-50" />

            <div className="">
                <SideBar />
            </div>

            <div className="w-full">
                <Header />

                <section className="p-8">
                    <Dashboard />
                </section>
            </div>
        </div>
    )
}
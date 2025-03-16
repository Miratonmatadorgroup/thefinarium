import { Link } from "react-router-dom";
import img1 from './errorImages/oops.png'
import img2 from './errorImages/error.png'
import img3 from './errorImages/gohome.png'
import img4 from './errorImages/eyes.png'

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center ">

            <div className="h-full w-8/12 flex-col mx-auto py-10 rounded-xl flex items-center justify-center gap-20 ">
                <img src={img1} className="w-1/5" alt="" />
                <div className="relative flex items-center  justify-center">
                <img src={img2} className="w-[60%] md:w-[70%]" alt="" />
                <img src={img4} className=" w-20 md:w-32 lg:w-56  absolute top-[2.5rem] md:top-[4.5rem] lg:top-[7.7rem] left-1/2 transform -translate-1/2" alt="" />
                </div>
                <Link to={`/`}>
                    <img src={img3} className="w-20 cursor-pointer" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;

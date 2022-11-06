import { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../asset/svg/Logo.svg"
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const HomeRoute = () => {
    const [toggle, setToggle] = useState(false)
    const Toggler = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <div>
                <nav className=" flex text-Lblue z-50  justify-between py-2 fixed w-full left-0 top-0 bg-Bblue px-5">
                    <img src={Logo} alt="" />
                    <Link className={`${toggle ? "hidden" : "flex"}`} onClick={Toggler} to="" >
                        <HiBars3BottomRight size={50} />
                    </Link>
                    <Link className={`${toggle ? "flex" : "hidden"}`} onClick={Toggler} to="" >
                        <HiXMark size={50} />
                    </Link>
                </nav>
                <div className={`${toggle ? "right-0" : "right-[-100%]"} duration-150 transition-all z-50 fixed  right-0 flex flex-col justify-end float-right items-end top-20`}>
                    <Link to="" onClick={Toggler} className="my-5">
                        <span className=" text-Lblue bg-[#14142A] py-2 px-10 rounded-l-lg text-center">Home</span>
                    </Link>
                    <Link to="" onClick={Toggler} className="my-5">
                        <span className=" text-Lblue bg-[#14142A] py-2 px-10 rounded-l-lg text-center">Sobre mim</span>
                    </Link>
                    <Link to="" onClick={Toggler} className="my-5">
                        <span className=" text-Lblue bg-[#14142A] py-2 px-10 rounded-l-lg text-center">Portfólio</span>
                    </Link>
                    <Link to="" onClick={Toggler} className="my-5">
                        <span className=" text-Lblue bg-[#14142A] py-2 px-10 rounded-l-lg text-center">Portfólio</span>
                    </Link>
                </div>
                <div onClick={Toggler} className={`${toggle ? "w-full h-screen" : "w-0 h-0"} duration-150 fixed bg-Bblue/20 w-full h-screen z-40`}></div>
            </div>

            <div className={`${toggle ? "right-[100%] absolute overflow-hidden " : "right-0 relative"} duration-200 transition-all`}  >
                <Outlet />
            </div>
        </div>
    );
}

export default HomeRoute;
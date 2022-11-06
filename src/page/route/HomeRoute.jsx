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
                <nav className=" Btablet:bg-[#14142A] w-[94%] mx-[3%] my-5 rounded  Btablet:fixed top-0 right-0 Btablet:flex Btablet:justify-between  Btablet:z-50">
                    <nav className=" flex text-Lblue z-50 w-full Btablet:w-auto  justify-between py-2 fixed Btablet:relative  left-0 top-0 bg-Bblue Btablet:bg-transparent px-5">
                        <img src={Logo} alt="" />
                        <div className=" tablet:hidden">
                            <Link className={`${toggle ? "hidden" : "flex"}`} onClick={Toggler} to="" >
                                <HiBars3BottomRight size={50} />
                            </Link>
                            <Link className={`${toggle ? "flex" : "hidden"}`} onClick={Toggler} to="" >
                                <HiXMark size={50} />
                            </Link>
                        </div>
                    </nav>
                    <div className={`${toggle ? "right-0" : "right-[-100%] tablet:right-0"}  Btablet:relative Btablet:float-none Btablet:flex-row Btablet:top-0 Btablet:text-center duration-150 transition-all z-50 fixed  right-0 flex flex-col justify-end float-right items-end top-20`}>
                        <Link to="" onClick={Toggler} className="my-5">
                            <span className=" text-Lblue  bg-[#14142A]  py-2 px-10 rounded-l-lg text-center">Home</span>
                        </Link>
                        <Link to="" onClick={Toggler} className="my-5">
                            <span className=" text-Lblue bg-[#14142A]  Btablet:text-white/50 py-2 px-10 rounded-l-lg text-center">Sobre mim</span>
                        </Link>
                        <Link to="" onClick={Toggler} className="my-5">
                            <span className=" text-Lblue bg-[#14142A]   Btablet:text-white/50 py-2 px-10 rounded-l-lg text-center">Portfólio</span>
                        </Link>
                        <Link to="" onClick={Toggler} className="my-5">
                            <span className=" text-Lblue bg-[#14142A]  Btablet:text-white/50 py-2 px-10 rounded-l-lg text-center">Portfólio</span>
                        </Link>
                    </div>
                </nav>
                <div onClick={Toggler} className={`${toggle ? "w-full h-screen" : "w-0 h-0"} duration-150 fixed bg-Bblue/20 w-full h-screen z-40`}></div>
            </div>

            <div className={`${toggle ? "right-[100%] absolute overflow-hidden " : "right-0 relative"} duration-200 transition-all`}  >
                <Outlet />
            </div>
        </div>
    );
}

export default HomeRoute;
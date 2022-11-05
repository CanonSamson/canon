import Logo from "../asset/svg/Logo.svg"
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Nav = ({onClick}) => {
    return (
        <div>
            <nav className=" flex text-Lblue  justify-between py-2 fixed w-full left-0 top-0 bg-Bblue px-5">
                <img src={Logo} alt="" />
                <HiBars3BottomRight size={50} />
            </nav>
            <div className=" fixed  right-0 flex flex-col justify-end float-right items-end top-20">
                <Link to="" onClick={onClick} className="my-5">
                    <span className=" text-Lblue bg-[#14142A] py-2 px-10 rounded-l-lg text-center">Home</span>
                </Link>
                <Link to="" onClick={onClick} className="my-5">
                    <span className=" text-Lblue bg-[#14142A] py-2 px-10 rounded-l-lg text-center">Sobre mim</span>
                </Link>
                <Link to="" onClick={onClick} className="my-5">
                    <span className=" text-Lblue bg-[#14142A] py-2 px-10 rounded-l-lg text-center">Portfólio</span>
                </Link>
                <Link to="" onClick={onClick} className="my-5">
                    <span className=" text-Lblue bg-[#14142A] py-2 px-10 rounded-l-lg text-center">Portfólio</span>
                </Link>

            </div>

        </div>
    );
}

export default Nav;
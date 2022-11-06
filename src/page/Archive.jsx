import github from "../asset/svg/github.svg"
import HeaderText from "../components/HeaderText";
import { Link } from "react-router-dom";


const Archive = () => {
    return (
        <div>
            <div className=" text-white px-5 ">
                <div className=" pt-20 ">

                    <HeaderText text="Archive" />
                    <p className=" text-white/50">A big list of things I’ve worked on</p>
                </div>

                <section className=" mt-20">

                    <table className="w-full">
                        <tr className="  ">
                            <th className=" py-2  text-left">Year</th>
                            <th className=" py-2  text-left">title</th>
                            <th className="   text-left">Link</th>
                        </tr>
                        <tr>
                            <td className=" text-Lblue py-2 ">2020</td>
                            <td className="py-2 ">100DaysOfCode</td>
                            <td className=" flex items-center">
                                <Link className=" mr-2" to="">
                                    <img className=" w-5" src={github} alt="" />
                                </Link>
                                <Link to="">
                                    <img className=" w-5" src={github} alt="" />
                                </Link>
                            </td>
                        </tr>
                        <tr >
                            <td className=" text-Lblue py-2 ">2020</td>
                            <td className="py-2 ">Covid-19 Helpdesk</td>
                            <td className=" flex items-center">
                                <Link className=" mr-2" to="">
                                    <img className=" w-5" src={github} alt="" />
                                </Link>
                                <Link to="">
                                    <img className=" w-5" src={github} alt="" />
                                </Link>
                            </td>
                        </tr>
                    </table>
                </section>
            </div>
        </div>
    );
}

export default Archive;
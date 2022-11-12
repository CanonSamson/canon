import HeaderText from "../components/HeaderText";
import { Link } from "react-router-dom";


//icons
import icon from "../asset/svg/Vector.svg"
import github from "../asset/svg/github.svg"
import { FiExternalLink } from "react-icons/fi";
import DesignIcon from "../asset/svg/DesignIcon.svg"
import ArrowRight from "../asset/svg/ArrowRight.svg"

//project images
import findersmarket from "../asset/image/findersmarket.png"
import hotelme from "../asset/image/hotelme.png"
import blogr from "../asset/image/desktop-preview.jpg"
import book from "../asset/image/bookmark.jpg"
import news from "../asset/image/newshome.jpg"
import iidea from "../asset/image/iidea.png"
import eazithenga from "../asset/image/eazithenga.png"


const Portfolio = () => {

    const projects = [
        {
            id: 1,
            name: "Eazi Thenga",
            image: eazithenga,
            description: "",
            lang1: "ReactJs",
            lang2: "Tailwind Css",
            lang3: "",
            link: "https://www.eazithenga.com/",
            github: "https://github.com/CanonSamson/eazithenga-main",

        },
        {
            id: 2,
            name: "Finders Market",
            image: findersmarket,
            description: "",
            lang1: "ReactJs",
            lang2: "Tailwind Css",
            lang3: "",
            link: "https://finders-market.vercel.app/",
            github: "https://github.com/CanonSamson/finders-market-frontend",

        },
        {
            id: 3,
            name: "Hotelme",
            image: hotelme,
            description: "",
            lang1: "Html",
            lang2: "CSS",
            lang3: "JavaScript",
            link: "",
            github: "",

        },
        {
            id: 4,
            name: "Iidea.86",
            image: iidea,
            description: "",
            lang1: "ReactJs",
            lang2: "Tailwind Css",
            lang3: "Firebase",
            link: "https://iidea86.vercel.app/",
            github: "https://github.com/CanonSamson/Iidea86",

        },

    ]
    const otherprojects = [
        {
            id: 1,
            name: "Blogr",
            image: blogr,
            description: "",
            lang1: "ReactJs",
            lang2: "Tailwind Css",
            lang3: "",
            link: "",
            github: "https://github.com/CanonSamson/blogr",

        },
        {
            id: 2,
            name: "Bokmark Landing Page",
            image: book,
            description: "",
            lang1: "Html",
            lang2: "CSS",
            lang3: "JavaScript",
            link: "",
            github: "https://github.com/CanonSamson/blogr",

        },
        {
            id: 3,
            name: "News Homepage Main",
            image: news,
            description: "",
            lang1: "Html",
            lang2: "CSS",
            lang3: "JavaScript",
            link: "",
            github: "https://github.com/CanonSamson/news-homepage",

        },
    ]

    return (
        <section id="portfolio" className=" my-10  Btablet:w-[80%] m-auto pt-[100px] ">
            <HeaderText text="🔗 Portfólio" />
            <div className=" Btablet:flex justify-between items-center mt-10 ">
                <h2 className=" text-xl font-semibold text-white">Works And Projects</h2>
                <div className="mt-5 Btablet:mt-0 flex items-center w-full Btablet:w-auto  gap-5 overflow-x-auto">
                    <div className=" min-w-[200px] justify-center  flex items-center border border-Lblue py-2 rounded-lg">
                        <img className=" w-10" src={DesignIcon} alt="" />
                        <span className=" text-Lblue pl-2">FrontEnd</span>
                    </div>

                    <div className="min-w-[200px] justify-center flex items-center border border-Lblue py-2 rounded-lg">
                        <img className=" w-10" src={DesignIcon} alt="" />
                        <span className=" text-Lblue pl-2">UI Design</span>
                    </div>

                    <div className=" min-w-[200px] justify-center  flex items-center border border-Lblue py-2 rounded-lg">
                        <img className=" w-10" src={DesignIcon} alt="" />
                        <span className=" text-Lblue pl-2">Ux Design</span>
                    </div>
                </div>
            </div>
            <div className=" my-10 flex w-full overflow-x-auto Btablet:grid grid-cols-3 ">
                {
                    projects.map((project) => (
                        <div key={project.id} className=" mx-5 mb-5 min-w-[350px]  Btablet:min-w-0 p-5 border border-Lblue rounded-xl">
                            <span className=" text-white text-xl">{project.name}</span>
                            <p className=" text-white/50 py-2">{project.description}</p>
                            <div className=" flex items-center my-5 ">
                                <div className="mr-2">
                                    <span className=" text-Lblue bg-[#14142A] py-2 text-[10px]  px-2 rounded-lg text-center">{project.lang1}</span>
                                </div>
                                <div className="mr-2">
                                    <span className=" text-Lblue bg-[#14142A] py-2 text-[10px]  px-2 rounded-lg text-center">{project.lang2}</span>
                                </div>
                                <div className="mr-2">
                                    <span className=" text-Lblue bg-[#14142A] py-2 text-[10px]  px-2 rounded-lg text-center">{project.lang3}</span>
                                </div>
                            </div>
                            <div className=" flex items-center float-right my-2">
                                <a href={project.link} className=" shadow-xl mr-2 p-2 text-white/50">
                                    <FiExternalLink size={20} />
                                </a>
                                <a href={project.github} className=" shadow-xl p-2">
                                    <img className=" w-5" src={github} alt="" />
                                </a>
                            </div>
                            <img className=" w-full rounded" src={project.image} alt="" />
                        </div>
                    ))
                }
            </div>

            <Link to="" className=" flex justify-end items-center">
                <span className=" text-Lblue/50">View Complete List of Projects/Codes</span>
                <img className=" ml-2" src={ArrowRight} alt="" />
            </Link>


            <section className=" my-10">
                <div className=" flex flex-col justify-center">
                    <h2 className=" text-white text-center text-2xl font-bold mb-5">Other Noteworthy Projects</h2>
                    <Link to="/archive" >
                        <p className=" text-Lblue text-center">View  List of Archive Projects/Codes</p>
                    </Link>
                </div>


                <div className=" my-10 flex w-full overflow-x-auto Btablet:grid grid-cols-3 ">
                    {
                        otherprojects.map((project) => (
                            <div key={project.id} className=" mx-5 mb-5 min-w-[350px]  Btablet:min-w-0 p-5 border border-Lblue rounded-xl">
                                <img className=" w-full rounded mb-5 h-[150px]" src={project.image} alt="" />
                                <span className=" text-white text-xl">{project.name}</span>
                                <p className=" text-white/50 py-2">{project.description}</p>
                                <div className=" flex items-center my-2">
                                    <div className="mr-2">
                                        <span className=" text-Lblue bg-[#14142A] py-2 text-[10px]  px-2 rounded-lg text-center">{project.lang1}</span>
                                    </div>
                                    <div className="mr-2">
                                        <span className=" text-Lblue bg-[#14142A] py-2 text-[10px]  px-2 rounded-lg text-center">{project.lang2}</span>
                                    </div>
                                    <div className="mr-2">
                                        <span className=" text-Lblue bg-[#14142A] py-2 text-[10px]  px-2 rounded-lg text-center">{project.lang3}</span>
                                    </div>
                                </div>
                                <div className=" flex items-center my-2">
                                    <a href={project.link} className=" shadow-xl mr-2 p-2 text-white/50">
                                        <FiExternalLink size={20} />
                                    </a>
                                    <a href={project.github} className=" shadow-xl p-2">
                                        <img className=" w-5" src={github} alt="" />
                                    </a>
                                </div>
                                <div className=" flex items-center justify-end text-Lblue/50">
                                    <p className=" pr-3">Assistir</p>
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        ))
                    }


                </div>
            </section>
        </section>
    );
}

export default Portfolio;
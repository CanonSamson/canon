import HeaderText from "../components/HeaderText";
import DesignIcon from "../asset/svg/DesignIcon.svg"
import portImg from "../asset/image/portImg.png"
import video from "../asset/image/video.png"
import ArrowRight from "../asset/svg/ArrowRight.svg"
import icon from "../asset/svg/Vector.svg"
import github from "../asset/svg/github.svg"
import { Link } from "react-router-dom";


const Portfolio = () => {

    const projects = [
        {
            id: 1,
            name: "Move.it",
            image: portImg,
            description: "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
            lang1: "ReactJs",
            lang2: "Tailwind Css",
            lang3: ""

        },
        {
            id: 2,
            name: "Move.it",
            image: portImg,
            description: "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
            lang1: "ReactJs",
            lang2: "Tailwind Css",
            lang3: ""

        },
        {
            id: 2,
            name: "Move.it",
            image: portImg,
            description: "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
            lang1: "ReactJs",
            lang2: "Tailwind Css",
            lang3: ""

        },
        {
            id: 2,
            name: "Move.it",
            image: portImg,
            description: "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
            lang1: "ReactJs",
            lang2: "Tailwind Css",
            lang3: ""

        },
    ]
    return (
        <section className=" my-10">
            <HeaderText text="🔗 Portfólio" />
            <div className=" Btablet:flex justify-between items-center mt-10 ">
                <h2 className=" text-xl font-semibold text-white">Trabalhos e projetos</h2>
                <div className=" w-full Btablet:w-auto overflow-x-auto ">
                    <div className=" grid grid-cols-3 gap-5 w-[500px]">
                        <div className=" flex items-center border border-Lblue py-2 rounded-lg">
                            <img className=" w-10" src={DesignIcon} alt="" />
                            <span className=" text-Lblue pl-2">UI Design</span>
                        </div>

                        <div className=" flex items-center border border-Lblue py-2 rounded-lg">
                            <img className=" w-10" src={DesignIcon} alt="" />
                            <span className=" text-Lblue pl-2">UI Design</span>
                        </div>

                        <div className=" flex items-center border border-Lblue py-2 rounded-lg">
                            <img className=" w-10" src={DesignIcon} alt="" />
                            <span className=" text-Lblue pl-2">UI Design</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" my-10 flex w-full overflow-x-auto Btablet:grid grid-cols-3">
                {
                    projects.map((project) => (
                        <div key={project.id} className=" mx-5 mb-5 min-w-[350px] p-5 border border-Lblue rounded-xl">
                            <span className=" text-white text-2xl">{project.name}</span>
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
                                <Link className=" shadow-xl mr-2 p-2" to="">
                                    <img className=" w-5" src={github} alt="" />
                                </Link>
                                <Link className=" shadow-xl p-2" to="">
                                    <img className=" w-5" src={github} alt="" />
                                </Link>
                            </div>
                            <img className=" w-full" src={portImg} alt="" />
                        </div>
                    ))
                }
            </div>
            <div className=" flex justify-end items-center">
                <span className=" text-Lblue/50">Ver mais projetos na Behance</span>
                <img className=" ml-2" src={ArrowRight} alt="" />
            </div>


            <section className=" my-10">
                <div className=" flex flex-col justify-center">
                    <h2 className=" text-white text-center text-2xl font-bold mb-5">Other Noteworthy Projects</h2>
                    <p className=" text-Lblue text-center">View Complete List of Projects/Codes</p>
                </div>

                <div className=" my-10">
                    <div className=" w-[350px] p-5 border border-Lblue rounded-xl">
                        <img className=" w-full" src={video} alt="" />
                        <span className=" text-white text-2xl">Visgeo</span>
                        <p className=" text-white/50 py-2">Sistema web ETL no qual dados georreferenciados serão extraídos de shapefiles</p>
                        <div className=" flex items-center my-5 ">
                            <div className="mr-2">
                                <span className=" text-Lblue bg-[#14142A] py-2 text-[10px]  px-2 rounded-lg text-center">ReactJs</span>
                            </div>
                            <div className="mr-2">
                                <span className=" text-Lblue bg-[#14142A] py-2 text-[10px]  px-2 rounded-lg text-center">Tailwind Css</span>
                            </div>
                        </div>
                        <div className=" flex items-center justify-end text-Lblue/50">
                            <p className=" pr-3">Assistir</p>
                            <img src={icon} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </section>
    );
}

export default Portfolio;
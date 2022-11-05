import HeaderText from "../components/HeaderText";
import DesignIcon from "../asset/svg/DesignIcon.svg"
import portImg from "../asset/image/portImg.png"
import video from "../asset/image/video.png"
import ArrowRight from "../asset/svg/ArrowRight.svg"
import icon from "../asset/svg/Vector.svg"


const Portfolio = () => {
    return (
        <section className=" my-10">
            <HeaderText text="🔗 Portfólio" />
            <div className=" w-full overflow-x-auto mt-10">
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

            <div className=" my-10">
                <div className=" w-[350px] p-5 border border-Lblue rounded-xl">
                    <span className=" text-white text-2xl"> Move.it</span>
                    <p className=" text-white/50 py-2">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                    <div className=" flex items-center my-5 ">
                        <div className="mr-2">
                            <span className=" text-Lblue bg-[#14142A] py-2 text-[10px]  px-2 rounded-lg text-center">ReactJs</span>
                        </div>
                        <div className="mr-2">
                            <span className=" text-Lblue bg-[#14142A] py-2 text-[10px]  px-2 rounded-lg text-center">Tailwind Css</span>
                        </div>
                    </div>
                    <img className=" w-full" src={portImg} alt="" />
                </div>
            </div>
            <div className=" flex justify-end items-center">
                <span className=" text-Lblue/50">Ver mais projetos na Behance</span>
                <img className=" ml-2" src={ArrowRight} alt="" />
            </div>


            <section className=" my-10">
                <div>
                    <h2 className=" text-white text-2xl font-bold mb-5">Projetos <br />
                        em vídeo</h2>
                    <p className=" text-white/50">Sempre é bom saber um pouquinho de edição</p>
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
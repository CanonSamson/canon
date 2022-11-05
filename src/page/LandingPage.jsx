import Nav from "../components/Nav";

//svg 
import github from "../asset/svg/github.svg"
import linkedin from "../asset/svg/linkedin.svg"
import behance from "../asset/svg/behance.svg"
import avater from "../asset/svg/AvatarAndIcons.svg"
import HeaderText from "../components/HeaderText";
import whatsAppLogo from "../asset/svg/WhatsappLogo.svg"
import codeIcon from "../asset/svg/CodeIcon.svg"
import DesignIcon from "../asset/svg/DesignIcon.svg"
import mess from "../asset/svg/mess.svg"
import Copysimple from "../asset/svg/CopySimple.svg"
import ArrowUp from "../asset/svg/ArrowUp.svg"

//components
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Experience from "./Experience";


const LandingPage = () => {
    return (
        <div >
            <Nav />
            <main className=" mx-5">
                <header>
                    <div className=" flex justify-center my-10  items-center">
                        <img src={github} alt="" />
                        <img className=" mx-5" src={linkedin} alt="" />
                        <img src={behance} alt="" />
                    </div>
                    <img className=" flex justify-center m-auto" src={avater} alt="" />
                    <div>
                        <HeaderText text="👋 Hello I'm!" />
                        <h1 className=" text-4xl font-bold text-white">Samson canon <span className=" text-white/50">I build things for the web.</span></h1>
                        <p className=" text-white/75 my-5">Front-end developer · UI designer</p>
                        <button className="  flex  items-center border rounded w-[200px] border-[#7B4AE2] justify-center py-4 mt-10 ">
                            <img src={whatsAppLogo} alt="" />
                            <span className="text-Lblue/50 text-xl ml-2">Contact Me</span>
                        </button>
                    </div>
                </header>

                <section className=" pt-10">
                    <div className=" flex flex-col justify-center  items-center border rounded-lg border-[#7B4AE2] p-5 mt-10">
                        <img className=" w-20" src={codeIcon} alt="" />
                        <div className=" flex flex-col my-5 items-center">
                            <span className=" text-white/75 text-xl ">3 years</span>
                            <h2 className=" text-white text-3xl">Programmer</h2>
                        </div>
                    </div>

                    <div className=" flex flex-col justify-center  items-center border rounded-lg border-[#7B4AE2] py-5 mt-10">
                        <img className=" w-20" src={DesignIcon} alt="" />
                        <div className=" flex flex-col my-5 items-center">
                            <span className=" text-white/75 text-xl ">4 years</span>
                            <h2 className=" text-white text-3xl">Designer</h2>
                        </div>
                    </div>
                </section>

                <section className=" pt-20">
                    <HeaderText text="🧐 About Me" />
                    <p className=" text-white/50 my-10 ">Hello! My name is Canon. I work as a FrontEnd developer. I've worked on various projects over the previous three years, and I like developing as well. My first language is English, and my biggest ambition is to see things grow on the internet.</p>
                    <p className=" text-white/50 my-10 ">When starting a new project, I prefer to talk with my customers to have a better grasp of their needs and project vision. Thank you in advance for your time and consideration. I hope to work with you soon.</p>
                    <p className=" text-white/50 my-10 ">Here is a list of the technologies that I'm familiar with!</p>

                </section>

                <Skills />

                <Portfolio />

                <Experience />

                <section className=" py-10">
                    <HeaderText text="📬 Contatos " />
                    <h3>
                        Entre
                        em contato
                    </h3>
                    <button className="  flex  items-center border rounded-lg border-[#7B4AE2] px-10 py-4 mt-10 ">
                        <img src={whatsAppLogo} alt="" />
                        <span className="text-Lblue/50 text-xl ml-5">Contact Me</span>
                    </button>
                    <div className=" my-10">
                        <img className="mb-5" src={mess} alt="" />
                        <p className=" text-xl font-semibold text-Lblue">E-mail:</p>
                        <div className=" flex items-center my-5">
                            <span className=" text-white/50">henriquesousa.dev@gmail.com</span>
                            <img className=" ml-5" src={Copysimple} alt="" />
                        </div>
                        <div className=" flex items-center my-5">
                            <span className=" text-Lblue/50">Voltar ao topo</span>
                            <img className=" ml-5" src={ArrowUp} alt="" />
                        </div>
                    </div>


                </section>
            </main>

            <footer className="  bg-[#14142A] p-5 flex flex-col justify-center ">
                <div className=" flex justify-center my-10 items-center">
                    <img src={github} alt="" />
                    <img className=" mx-5" src={linkedin} alt="" />
                    <img src={behance} alt="" />
                </div>
                <span className=" text-white/50 text-center">Copyright © Henrique Sousa · 2022</span>
            </footer>
        </div>
    );
}

export default LandingPage;
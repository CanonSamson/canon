
//svg 
import github from "../asset/svg/github.svg"
import linkedin from "../asset/svg/linkedin.svg"
import behance from "../asset/svg/behance.svg"
import avater from "../asset/svg/AvatarAndIcons.svg"
import HeaderText from "../components/HeaderText";
import whatsAppLogo from "../asset/svg/WhatsappLogo.svg"
import ArrowLineDown from "../asset/svg/ArrowLineDown.svg"
import CodeIcon from "../asset/svg/CodeIcon.svg"
import ProjectsIcon from "../asset/svg/ProjectsIcon.svg"
import DesignIcon from "../asset/svg/DesignIcon.svg"
import mess from "../asset/svg/mess.svg"
import Copysimple from "../asset/svg/CopySimple.svg"
import ArrowUp from "../asset/svg/ArrowUp.svg"

//components
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import { HashLink } from "react-router-hash-link";


const LandingPage = () => {
    return (
        <div className=" relative">
            <div id="home" className=" absolute "></div>
            <main className=" mx-5 pt-[60px] ">
                <header>
                    <div className=" flex justify-center my-10 Btablet:hidden items-center">
                        <a href="https://github.com/CanonSamson/">
                            <img src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/canon-samson-325736176/">
                            <img className=" mx-5" src={linkedin} alt="" />
                        </a>
                        <img src={behance} alt="" />
                    </div>

                    <div className="min-h-screen  Btablet:flex justify-between Btablet: items-center">
                        <div className="flex  flex-col-reverse Btablet:flex-1 items-center justify-between Btablet:flex-row">
                            <div className=" Btablet:w-[300px] w-full">
                                <HeaderText text="👋 Hello I'm!" />
                                <h1 className=" text-4xl font-bold text-white Btablet:text-2xl">Samson canon <span className=" text-white/50">I build things for the web.</span></h1>
                                <p className=" text-white/75 my-5">Front-end developer · UI designer</p>
                                <div className=" hidden Btablet:flex ">
                                    <img src={github} alt="" />
                                    <img className=" mx-5" src={linkedin} alt="" />
                                    <img src={behance} alt="" />
                                </div>
                            </div>
                            <img className=" flex justify-center m-auto" src={avater} alt="" />
                        </div>
                        <div className=" mt-10 Btablet:mt-0">
                            <div className=" flex items-center mb-5">
                                <p className=" text-Lblue/50">View CV</p>
                                <img src={ArrowLineDown} alt="" />
                            </div>
                            <button className="  flex  items-center border rounded w-[200px] border-[#7B4AE2] justify-center py-4  ">
                                <img src={whatsAppLogo} alt="" />
                                <span className="text-Lblue/50 text-xl ml-2">Contact Me</span>
                            </button>
                        </div>
                    </div>
                </header>


                <section className="hidden Btablet:grid grid-cols-3 gap-5 w-[80%] m-auto ">
                    <div className="  border border-Lblue/50 flex flex-col items-center rounded-xl justify-center py-10 ">
                        <img src={CodeIcon} alt="" />
                        <p className=" text-white/50 ">3 Years</p>
                        <h2 className=" text-2xl font-semibold text-white">Programmer</h2>
                    </div>
                    <div className="  bg-[#14142A] flex flex-col items-center rounded-xl justify-center py-10 ">
                        <img src={ProjectsIcon} alt="" />
                        <p className=" text-white/50 ">7 Years</p>
                        <h2 className=" text-2xl font-semibold text-white">Digital Drawing</h2>
                    </div>
                    <div className="  border border-Lblue/50 flex flex-col items-center rounded-xl justify-center py-10 ">
                        <img src={DesignIcon} alt="" />
                        <p className=" text-white/50 ">4 Years</p>
                        <h2 className=" text-2xl font-semibold text-white">Designer</h2>
                    </div>

                    <div className=" col-span-3  justify-center grid grid-cols-3 bg-[#14142A] p-3 rounded-xl text-Lblue/50 ">
                        <div>
                            <p className=" text-center">Developer</p>
                            <h2 className=" text-xl text-center font-semibold">Front-end</h2>
                        </div>
                        <div>
                            <p className=" text-center">dozens of projects and</p>
                            <h2 className=" text-xl text-center font-semibold">Experience</h2>
                        </div>
                        <div>
                            <p className=" text-center">Designer Freelancer e</p>
                            <h2 className=" text-xl text-center font-semibold">UI · UX</h2>
                        </div>
                    </div>
                </section>
                <section id="about" className=" Btablet:flex items-center Btablet:w-[80%] pt-[100px]  m-auto">
                    <div>
                        <HeaderText text="🧐 About Me" />
                        <p className=" text-white/50 my-10 ">Hello! My name is Canon. I work as a FrontEnd developer. I've worked on various projects over the previous three years, and I like developing as well. My first language is English, and my biggest ambition is to see things grow on the internet.</p>
                        <p className=" text-white/50 my-10 ">When starting a new project, I prefer to talk with my customers to have a better grasp of their needs and project vision. Thank you in advance for your time and consideration. I hope to work with you soon.</p>
                        <p className=" text-white/50 my-10 ">Here is a list of the technologies that I'm familiar with!</p>
                        <Skills />
                    </div>
                </section>
                <Portfolio />
                <Experience />
                <section id="contact" className=" py-10 Btablet:flex justify-center pt-[100px] flex-col Btablet:w-[80%] m-auto ">
                    <HeaderText text="📬 Contact Me " />
                    <h4 className=" text-xl Btablet:text-3xl  Btablet:pt-10 font-semibold text-white Btablet:text-center">Let's Talk! </h4>
                    <div className=" my-10 Btablet:flex justify-center flex-col items-center">
                        <img className="mb-5" src={mess} alt="" />
                        <p className=" text-xl font-semibold text-Lblue">E-mail:</p>
                        <div className=" flex items-center my-5">
                            <span className=" text-white/50">samsoncanon2018@gmail.com</span>
                            <img className=" ml-5" src={Copysimple} alt="" />
                        </div>

                    </div>
                </section>
                <HashLink to="#home" smooth >
                    <img className="my-10 p-5 rounded-full bg-Lblue/20  " src={ArrowUp} alt="" />
                </HashLink>
            </main>

            <footer className=" bg-[#14142A] p-5 flex flex-col justify-center ">
                <div className=" flex justify-center my-10 items-center">
                    <a href="https://github.com/CanonSamson/">
                        <img src={github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/canon-samson-325736176/">
                        <img className=" mx-5" src={linkedin} alt="" />
                    </a>
                    <img src={behance} alt="" />
                </div>
                <span className=" text-white/50 text-center">Copyright © samson canon · 2022</span>
            </footer>
        </div>
    );
}

export default LandingPage;
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
import Skills from "./Skills";


const LandingPage = () => {
    return (
        <div className=" mx-5">
            <Nav />
            <header>
                <div className=" flex justify-center my-10  items-center">
                    <img src={github} alt="" />
                    <img className=" mx-5" src={linkedin} alt="" />
                    <img src={behance} alt="" />
                </div>
                <img className=" flex justify-center m-auto" src={avater} alt="" />
                <div>
                    <HeaderText text="👋 Hello I'm!" />
                    <h1 className=" text-6xl font-bold text-white">Samson <br /> canon</h1>
                    <p className=" text-white/75 my-5">Front-end developer · UI designer</p>
                    <button className="  flex  items-center border rounded-lg border-[#7B4AE2] px-10 py-4 mt-10 ">
                        <img src={whatsAppLogo} alt="" />
                        <span className="text-Lblue/50 text-xl ml-5">Contact Me</span>
                    </button>
                </div>
            </header>

            <section className=" pt-10">
                <div className=" flex flex-col justify-center  items-center border rounded-lg border-[#7B4AE2] p-5 mt-10">
                    <img className=" w-20" src={codeIcon} alt="" />
                    <div className=" flex flex-col my-5 items-center">
                        <span className=" text-white/75 text-xl ">3 years</span>
                        <h2 className=" text-white text-3xl">Programer</h2>
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
                <p className=" text-white/50 my-10 ">Mas pode me chamar apenas de Henrique. Prazer! Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS e Typescript. Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de São José dos Campos. Interesses em desenvolvimento Front-end com React, React Native e UX/UI Design.

                    🚀 Tentando ser um pouquinho melhor do que ontem todos os dias. </p>

            </section>

            <Skills />


            <section>
                <HeaderText text="🔗 Portfólio" />
            </section>
        </div>
    );
}

export default LandingPage;
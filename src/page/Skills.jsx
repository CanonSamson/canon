import HeaderText from "../components/HeaderText";
import github from "../asset/svg/github.svg"
import TailwindCSS from "../asset/svg/TailwindCSS.svg"
import Nodejs from "../asset/svg/Nodejs.svg"
import Figma from "../asset/svg/Figma.svg"
import css from "../asset/svg/css.svg"
import git from "../asset/svg/Shape.svg"
import react from "../asset/svg/Vector.svg"


const Skills = () => {
    return (
        <section className="my-20">
            <HeaderText text="🧑‍💻 Skills " />
            <h1 className=" text-4xl font-bold text-white">Tecnologias <br /> e habilidadescanon</h1>
            <span className=" text-xl text-white/50 ">Techs I use not every day</span>
            <div className=" w-full overflow-x-auto my-5">
                <div className=" w-[800px] flex items-center">
                    <img className="w-[70px] mx-4" src={react} alt="" />
                    <img className="w-[70px] mx-4" src={Nodejs} alt="" />
                    <img className="w-[70px] mx-4" src={css} alt="" />
                    <img className="w-[70px] mx-4" src={TailwindCSS} alt="" />
                    <img className="w-[70px] mx-4" src={github} alt="" />
                    <img className="w-[70px] mx-4" src={git} alt="" />
                    <img className="w-[70px] mx-4" src={Figma} alt="" />

                </div>
            </div>
        </section>
    );
}

export default Skills;
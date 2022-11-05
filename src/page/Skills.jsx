import HeaderText from "../components/HeaderText";
// import github from "../asset/svg/github.svg"
// import TailwindCSS from "../asset/svg/TailwindCSS.svg"
// import Nodejs from "../asset/svg/Nodejs.svg"
// import Figma from "../asset/svg/Figma.svg"
// import css from "../asset/svg/css.svg"
// import git from "../asset/svg/Shape.svg"
import icon from "../asset/svg/Vector.svg"


const Skills = () => {
    return (
        <section className="mb-20 ">
            <div className=" flex">
                <ul className=" mr-5">
                    <Li text="Html" />
                    <Li text="Css" />
                    <Li text="Styled Components" />
                    <Li text="TailwindCss" />
                </ul>
                <ul>
                    <Li text="JavaScript" />
                    <Li text="ReactJs" />
                    <Li text="React Native" />
                    <Li text="EcommenceJs" />
                </ul>
            </div>

        </section>
    );
}

const Li = ({ text }) => {
    return (
        <li className=" flex items-center"><img className=" mr-2 w-2" src={icon} alt="" /> <span className=" text-[14px] text-Lblue">{text}</span></li>
    );
}

export default Skills;
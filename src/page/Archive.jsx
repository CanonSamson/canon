import github from "../asset/svg/github.svg"
import HeaderText from "../components/HeaderText";
import { Link } from "react-router-dom";


const Archive = () => {
    const archives = [
        {
            id: 1,
            name: '100DaysOfCode',
            date: 2020,
            github: '',
            link: '',
            lang1: 'ReactJs',
            lang2: "Tailwind CSs"

        },
        {
            id: 2,
            name: '100DaysOfCode',
            date: 2020,
            github: '',
            link: '',
            lang1: 'ReactJs',
            lang2: "Tailwind CSs"

        },
    ]
    return (
        <div>
            <div className=" text-white px-5 ">
         
                    <div className="my-5  pt-[200px] ">
                        <span className=" text-Lblue bg-[#14142A] py-2 px-10 rounded-lg text-2xl text-center">Archive</span>
                    </div>
                    <p className=" text-white/50">A big list of things I’ve worked on</p>

                <section className=" mt-[60px]">
                    {
                        archives.map((archive) => (
                            <div key={archive.id} className=" bg-[#14142A] p-5 shadow rounded my-2">
                                <div className=" flex items-center justify-between">
                                    <div>
                                        <p className=" text-Lblue py-2 ">{archive.date}</p>
                                        <p>{archive.name}</p>
                                    </div>
                                    <div className=" flex ">
                                        <Link className=" mr-2" to={archive.link}>
                                            <img className=" w-5" src={github} alt="" />
                                        </Link>
                                        <Link to={archive.github}>
                                            <img className=" w-5" src={github} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className=" flex items-center my-5 ">
                                    <div className="mr-2">
                                        <span className=" text-Lblue bg-[#14142A] shadow-xl border border-Lblue py-2 text-[10px]  px-2 rounded-lg text-center">{archive.lang1}</span>
                                    </div>
                                    <div className="mr-2">
                                        <span className=" text-Lblue bg-[#14142A] border border-Lblue py-2 text-[10px]  px-2 rounded-lg text-center">{archive.lang2}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </section>

            </div>
        </div>
    );
}

export default Archive;
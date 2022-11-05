import HeaderText from "../components/HeaderText";


const Experience = () => {
    return (
        <div className=" text-white py-10">
            <HeaderText text="💼 Carreira " />
            <h2 className="text-xl font-semibold my-5 pt-10">Trajetória<br />
                até aqui</h2>

            <section className=" py-5">
                <h2 className=" my-5">
                    Área
                    profissional
                </h2>
                <span className=" text-white/50 ">2016 · Atualmente</span>

                <div className=" mt-5">
                    <div className="w-[360px] p-5 border border-Lblue rounded-xl ">
                        <span className=" text-white text-xl font-semibold ">Designer na Viralizzi</span>
                        <p className=" text-white/50 py-5">Disponibilizando serviços para mídias digitais na Viralizzi como Designer.</p>
                        <div className=" text-Lblue/50 flex justify-between items-center">
                            <span>   3 meses</span>
                            <span>Janeiro/2021 · Abril/2021</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className=" py-5">
                <h2 className=" my-5">
                    Área
                    Acadêmica
                </h2>
                <span className=" text-white/50 ">2017 · Atualmente</span>

                <div className=" mt-5">
                    <div className="w-[360px] p-5 border border-Lblue rounded-xl ">
                        <span className=" text-white text-xl font-semibold ">Designer na Viralizzi</span>
                        <p className=" text-white/50 py-5">Disponibilizando serviços para mídias digitais na Viralizzi como Designer.</p>
                        <div className=" text-Lblue/50 flex justify-between items-center">
                            <span>   3 meses</span>
                            <span>Janeiro/2021 · Abril/2021</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Experience;
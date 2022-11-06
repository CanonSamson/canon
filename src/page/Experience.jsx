import HeaderText from "../components/HeaderText";


const Experience = () => {
    return (
        <div className=" text-white py-10">
            <HeaderText text="💼 Experience" />

            {/* <section className=" py-5">
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
            </section> */}






            <div>


                <div id='experience' >

                    <div className=' grid-cols-3 mt-10 hidden  m-auto max-w-[940px] sm:grid'>
                        <div className='  '>
                            <ul className=' text-#1c0f3f/50'>
                                <li className='pl-5 py-3  border-[#1c0f3f] border-l-2'>JavaScript (ES6+)</li>
                                <li className='pl-5 py-3 border-l'>React</li>
                                <li className='pl-5 py-3 border-l'>React Native</li>
                                <li className='pl-5 py-3 border-l'>Tailwindcss</li>
                            </ul>
                        </div>
                        <div className=' col-span-2'>
                            <h4 className=' text-#1c0f3f text-xl'>Engineer @ Upstatemant</h4>
                            <p className='my-3 text-#1c0f3f'>My 2010 - present</p>
                            <p className='text-#1c0f3f/50 my-3'>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</p>
                            <p className='text-#1c0f3f/50'>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
                        </div>
                    </div>


                    <div className=" Btablet:hidden">
                        <div className='  text-Lblue/50 mt-10'>
                            <div className=' mb-[20px] overflow-x-auto w-full'>
                                <div className="w-[700px] h-[40px] items-center ">
                                    <span className='text-Lblue border-b-2 border-Lblue w-[100px] py-2 sm:mr-3   ml-3'>n-hub Nigeria</span>
                                    <span className='text-white border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>Hackathon</span>
                                    <span className='text-white border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>Freelencer</span>
                                    <span className='text-white border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>Welwings</span>
                                    <span className='text-white border-b-2  w-[100px] py-2 sm:mr-3   ml-3'>n-hub Foundation!</span>
                                </div>
                            </div>
                            <p className=' text-white'>I was an intern at n-hub Foundation, specializing in building (web applications and Native applications )!</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Experience;
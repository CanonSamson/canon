import HeaderText from "../components/HeaderText";


const Experience = () => {
    return (
        <div id='experience' className=" text-white py-10 Btablet:w-[80%] m-auto pt-[100px]">
            <HeaderText text="💼 Experience" />

            <div >

                <div className=' grid-cols-3 mt-10 hidden    tablet:grid'>
                    <div className='  '>
                        <ul className=' '>
                            <li className='pl-5 py-3 text-Lblue border-Lblue border-l-2'>Eazi thenga</li>
                            <li className='pl-5 py-3 border-l'>n-hub Nigeria</li>
                            <li className='pl-5 py-3 border-l'>Hackathon</li>
                            <li className='pl-5 py-3 border-l'>Welwings</li>
                            <li className='pl-5 py-3 border-l'>n-hub Foundation!</li>
                        </ul>
                    </div>
                    <div className=' col-span-2'>
                        <h4 className=' text-Lblue text-xl '>FrontEnd Developer</h4>
                        <p className='my-3 text-white/50'> 2022 - 2022</p>
                        <p className='text-white my-3'>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</p>
                        <p className='text-white'>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
                    </div>
                </div>


                <div className=" tablet:hidden">
                    <div className='  text-Lblue/50 mt-10'>
                        <div className=' mb-[20px] overflow-x-auto w-full'>
                            <div className="w-[700px] h-[40px] items-center ">
                                <span className='text-Lblue border-b-2 border-Lblue w-[100px] py-2 sm:mr-3   ml-3'>Eazi thenga</span>
                                <span className='text-white border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>Hackathon</span>
                                <span className='text-white border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>Freelencer</span>
                                <span className='text-white border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>Welwings</span>
                                <span className='text-white border-b-2  w-[100px] py-2 sm:mr-3   ml-3'>n-hub Nigeria!</span>
                            </div>
                        </div>
                        <p className='text-white/50 my-3'>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</p>
                        <p className='text-white/50'>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
                        {/* <p className=' text-white'>I was an intern at n-hub Foundation, specializing in building (web applications and Native applications )!</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
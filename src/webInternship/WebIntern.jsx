import { NavLink } from "react-router-dom"
import "../css/globalHero.css"
const WebIntern = () => {
    return (
        <>

            <section id="webIntern" className="bg-white text-black">
                <div className="heading text-center text-3xl pt-20 ">
                    <div className="mb-4 font-bold">
                        <h1>INTERNSHIPS</h1>
                    </div>
                    <div className="text text-[3rem]">
                        BECOME SKILLED AT WHAT MATTER&apos;S
                    </div>
                </div>
                <div className="coursesContainer">

                    {/* web development */}

                    <div className="container internship mx-auto flex px-16 my-16 md:flex-row flex-col items-center w-11/12 text-black bg-white rounded-[13px] py-10 ">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <div className="box backdrop-blur-lg bg-slate-900 text-white py-2 px-10 text-lg rounded-r-3xl rounded-l-lg font-bold">
                                Web Development Internship
                            </div>
                            <div className="level flex justify-between w-3/5 ">
                                <a href='#' className="totalIntenship bg-gray-300 py-2 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                                    <div className="number font-bold text-black text-lg">
                                        @MICROSTEP
                                    </div>
                                </a>
                                <a href='#' className="totalIntenship  bg-gray-300  py-2 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                                    <div className="number font-bold text-black text-lg">
                                        location India
                                    </div>
                                </a>
                                <a href='#' className="totalIntenship bg-gray-300 py-2 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                                    <div className="number font-bold text-black text-lg">
                                        Duration : 1 Month
                                    </div>
                                </a>
                            </div>
                            <div className="line bg-gray-600 w-full  pt-0.5 my-3"> </div>
                            <h2 className=" text-2xl font-bold">Minimum Qualification : </h2>
                            <div className="qualification py-3 pl-16">
                                <ul>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3">Bachelor&apos;s degree in Computer Science, a related technical field, or equivalent practical experience.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3">5 years of experience in full-stack web development.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3">5 years of experience in Java, C++, Python, or related object oriented programming.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3">5 years of experience in TypeScript/JavaScript front-end programming and Database/SQL.</p>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                            <div className="flex justify-center pl-16">
                                <NavLink to={"/applicationPageWeb1Month"}>
                                    <button className="py-3 px-7 border text-blue-500 hover:bg-gray-200 hover:text-blue-600 ">
                                        Learn more
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>




                </div>
            </section>

        </>
    )
}

export default WebIntern
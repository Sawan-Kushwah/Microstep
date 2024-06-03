import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../css/globalHero.css"
import web from "../assets/Nerd.png"
import WebIntern from '../webInternship/WebIntern'
import { NavLink } from 'react-router-dom'

const Webdevelopment = () => {
    return (

        <>
            <Navbar />

            <section id="web" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container w-full flex justify-around relative z-10 top-36 items-center px-5">
                    <div className="hero-text-section  w-3/5 pl-14">
                        <div className="mainText ">
                            <span className='flex flex-col space-y-3 mb-5'><h1 className="  text-green-500 text-6xl w-1/2">THE WEB DEVELOPER : </h1> <span className='text-5xl font-bold'>MAKE WEBSITE</span><span className='text-4xl font-bold'>CREATION YOUR CARRIER</span></span>
                            <p className=" text-md text-slate-400 w-4/5">Have you ever dream of becoming a <span className=" text-blue-500 cursor-pointer"> Web developer?</span> This is your first step to getting there. Whether you want to take up web development as a full time career or a part-time job, this all-in-one course is your perfect plan of action.</p>
                        </div>
                        <div className="totalIntenship bg-gray-900 p-5 w-fit mt-5 rounded-3xl">
                            <div className="number font-bold text-white text-lg">
                                3+ Internship and many more to come
                            </div>
                        </div>
                        <div className="level flex justify-between w-3/5 ">
                            <NavLink to={"/applicationPageWeb1Month"} className="totalIntenship bg-gray-900 py-4 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                                <div className="number font-bold text-white text-lg">
                                    BASIC
                                </div>
                            </NavLink>
                            <a href='#' className="totalIntenship bg-gray-900 py-4 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                                <div className="number font-bold text-white text-lg">
                                    INTERMEDIATE
                                </div>
                            </a>
                            <a href='#' className="totalIntenship bg-gray-900 py-4 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                                <div className="number font-bold text-white text-lg">
                                    ADVANCE
                                </div>
                            </a>
                        </div>
                        <div className="coursesHappyLearner pt-10">
                            <div className="button">
                                <a href="#webIntern">
                                    <button className="relative inline-flex items-center rounded-3xl justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span className="relative px-28 rounded-3xl py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 text-2xl">
                                            JOIN TODAY TO STARTED
                                        </span>
                                    </button></a>
                                <div className="happyLearner text-white flex w-72 justify-evenly pt-7">
                                    <div className="learner">
                                        <div>
                                            1000+
                                        </div>
                                        <div>
                                            Happy Learners
                                        </div>
                                    </div>
                                    <span className=" bg-slate-300 w-[1px]"></span>
                                    <div className="rating flex items-center">
                                        4.3 ⭐ Rating
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="hero-container heroImageSection w-2/5">
                        <img src={web} alt="" className=" w-full" />
                    </div>
                </div>
            </section>

            <WebIntern />

            <Footer />

        </>
    )
}

export default Webdevelopment
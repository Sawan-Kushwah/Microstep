import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import programming from "../assets/Nerd.png"
import { useEffect } from 'react'
import CodingIntern from '../programmingInternships/CodingIntern'

const Programming = () => {
    useEffect(() => {
        window.scrollTo(0, 0) // this is render page from the top
    }, [])
    return (

        <>
            <div className="card" id="star-card"></div>
            <Navbar />
            <section id="programming" className="d-flex flex-column justify-content-center align-items-center mb-5 max-md:h-[790px]">
                <div className="hero-container w-full flex justify-around relative z-10 top-36 items-center px-5 max-md:flex-col">
                    <div className="hero-text-section  w-3/5 pl-14 max-md:w-full max-md:pl-0">
                        <div className="mainText ">
                            <span className='flex flex-col space-y-3 mb-5 max-md:text-3xl'><h1 className="  text-red-500 text-6xl max-md:w-full max-md:text-5xl">THE PROGRAMMER : </h1> <span className='text-5xl font-bold'>DERIVE CODE</span><span className='text-4xl font-bold'>CREATION YOUR CARRIER</span></span>
                            <p className=" text-md text-slate-400 w-4/5 max-md:w-full">Have you ever dream of becoming a <span className=" text-blue-500 cursor-pointer"> Software development?</span> This is your first step to getting there. Whether you want to take up Software development as a full time career or a part-time job, this all-in-one course is your perfect plan of action.</p>
                        </div>
                        <div className="totalIntenship bg-slate-800 p-5 w-fit mt-5 rounded-3xl max-md:hidden">
                            <div className="number font-bold text-white text-lg">
                                3+ Internship and many more to come
                            </div>
                        </div>
                        <div className="level flex justify-between w-3/5 max-md:w-full ">
                            <a href='#c' className="totalIntenship bg-slate-800 max-md:px-8 max-md:py-3 py-4 px-16 w-fit mt-5 rounded-3xl cursor-pointer">
                                <div className="number font-bold text-white text-lg">
                                    C
                                </div>
                            </a>
                            <a href='#cpp' className="totalIntenship bg-slate-800 max-md:px-8 max-md:py-3 py-4 px-16 w-fit mt-5 rounded-3xl cursor-pointer">
                                <div className="number font-bold text-white text-lg">
                                    C++
                                </div>
                            </a>
                            <a href='#java' className="totalIntenship bg-slate-800 max-md:px-8 max-md:py-3 py-4 px-16 w-fit mt-5 rounded-3xl cursor-pointer">
                                <div className="number font-bold text-white text-lg">
                                    JAVA
                                </div>
                            </a>

                        </div>
                        <div className="coursesHappyLearner pt-8 max-md:pt-5">
                            <div className="button">
                                <a href="#condingIntern">
                                    <button className="btn btn-red max-md:px-20">
                                        join today !!!
                                    </button>
                                </a>
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
                    <div className="hero-container heroImageSection w-2/5 max-md:hidden">
                        <img src={programming} alt="" className=" w-full" />
                    </div>
                </div>
            </section>
            <CodingIntern />
            <Footer />

        </>
    )
}

export default Programming
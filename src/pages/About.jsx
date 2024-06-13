import { useEffect } from "react"
import Footer from "../components/Footer.jsx"
import Navbar from "../components/Navbar.jsx"
import Testimonial from "../components/Testimonial.jsx"
import FocusedArea from "../components/FocusedArea.jsx"



const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0) // this is render page from the top
    }, [])
    return (
        <>
            <Navbar />
            <section className="text-gray-400 body-font">
                <div className="container px-5 pt-32 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">ABOUT MICROSTEP</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Welcome to Microstep</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Where innovation meets opportunity. As a dynamic entity in the business landscape, Microstep has successfully delivered a wide array of impactful services to companies across various industries. Our commitment to excellence and fostering talent has enabled us to build a reputation as a trusted partner in driving organizational success.</p>
                    </div>
                </div>

                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-12">
                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                            <span className="inline-block py-1 px-2 rounded text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">Our Mission</span>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Business Solutions and Innovation : </h2>
                            <p className="leading-relaxed mb-8">At Microstep, we leverage our expertise to deliver innovative and impactful services that drive business success. From strategic consulting and market analysis to digital transformation and technology solutions, we partner with organizations to overcome challenges, seize opportunities, and achieve sustainable growth.</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                                <a className="text-blue-400 inline-flex items-center">MICROSTEP
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1K
                                </span>
                                <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>20
                                </span>
                            </div>
                        </div>
                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                            <span className="inline-block py-1 px-2 rounded text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">Industry and Education</span>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Excellence in Education and Industry Engagement : </h2>
                            <p className="leading-relaxed mb-8">We are committed to excellence in education by bridging the gap between academic learning and real-world application. Through industry partnerships and collaborative initiatives, Microstep facilitates meaningful engagements that enrich learning experiences, promote industry best practices, and cultivate future leaders.</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                                <a className="text-blue-400 inline-flex items-center">MICROSTEP
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.9K
                                </span>
                                <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>56
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FocusedArea />
            <section className="text-gray-400 body-font pt-32">
                <div className="container px-5 py-4 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Microstep fosters a culture of community, collaboration and stakeholders</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">come together to exchange knowledge, ideas, and resources. By creating a supportive environment for students and businesses alike, we strengthen connections, inspire innovation, and contribute positively to society.</p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial />
            <Footer />

        </>
    )
}

export default About
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "../src/css/globalHero.css"
import heroImg from "./assets/Nerd.png"
import HomeCourses from "./components/HomeCourses"
import Testimonial from "./components/Testimonial"
import FocusedArea from "./components/FocusedArea"
import Faqs from "./components/Faqs"
import "./css/button.css"
import "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"
import Sketch from "./sketch"
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";


const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div>
        <Sketch />
        {/* <CanvasBackground  /> */}
        <div  >
          <Navbar />

          <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container w-full flex justify-around relative z-10 top-36 items-center px-5 max-md:flex-col max-md:top-40">
              <div className="hero-text-section  w-3/5 pl-14 max-md:w-full max-md:pl-0">
                <div className="mainText ">
                  <h1 className=" pb-6 text-6xl mb-3 max-md:text-3xl">LEARN WHAT COLLEGE DOESN&apos;T TEACH YOU</h1>
                  <p className=" text-md text-slate-400 w-4/5 max-md:w-full">At <span className=" text-blue-500 cursor-pointer">Microstep</span>, you can gain practical knowledge and learn real-world skills that will help you transform your life at work, college and placement</p>
                </div>
                <div className="coursesHappyLearner pt-9 max-md:pt-5">
                  <p className=" text-md text-slate-400 w-4/5 mb-4"><span className=" text-red-500 cursor-pointer">Real-world Project</span> & <span className=" text-red-500 cursor-pointer">Internship</span> Opportunities for Early Learners</p>
                  <div className="button">
                    <div className="flex flex-col gap-4">
                      <a href="#courses" className=" w-fit">
                        <button className="btn">
                          Explore Internships
                        </button>
                      </a>
                      {isAuthenticated &&
                        <NavLink to={"/submitYourCodeHere"} className="w-fit">
                          <button className="btn btn-green px-16">
                            Submit Your Code
                          </button>
                        </NavLink>
                      }
                    </div>
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
              <div className="hero-container heroImageSection w-2/5 max-md:hidden" >
                <img src={heroImg} alt="" className=" w-full" />
              </div>
            </div>
            <div className="floatingText absolute bottom-3 w-full h-20 z-20" >
              <div className="marquee text-white text text-6xl w-11/12 m-auto h-full overflow-hidden">
                <h1>
                  <span className="text-red-500">C</span>ode with Confidence:
                  <span className="text-red-500"> Bu</span>ild Real-World
                  <span className="text-red-500"> Pro</span>jects, Apps &
                  <span className="text-red-500"> G</span>ames, Code Your
                  <span className="text-red-500"> Futu</span>re,
                  <span className="text-red-500"> G</span>et  Certif
                  <span className="text-red-500">ied.</span>
                </h1>
              </div>
            </div>
          </section>

          <HomeCourses />
          <Testimonial />
          <FocusedArea />
          <Faqs />
          <Footer />
        </div>
      </div >

    </>
  )
}

export default App
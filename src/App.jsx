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
const App = () => {

  const { isAuthenticated, user } = useAuth0();
  console.log(user);
  const checkStudentIsEnrolled = async () => {
    let response = await fetch("http://localhost:3000/checkStudentEnrollment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentMail: user.email })
    })
    let res = await response.json();
    if (response.status === 404) {
      alert("You are not Enroll in any current program");
    } else if (response.status === 500) {
      alert("Try again later");
    } else if (response.status === 400) {
      alert("You are not selected")
    } else {
      alert("ho gaya bhai");
    }
    console.log(res);
  }

  return (
    <>
      <div   >
        <Sketch />
        {/* <CanvasBackground  /> */}
        <div  >
          <Navbar />

          <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container w-full flex justify-around relative z-10 top-36 items-center px-5">
              <div className="hero-text-section  w-3/5 pl-14">
                <div className="mainText ">
                  <h1 className=" pb-6 text-6xl mb-3">LEARN WHAT COLLEGE DOESN&apos;T TEACH YOU</h1>
                  <p className=" text-md text-slate-400 w-4/5">At <span className=" text-blue-500 cursor-pointer">Microstep</span>, you can gain practical knowledge and learn real-world skills that will help you transform your life at work, college and placement</p>
                </div>
                <div className="coursesHappyLearner pt-11">
                  <div className="button">
                    <div className="flex flex-col gap-4">
                      <a href="#courses" className=" w-fit">
                        <button className="btn">
                          Explore Internships
                        </button>
                      </a>
                      {isAuthenticated &&
                        <div onClick={checkStudentIsEnrolled} className="w-fit">
                          <button className="btn btn-green px-16">
                            Submit Your Code
                          </button>
                        </div>
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
              <div className="hero-container heroImageSection w-2/5">
                <img src={heroImg} alt="" className=" w-full" />
              </div>
            </div>
          </section>

          <HomeCourses />
          <Testimonial />
          <FocusedArea />
          <Faqs />
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
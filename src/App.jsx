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
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const App = () => {

  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [studentID, setStudentID] = useState("");
  const [error, seterror] = useState("");

  //handel student id form
  const closeFrom = () => {
    document.getElementById('studentIdForm').classList.add('hidden');
    seterror("");
    setStudentID("");
  }
  const showStudentIdForm = () => {
    document.getElementById('studentIdForm').classList.remove("hidden")
  }

  const getStudentId = (e) => {
    setStudentID(e.target.value);
    console.log(e.target.value);
    seterror("");
  }


  const checkStudentIsEnrolled = async () => {
    if (studentID === "") {
      seterror("This field is required");
    } else {
      // setStudentID("");
      let response = await fetch("http://localhost:3000/checkStudentEnrollment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentID: studentID })
      })
      let res = await response.json();
      console.log(res);

      if (response.status === 200) {
        navigate("/submitTask", { state: { studentID: studentID, email: res.email } });
      } else {
        seterror("Invalid ID");
      }
    }
  }

  return (
    <>
      <div id="studentIdForm" className="border p-15 h-96  w-2/3 space-x-4 bg-slate-900 absolute top-[22%] left-[18%] hidden  z-[100]">
        <div className="close mb-5  text-end p-5 cursor-pointer" onClick={closeFrom}>Close</div>
        <div className="  m-0 form flex flex-col justify-center items-center">
          <div className="text font-bold text-3xl pb-6">
            Give Your Submission ID
          </div>
          <p className="relative right-[36%] text-sm text-gray-400 font-normal mb-2">Sent on the mail with offer letter</p>
          <input type="text" className="p-2 border w-11/12 mx-auto bg-white text-black font-bold text-lg mb-8" placeholder="Submission ID" onChange={getStudentId} value={studentID ? studentID : ""} />
          {error && <p className="relative  -top-7   text-red-400 font-normal">*{error}</p>}
          <button type="submit" className="btn px-20 btn-green" onClick={checkStudentIsEnrolled}>Verify</button>
        </div>
      </div >
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
                <div className="coursesHappyLearner pt-9">
                <p className=" text-md text-slate-400 w-4/5 mb-4"><span className=" text-red-500 cursor-pointer">Real-world Project</span> & <span className=" text-red-500 cursor-pointer">Internship</span> Opportunities for Early Learners</p>
                  <div className="button">
                    <div className="flex flex-col gap-4">
                      <a href="#courses" className=" w-fit">
                        <button className="btn">
                          Explore Internships
                        </button>
                      </a>
                      {isAuthenticated &&
                        <div onClick={showStudentIdForm} className="w-fit">
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
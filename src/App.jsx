import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "../src/css/globalHero.css"
import heroImg from "./assets/Nerd.png"
import HomeCourses from "./components/HomeCourses"
import Testimonial from "./components/Testimonial"
import FocusedArea from "./components/FocusedArea"
import Faqs from "./components/Faqs"

const App = () => {
  return (
    <>
      <Navbar />

      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container w-full flex justify-around relative z-10 top-36 items-center px-5">
          <div className="hero-text-section  w-3/5 pl-14">
            <div className="mainText ">
              <h1 className=" pb-6 text-6xl mb-3">LEARN WHAT COLLEGE DOESN&apos;T TEACH YOU</h1>
              <p className=" text-md text-slate-400 w-4/5">At <span className=" text-blue-500 cursor-pointer">Microstep</span>, you can gain practical knowledge and learn real-world skills that will help you transform your life at work, college and placement</p>
            </div>
            <div className="coursesHappyLearner pt-16">
              <div className="button">
                <a href="#courses">
                  <button className="relative inline-flex items-center rounded-3xl justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-28 rounded-3xl py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 text-2xl">
                      Explore courses
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
            <img src={heroImg} alt="" className=" w-full" />
          </div>
        </div>
      </section>



      <HomeCourses />


      <Testimonial />
      <FocusedArea />
      <Faqs />
      <Footer />

    </>
  )
}

export default App
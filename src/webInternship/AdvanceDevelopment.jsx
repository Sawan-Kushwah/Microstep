import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
const AdvanceDevelopment = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const learnMoreButton = () => {
        let text = document.getElementById('learnMoreTextAdvance');
        let learnBtn = document.getElementById('learnAdvance');

        if (text.classList.contains('hidden')) {
            text.classList.remove('hidden');
            learnBtn.innerText = "Read less";
        } else {
            text.classList.add('hidden');
            learnBtn.innerText = "Read more";
        }

    }
    const goToApplyNow = () => {
        if (!isAuthenticated) {
            if (confirm("Login to apply")) {
                loginWithRedirect();
            }
        } else {
            navigate("/applyNow");
        }
    }
    return (
        <>

            <div id="advance" className="container internship mx-auto max-md:px-3 max-md:pb-0 flex px-16 my-16 md:flex-row flex-col items-center w-11/12 text-black max-sm:text-sm bg-gray-100 rounded-[13px] py-10 ">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="box backdrop-blur-lg bg-slate-900 text-white py-2 px-10 text-lg rounded-r-3xl rounded-l-lg font-bold">
                        Advance Web Development Internship
                    </div>
                    <div className="level flex justify-between w-3/5  max-md:w-full ">
                        <a href='#' className="totalIntenship max-md:px-3 bg-gray-300 py-2 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                            <div className="number font-bold text-black max-sm:text-sm text-lg">
                                @MICROSTEP
                            </div>
                        </a>
                        <a href='#' className="totalIntenship max-md:px-3  bg-gray-300  py-2 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                            <div className="number font-bold text-black max-sm:text-sm text-lg">
                                location India
                            </div>
                        </a>
                        <a href='#' className="totalIntenship max-md:px-3 bg-gray-300 py-2 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                            <div className="number font-bold text-black max-sm:text-sm text-lg">
                                Duration : 3 Month
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center  mt-4">
                        <button className="py-3 px-16 border bg-blue-600 text-white rounded-lg hover:bg-blue-700 " onClick={goToApplyNow}>
                            Apply now
                        </button>
                    </div>
                    <div className="line bg-gray-600 w-full  pt-0.5 my-3"> </div>
                    <h2 className=" text-2xl font-bold">Minimum Qualification : </h2>
                    <div className="qualification py-3 pl-16 max-md:pl-4">
                        <ul>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Currently Enrolled in Bachelor&apos;s degree preferably in Computer Science, Information Technology, or a related field.
                                    </p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Proficiency in HTML, CSS, and JavaScript and Advance understanding of responsive web design principles.</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Experience with front-end frameworks/libraries such as React, Angular, or Vue.js.</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Knowledge in back-end technologies like Node.js, Python, Ruby on Rails, or similar.</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Familiarity with databases (SQL and NoSQL) Or MongoDB.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="learnMoreTextAdvance" className="text hidden">
                        <div className="line bg-gray-600 w-full  pt-0.5 my-3"> </div>

                        <div className="preferredQualification">
                            <h2 className=" text-2xl font-bold">Additional Skills (Preferred but not mandatory):</h2>
                            <div className="qualification py-3 pl-16 max-md:pl-3">
                                <ul>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Knowledge of RESTful API design and development.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Understanding of web performance optimization techniques.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="line bg-gray-600 w-full  pt-0.5 my-3"> </div>


                        <div className="minimumQualification">
                            <h2 className=" text-2xl font-bold">About the Internship : </h2>
                            <div className="qualification py-3 pl-16 max-md:pl-0">
                                <ul>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Our intermediate level web development internship is designed to provide hands-on experience and enhance your technical skills through practical application. Here are some key highlights of the internship:</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3"><strong>Skill Development:</strong><br />
                                                <li> Enhance your understanding of front-end and back-end development.</li>
                                                <li>Gain experience with version control and collaborative coding practices.</li>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3"><strong> Full Stack web development Project : </strong> Engage in a comprehensive full-stack project where you will develop both front-end and back-end components.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3"><strong> Certification : </strong> Upon successful completion of the internship, you will receive a certification that acknowledges your skills and contributions.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3"><strong> Shine you resume : </strong> By inculding this full stack project and certification of completion.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3"><strong> Work Environment : </strong> Flexible working hours to accommodate your academic schedule.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="flex justify-center mt-2 max-md:justify-start">
                            <button className="py-2 px-5 border bg-blue-600 text-white rounded-lg hover:bg-blue-700 " onClick={goToApplyNow}>
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center pl-16 max-md:justify-start max-md:pl-0">
                        <button id="learnAdvance" className="py-3 px-7 border text-blue-500 hover:bg-gray-200 hover:text-blue-600 " onClick={learnMoreButton}>
                            Read more
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AdvanceDevelopment
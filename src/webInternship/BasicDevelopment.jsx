import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
const BasicDevelopment = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const learnMoreButton = () => {
        let text = document.getElementById('learnMoreTextBasic');
        let learnBtn = document.getElementById('learnBasic');

        if (text.classList.contains('hidden')) {
            text.classList.remove('hidden');
            learnBtn.innerText = "Read less";
        } else {
            text.classList.add('hidden');
            learnBtn.innerText = "Read more";
        }

    }
    const goToApplyNow = () => {
        // console.log(intern);
        // isAuthenticated ? navigate("/applyNow") : loginWithRedirect();
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

            <div id="basic" className="container internship mx-auto flex px-16 my-16 md:flex-row flex-col items-center w-11/12 text-black bg-gray-100 rounded-[13px] py-10 ">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="box backdrop-blur-lg bg-slate-900 text-white py-2 px-10 text-lg rounded-r-3xl rounded-l-lg font-bold">
                        Basic Web Development Internship
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
                    <div className="flex justify-center  mt-4">
                        <button className="py-3 px-16 border bg-blue-600 text-white rounded-lg hover:bg-blue-700 " onClick={goToApplyNow}>
                            Apply now
                        </button>
                    </div>
                    <div className="line bg-gray-600 w-full  pt-0.5 my-3"> </div>
                    <h2 className=" text-2xl font-bold">Minimum Qualification : </h2>
                    <div className="qualification py-3 pl-16">
                        <ul>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular pl-3"><strong className=" text-blue-500">Currently Pursuing a Bachelor&apos;s Degree : </strong>
                                        Are you currently enrolled in a Bachelor&apos;s program, in first or second year of study ? We welcome students from all backgrounds with a passion for technology!</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular pl-3"><strong className=" text-blue-500">Know the Basics: </strong>Already familiar with HTML and CSS? That&apos;s awesome! These are the building blocks for websites, and you&apos;ll use them a lot.</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular pl-3"><strong className=" text-blue-500">Curiosity and a passion for learning: </strong>We value those with a strong desire to explore the world of web development..</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular pl-3"><strong className=" text-blue-500">Ability to learn independently: </strong>This program is self-paced, so a strong commitment to independent learning is crucial..</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="learnMoreTextBasic" className="text hidden">

                        <div className="line bg-gray-600 w-full  pt-0.5 my-3"> </div>
                        <div className="minimumQualification">
                            <h2 className=" text-2xl font-bold"> What You&apos;ll Get (it&apos;s awesome!): </h2>
                            <div className="qualification py-3 pl-16">
                                <ul>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3"> <strong className="text-blue-600"> Learn by Doing: </strong>Build real websites, not just read boring books! </p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3"><strong className="text-blue-600">Project Power up : </strong> Gain experience by creating your own projects. Show off your skills!</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3"><strong className="text-blue-600">Shine Your Resume</strong> : By adding Project and Certification of completion to it</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3"><strong className="text-blue-600">Get Certified! </strong> Finish the program and earn a certificate to show everyone your newfound coding skills!
                                            </p>
                                        </div>

                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="flex justify-center mt-2 absolute left-1/3">
                            <button className=" py-4 px-40 border bg-blue-600 text-white rounded-lg hover:bg-blue-700 " onClick={goToApplyNow}>
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center pl-16">
                        <button id="learnBasic" className="py-3 px-7 border text-blue-500 hover:bg-gray-200 hover:text-blue-600 " onClick={learnMoreButton}>
                            Read more
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BasicDevelopment
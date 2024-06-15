import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
const Java = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const learnMoreButton = () => {
        let text = document.getElementById('learnMoreTextJava');
        let learnBtn = document.getElementById('learnJava');

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

            <div id="java" className=" max-md:w-full container internship max-m d:px-3 max-md:pb-0 mx-auto flex px-16 my-16 md:flex-row flex-col items-center w-11/12 text-black bg-gray-100 rounded-[13px] py-10 ">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center text-center">
                    <div className="box backdrop-blur-lg bg-slate-900 text-white py-2 px-10 text-lg rounded-r-3xl rounded-l-lg font-bold max-sm:text-sm max-sm:px-7">
                        JAVA Programming Internship
                    </div>
                    <div className="level flex justify-between w-3/5  max-md:w-full ">
                        <a href='#' className="totalIntenship max-sm:px-2 max-md:px-3 bg-gray-300 py-2 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                            <div className="number font-bold text-black text-lg max-sm:text-sm">
                                @MICROSTEP
                            </div>
                        </a>
                        <a href='#' className="totalIntenship max-sm:px-2 max-md:px-3  bg-gray-300  py-2 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                            <div className="number font-bold text-black text-lg max-sm:text-sm">
                                location India
                            </div>
                        </a>
                        <a href='#' className="totalIntenship max-sm:px-2 max-md:px-3 bg-gray-300 py-2 px-8 w-fit mt-5 rounded-3xl cursor-pointer">
                            <div className="number font-bold text-black text-lg max-sm:text-sm">
                                Duration : 1 Month
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center  mt-2">
                        <button className="py-2 px-5 border bg-blue-600 text-white rounded-lg hover:bg-blue-700 " onClick={goToApplyNow}>
                            Apply now
                        </button>
                    </div>
                    <div className="line bg-gray-600 w-full  pt-0.5 my-3"> </div>
                    <h2 className=" text-2xl font-bold">Minimum Qualification : </h2>
                    <div className="qualification py-3 pl-16 max-md:pl-4">
                        <ul>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular max-md:text-start pl-3"><strong className=" text-blue-500">Currently Pursuing a Bachelor&apos;s Degree : </strong>
                                        Are you currently enrolled in a Bachelor&apos;s program, in first or second year of study ? We welcome students from all backgrounds with a passion for technology!</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Basic proficiency in JAVA programming language
                                    </p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Understanding of fundamental programming concepts such as loops, conditionals, and functions.</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Basic knowledge of object-oriented programming principles.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="learnMoreTextJava" className="text hidden w-full">
                        <div className="line bg-gray-600 w-full  pt-0.5 my-3"> </div>
                        <div className="preferredQualification">
                            <h2 className=" text-2xl font-bold">Additional Skills (Preferred but not mandatory) : </h2>
                            <div className="qualification py-3 pl-16 max-md:pl-3">
                                <ul>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Basic understanding of data structures like arrays and linked lists.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Familiarity with Java Standard Library and APIs.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3">Experience with basic file handling in Java.</p>
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
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3"> <strong>Game Development Projects : </strong>Engage in real-world game development projects where you will apply your knowledge of JAVA programming. </p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3"> <strong>Master the Fundamentals : </strong>
                                                Gain a deep understanding of Java programming concepts like variables, data types, control flow, functions, and OOPS concept.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3"> <strong>Certification : </strong>Upon successful completion of the internship, you will receive a certification that acknowledges your skills and contributions.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular max-md:text-start pl-3"> Flexible working hours to accommodate your academic schedule.</p>
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
                        <button id="learnJava" className="py-3 px-7 border text-blue-500 hover:bg-gray-200 hover:text-blue-600 " onClick={learnMoreButton}>
                            Read more
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Java
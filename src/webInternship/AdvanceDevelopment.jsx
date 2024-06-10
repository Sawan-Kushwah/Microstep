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

            <div id="advance" className="container internship mx-auto flex px-16 my-16 md:flex-row flex-col items-center w-11/12 text-black bg-gray-100 rounded-[13px] py-10 ">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="box backdrop-blur-lg bg-slate-900 text-white py-2 px-10 text-lg rounded-r-3xl rounded-l-lg font-bold">
                        Web Development Internship
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
                                Duration : 3 Month
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
                    <div className="qualification py-3 pl-16">
                        <ul>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular pl-3">Bachelor&apos;s degree in Computer Science, a related technical field, or equivalent practical experience.</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular pl-3">5 years of experience in full-stack web development.</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular pl-3">5 years of experience in Java, C++, Python, or related object oriented programming.</p>
                                </div>
                            </li>
                            <li className="py-1.5 list-disc">
                                <div className="courses_list-item flex items-center" >
                                    <p className="courses_card-heading text-size-regular pl-3">5 years of experience in TypeScript/JavaScript front-end programming and Database/SQL.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="learnMoreTextAdvance" className="text hidden">
                        <div className="line bg-gray-600 w-full  pt-0.5 my-3"> </div>
                        <div className="preferredQualification">
                            <h2 className=" text-2xl font-bold">Preferred qualifications : </h2>
                            <div className="qualification py-3 pl-16">
                                <ul>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3">Bachelor&apos;s degree in Computer Science, a related technical field, or equivalent practical experience.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3">5 years of experience in full-stack web development.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3">5 years of experience in Java, C++, Python, or related object oriented programming.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5 list-disc">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3">5 years of experience in TypeScript/JavaScript front-end programming and Database/SQL.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="line bg-gray-600 w-full  pt-0.5 my-3"> </div>


                        <div className="minimumQualification">
                            <h2 className=" text-2xl font-bold">About the Internship : </h2>
                            <div className="qualification py-3 pl-16">
                                <ul>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3"> The gTech Analytics, Platforms, and Tools team maintains close relationships with the Engineering and Product partners necessary to develop and improve Googles products and internal tools. As a Web Solutions Engineer on the Tools Development and Automation team, youll be responsible for managing solutions that make the broader Global Business Organization more efficient. Youll help drive the development of tools and will be involved in ideating required product features and designing/implementing quick and scalable solutions. You will work with Googles infrastructure to resolve problems over datasets.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3"> Additionally, youll be working as a part of an Engineering team responsible for developing and supporting tools, prototyping proofs of concept, and writing/reviewing technical design documents to meet the needs of the services teams. You will adhere to Googls software development practices and work in partnership with other Project/Product Management and Engineering teams.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3"> Google creates products and services that make the world a better place, and gTecs role is to help bring them to life. Our teams of trusted advisors support customers globally. Our solutions are rooted in our technical skill, product expertise, and a thorough understanding of our customers complex needs. Whether the answer is a bespoke solution to solve a unique problem, or a new tool that can scale across Google, everything we do aims to ensure our customers benefit from the full potential of Google products.</p>
                                        </div>
                                    </li>
                                    <li className="py-1.5">
                                        <div className="courses_list-item flex items-center" >
                                            <p className="courses_card-heading text-size-regular pl-3"> To learn more about gTech, check out our video..</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="py-2 px-5 border bg-blue-600 text-white rounded-lg hover:bg-blue-700 " onClick={goToApplyNow}>
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center pl-16">
                        {/* <NavLink to={"/applicationPageWeb1Month"}> */}
                        <button id="learnAdvance" className="py-3 px-7 border text-blue-500 hover:bg-gray-200 hover:text-blue-600 " onClick={learnMoreButton}>
                            Read more
                        </button>
                        {/* </NavLink> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default AdvanceDevelopment
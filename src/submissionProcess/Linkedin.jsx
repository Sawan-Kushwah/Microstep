// import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Linkedin = () => {
    // const { isAuthenticated } = useAuth0();
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
                navigate("/submitTask", { state: { studentID: studentID, email: res.email, from: "linkedin" } });
            } else {
                seterror("Invalid ID");
            }
        }
    }
    return (
        <>
            <div id="studentIdForm" className="border p-15 h-96  w-2/3 space-x-4 bg-slate-900 absolute top-[12%] left-[18%] hidden  z-[100]">
                <div className="close mb-5  text-end p-5 cursor-pointer" onClick={closeFrom}>Close</div>
                <div className="  m-0 form flex flex-col justify-center items-center ">
                    <div className="text font-bold text-3xl pb-6 text-white">
                        Give Your Submission ID
                    </div>
                    <p className="relative right-[36%] text-sm text-gray-200 font-normal mb-2">Sent on the mail with offer letter</p>
                    <input type="text" className="p-2 border w-11/12 mx-auto bg-white text-black font-bold text-lg mb-8" placeholder="Submission ID" onChange={getStudentId} value={studentID ? studentID : ""} required />
                    {error && <p className="relative  -top-7   text-red-400 font-normal">*{error}</p>}
                    <button type="submit" className="btn px-20 btn-green" onClick={checkStudentIsEnrolled}>Verify</button>
                </div>
            </div >

            <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">LINKED</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-4">Linked in submission steps</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-blue-400 border-b-2 border-blue-500 py-2 text-lg px-1">Description</a>

                            </div>
                            <p className="leading-relaxed mb-4"> <strong>Best for : </strong>
                                Social media-savvy individuals who want to showcase their work publicly.</p>
                            <p className="leading-relaxed mb-4"> <strong className="text-red-500">Steps are here </strong>
                            </p>
                            <div className="flex border-t border-gray-800 py-2">
                                <span className="text-gray-200 pr-6">1</span>
                                <span className="text-gray-300">Create a public LinkedIn post showcasing your completed task.</span>
                            </div>
                            <div className="flex border-t border-gray-800 py-2">
                                <span className="text-gray-200 pr-6">2</span>
                                <span className="text-gray-300">Include clear and well-commented code snippets within your post.</span>
                            </div>
                            <div className="flex border-t border-b border-gray-800 py-2">
                                <span className="text-gray-200 pr-6">3</span>
                                <span className="text-gray-300">Embed a video demonstration (max 5 minutes) explaining your code&apos;s logic and functionalities.</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                                <span className="text-gray-200 pr-6">4</span>
                                <span className="text-gray-300">Share the link to your LinkedIn post for our team to review.</span>
                            </div>
                            <div className="flex items-center">
                                <span className="title-font font-medium text-2xl text-white"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-8 h-12 mr-3 inline-block" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path></svg><span className=" text-green-500">
                                    72 Active post</span></span>
                                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded font-bold" onClick={showStudentIdForm}>Submit Your Link</button>
                                <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-[2.25rem]" src="https://yourpersonalworkforce.org/wp-content/uploads/2021/04/Linkedin-outreach.png" />
                    </div>
                </div>
            </section>


        </>
    )
}

export default Linkedin
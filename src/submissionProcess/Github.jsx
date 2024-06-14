import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Github = () => {
    const navigate = useNavigate();
    const [studentID, setStudentID] = useState("");
    const [error, seterror] = useState("");

    //handel student id form
    const closeFrom = () => {
        document.getElementById('studentIdFormGit').classList.add('hidden');
        seterror("");
        setStudentID("");
    }
    const showStudentIdForm = () => {
        document.getElementById('studentIdFormGit').classList.remove("hidden")
    }

    const getStudentId = (e) => {
        setStudentID(e.target.value);
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
            if (response.status === 200) {
                navigate("/submitTask", { state: { studentID: studentID, email: res.email, from: "github" } });
            } else {
                seterror("Invalid ID");
            }
        }
    }
    return (
        <>

            <div id="studentIdFormGit" className="border p-15 h-96  w-2/3 space-x-4 bg-slate-900 absolute top-[38%] left-[18%] hidden  z-[100]">
                <div className="close mb-5  text-end p-5 cursor-pointer" onClick={closeFrom}>Close</div>
                <div className="  m-0 form flex flex-col justify-center items-center">
                    <div className="text font-bold text-3xl pb-6 text-white">
                        Give Your Submission ID
                    </div>
                    <p className="relative right-[36%] text-sm text-gray-200 font-normal mb-2">Sent on the mail with offer letter</p>
                    <input type="text" className="p-2 border w-11/12 mx-auto bg-white text-black font-bold text-lg mb-8" placeholder="Submission ID" onChange={getStudentId} value={studentID ? studentID : ""} required/>
                    {error && <p className="relative  -top-7   text-red-400 font-normal">*{error}</p>}
                    <button type="submit" className="btn px-20 btn-green" onClick={checkStudentIsEnrolled}>Verify</button>
                </div>
            </div >
            <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap flex-row-reverse">
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">GITHUB</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-4">Github in submission steps (Recommended) : </h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-blue-400 border-b-2 border-blue-500 py-2 text-lg px-1">Description</a>

                            </div>
                            <p className="leading-relaxed mb-4"> <strong>Best for : </strong>
                                Those seeking a professional portfolio and collaborative development experience.</p>
                            <p className="leading-relaxed mb-4"> <strong className="text-red-500">Steps are here </strong>
                            </p>
                            <div className="flex border-t border-gray-800 py-2">
                                <span className="text-gray-200 pr-6">1</span>
                                <span className="text-gray-300">Create a public GitHub repository for your project.</span>
                            </div>
                            <div className="flex border-t border-gray-800 py-2">
                                <span className="text-gray-200 pr-6">2</span>
                                <span className="text-gray-300">Push your well-commented code to the repository.</span>
                            </div>
                            <div className="flex border-t border-b border-gray-800 py-2">
                                <span className="text-gray-200 pr-6">3</span>
                                <span className="text-gray-300"><strong>Optional:</strong> Include a README file outlining the project overview, instructions, and any additional details.</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                                <span className="text-gray-200 pr-6">4</span>
                                <span className="text-gray-300">Share the link to your public GitHub repository for our evaluation.</span>
                            </div>
                            <div className="flex items-center">
                                <span className="title-font font-medium text-2xl text-white flex"><svg className=" w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"></path></svg><span className=" text-green-500 ml-2">
                                    95 Active Repo</span></span>
                                <button onClick={showStudentIdForm} className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded font-bold">Submit Your Link</button>
                                <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-[2.25rem]" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" />
                    </div>
                </div>
            </section>


        </>
    )
}

export default Github
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';


const SubmittedTask = () => {
    let location = useLocation();
    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
    } = useForm()

    const onTaskSubmission = async (data) => {
        let response = await fetch("https://microstep-server.onrender.com/submitTask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data })
        })
        await response.json();
        if (response.status) {
            navigate("/successfullySubmitted");
        }
    }

    useEffect(() => {
        if (location.state === null) {
            navigate("/");
        }
    }, [])

    return (
        <>

            <section className="text-gray-400 bg-gray-900 body-font relative h-[100vh] flex justify-center items-center ">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="  text-3xl title-font mb-4 text-white font-bold">Submitting Your Work: Showcase Your Skills!</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxe text-xl">We offer multiple ways to submit your work for evaluation, ensuring flexibility and catering to your preferences.
                            Here are your options : <strong className=' text-white'> You can fill Anyone or Three of them</strong> </p>

                    </div>

                    <div className="lg:w-1/2 md:w-2/3 mx-auto" id='submitCode'>
                        <div className="flex flex-wrap -m-2">
                            <form onSubmit={handleSubmit(onTaskSubmission)} className='flex flex-wrap -m-2'>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="submissionID" className="leading-7 text-sm text-gray-400">Submission ID </label>
                                        <input type="text" id="submissionID" name="submissionID" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={location.state ? location.state.studentID : "ayegiLink"} readOnly {...register("submissionID")} />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email ID</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={location.state ? location.state.email : "email@gmail.com"} required {...register("studentEmail")} />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="text" className="leading-7 text-sm text-gray-400">Google Drive Link</label>
                                        <input type="text" id="text" name="text" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...register("driveLink")} required={location.state.from === "drive"} />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="text" className="leading-7 text-sm text-gray-400">GitHub Repository Link</label>
                                        <input type="text" id="text" name="text" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("githubLink")} required={location.state.from === "github"} />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="text" className="leading-7 text-sm text-gray-400">Linkedin Post Link</label>
                                        <input type="text" id="text" name="text" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("linkedinLink")} required={location.state.from === "linkedin"} />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" type='submit'>Submit</button>
                                </div>
                            </form>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center flex items-center justify-center">
                                <a className="text-green-400">microstep@gmail.com</a>

                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </>
    )
}

export default SubmittedTask
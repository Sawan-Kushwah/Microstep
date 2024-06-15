const NoteForSubmission = () => {
    return (
        <>

            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto max-sm:py-12">
                    <div className="flex flex-col text-center w-full mb-20 max-sm:mb-7">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Important Note : </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl max-sm:text-sm">No matter which method you choose,
                            clear and well-commented code is essential for successful evaluation. Our reviewers need to be able to easily access and understand your work.</p>
                        <p className="para text-lg max-sm:text-sm"><strong className=' text-white'>Remember : </strong>
                            Completing tasks with your own code is crucial for the certification process.  We encourage independent learning and problem-solving.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/3 w-full">
                            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-white">76</h2>
                                <p className="leading-relaxed">Google Drive Submission</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/3 w-full">
                            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg flex flex-col items-center">
                                <svg className=" w-12 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"></path></svg>
                                <h2 className="title-font font-medium text-3xl text-white">95</h2>
                                <p className="leading-relaxed">Github Submission</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/3 w-full">
                            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-white">72</h2>
                                <p className="leading-relaxed">Linkedin Post Submission</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default NoteForSubmission
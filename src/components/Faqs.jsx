import plus from '../assets/plus.png'
import minus from '../assets/minus.png'



const Faqs = () => {
    const handleClick = (index) => {

        let text = document.getElementsByClassName('textToShow')[index];
        let srcImg = document.getElementsByClassName('srcImg')[index];
        console.log(text);
        if (text.classList.contains("hidden")) {
            text.classList.remove('hidden');
            srcImg.src = minus;
        } else {
            text.classList.add('hidden');
            srcImg.src = plus;
        }
    }

    const showMoreFaqs = () => {
        let faqs = document.getElementsByClassName('showMoreFaqs')[0];
        let showButton = document.getElementById('showButtonFaqs');
        if (faqs.classList.contains('hidden')) {
            faqs.classList.remove('hidden');
            showButton.innerText = "Show Less"
        } else {
            faqs.classList.add('hidden');
            showButton.innerText = "Show More"
        }
    }
    return (
        <>

            <section className="">
                <div className="container w-4/5 px-6 py-28 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>

                    <div className="mt-12 space-y-4">
                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button className="flex items-center justify-between w-full p-6" onClick={() => handleClick(0)}>
                                <h1 className="font-semibold text-gray-700 dark:text-white text-xl">Earning your certificate is easy? <strong className=' text-blue-500'>Here steps</strong>
                                </h1>

                                <span className="text-white bg-blue-500 rounded-full">
                                    <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                </span>
                            </button>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <p className="textToShow hidden p-5  text-gray-500 dark:text-gray-300 text-lg">
                                <span><strong>STEP 1 : </strong>Choose Your Program & Apply</span>
                                <br />
                                <span><strong>STEP 2 : </strong>Received a <strong>Offer letter</strong> form us</span>
                                <br />
                                <span><strong>STEP 3 : </strong>Submit your <strong>Code </strong>as Drive link , Gihub link , Linkedin Link (Anyone or two can be considered) </span>
                                <br />
                                <span><strong>STEP 4 : </strong><strong className=' text-green-500'>Get Certified! </strong>Our will send you after reviewing your code</span>
                            </p>
                        </div>

                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button className="flex items-center justify-between w-full p-6" onClick={() => handleClick(1)}>
                                <h1 className="font-semibold text-gray-700 dark:text-white text-xl">What do I need to submit for project completion?
                                </h1>

                                <span className="text-white bg-blue-500 rounded-full">
                                    <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                </span>
                            </button>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <p className="textToShow hidden p-5 text-lg text-gray-500 dark:text-gray-300">
                                <strong className=' text-green-500'>Github link  </strong>of your code <strong>(WILL BE PREFERED MOST) </strong> <br />
                                <strong className=' text-green-500'>Linkedin post</strong> with images or video , Share link with us <br />
                                <strong className=' text-green-500'>Video and images of your project</strong> (Upload on drive) Share link with us <br />
                                Anyone or two can be considered , <strong className="text-red-400">Make Sure your code will be visible clearly</strong>
                            </p>
                        </div>
                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button className="flex items-center justify-between w-full p-6" onClick={() => handleClick(2)}>
                                <h1 className="font-semibold text-gray-700 dark:text-white text-xl">How do I submit my code for review?</h1>

                                <span className="text-white bg-blue-500 rounded-full">
                                    <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                </span>
                            </button>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <p className="textToShow hidden p-5 text-lg text-gray-500 dark:text-gray-300">After Login You will see ,<strong>Submit your code button</strong><br />
                                Enter your <strong className='text-red-500'>Submission ID</strong> which we have sent you with offer letter <br /> Enter and Submit <span className=' text-blue-500'>Drive Link , linkedin post link , Github link </span>(Anyone or two can be considered)
                            </p>
                        </div>
                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button className="flex items-center justify-between w-full p-6" onClick={() => handleClick(3)}>
                                <h1 className="font-semibold text-gray-700 dark:text-white text-xl">On what basis certificate has been given ?
                                </h1>

                                <span className="text-white bg-blue-500 rounded-full">
                                    <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                </span>
                            </button>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <p className="textToShow hidden p-5 text-lg text-gray-500 dark:text-gray-300">
                                <span className=' font-bold mb-5'> Here&apos;s what we consider:</span><br />

                                <strong className="text-green-500"> Project Completion:</strong> Completing all required projects within the program demonstrates your understanding of the concepts and your ability to apply them practically. <br />
                                <strong className="text-green-500"> Code Functionality:</strong> Our team reviews your submitted code to ensure it functions correctly and meets the project requirements. <br />
                                <strong className="text-green-500">Originality and Problem-Solving: </strong> We value your independent effort. While referencing resources is encouraged, submitting copied code or solutions will not contribute to certification
                            </p>
                        </div>


                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button className="flex items-center justify-between w-full p-6" onClick={() => handleClick(4)}>
                                <h1 className="font-semibold text-gray-700 dark:text-white text-xl">Can I use code I find online to complete my projects?
                                </h1>

                                <span className="text-white bg-blue-500 rounded-full">
                                    <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                </span>
                            </button>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <p className="textToShow hidden p-5 text-lg text-gray-500 dark:text-gray-300">
                                Sure, you can use online resources!
                                <br />

                                The internet is a treasure of information, and using it to learn and explore is encouraged. <strong className=' text-red-500'>However, directly copying code can affect your certification process.</strong>
                                <br />

                                <strong>Don&apos;t worry about making mistakes! </strong>We understand that errors are part of the learning process. Our focus is on your effort to implement the <strong> code yourself.</strong> If you get stuck, feel free to reach out to our supportive mentors or the community for help. Remember, we&apos;re here to guide you on your coding journey!
                            </p>
                        </div>
                        <div className="showMoreFaqs hidden space-y-4">
                            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                <button className="flex items-center justify-between w-full p-6" onClick={() => handleClick(5)}>
                                    <h1 className="font-semibold text-gray-700 dark:text-white text-xl">Is Linkedin post can be consider as submission?</h1>

                                    <span className="text-white bg-blue-500 rounded-full">
                                        <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                    </span>
                                </button>

                                <hr className="border-gray-200 dark:border-gray-700" />

                                <p className="textToShow hidden p-5 text-lg text-gray-500 dark:text-gray-300">
                                    <strong className=' text-green-500'>YES ,</strong> Linkedin Post is consider as your submission , you just have to follow code submission process and <strong className=' text-blue-500'>you can give link of your linkedin post</strong>
                                </p>
                            </div>
                            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                <button className="flex items-center justify-between w-full p-6" onClick={() => handleClick(6)}  >
                                    <h1 className="font-semibold text-gray-700 dark:text-white text-xl">How much does it cost?</h1>

                                    <span className="text-gray-400 bg-gray-200 rounded-full">
                                        <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                    </span>
                                </button>

                                <hr className="border-gray-200 dark:border-gray-700" />

                                <p className="textToShow hidden p-5 text-lg text-gray-500 dark:text-gray-300">
                                    <strong>It&apos;s free! </strong>🆓 We&apos;re giving early birds a chance to learn for free.  Join now and build your tech skills!
                                </p>
                            </div>



                            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                <button className="flex items-center justify-between w-full p-6" onClick={() => handleClick(7)}>
                                    <h1 className="font-semibold text-gray-700 dark:text-white text-xl">Who will review my code?
                                    </h1>

                                    <span className="text-white bg-blue-500 rounded-full">
                                        <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                    </span>
                                </button>

                                <hr className="border-gray-200 dark:border-gray-700" />

                                <p className="textToShow hidden p-5 text-lg text-gray-500 dark:text-gray-300">
                                    <strong className=' text-green-400'>Experienced developers review your code!</strong>  We believe in personalized learning, so actual humans with coding expertise review your projects.
                                </p>
                            </div>

                            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                <button className="flex items-center justify-between w-full p-6" onClick={() => handleClick(8)}>
                                    <h1 className="font-semibold text-gray-700 dark:text-white text-xl">Will I get Offer letter ?
                                    </h1>

                                    <span className="text-white bg-blue-500 rounded-full">
                                        <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                    </span>
                                </button>

                                <hr className="border-gray-200 dark:border-gray-700" />

                                <p className="textToShow hidden p-5 text-lg text-gray-500 dark:text-gray-300">
                                    <strong className=' text-green-500'>YES,  </strong> you will received a offer letter after evaluation done by our <strong className="text-blue-500">Microstep</strong> Team
                                </p>
                            </div>

                        </div>
                        <button id="showButtonFaqs" className="btn bg-cyan-800 hover:bg-cyan-700" onClick={showMoreFaqs}>Show More</button>

                    </div>
                </div>
            </section>


        </>
    )
}

export default Faqs
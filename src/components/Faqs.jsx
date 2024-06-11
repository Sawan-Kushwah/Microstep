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
    return (
        <>
        
            <section className="">
                <div className="container w-4/5 px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>

                    <div className="mt-12 space-y-8">
                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button className="flex items-center justify-between w-full p-8" onClick={() => handleClick(0)}  >
                                <h1 className="font-semibold text-gray-700 dark:text-white">How i can play for my appoinment ?</h1>

                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                </span>
                            </button>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <p className="textToShow hidden p-8 text-sm text-gray-500 dark:text-gray-300">
                                0 wala
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                            </p>
                        </div>

                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button className="flex items-center justify-between w-full p-8" onClick={() => handleClick(1)}>
                                <h1 className="font-semibold text-gray-700 dark:text-white">Is the cost of the appoinment covered by private health insurance?</h1>

                                <span className="text-white bg-blue-500 rounded-full">
                                    <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                </span>
                            </button>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <p className="textToShow hidden p-8 text-sm text-gray-500 dark:text-gray-300">
                                1 wala
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                            </p>
                        </div>

                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button className="flex items-center justify-between w-full p-8" onClick={() => handleClick(2)}>
                                <h1 className="font-semibold text-gray-700 dark:text-white">Do i need a referral?</h1>

                                <span className="text-white bg-blue-500 rounded-full">
                                    <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                </span>
                            </button>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <p className="textToShow hidden p-8 text-sm text-gray-500 dark:text-gray-300">
                                2 wala
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                            </p>
                        </div>

                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button className="flex items-center justify-between w-full p-8" onClick={() => handleClick(3)}>
                                <h1 className="font-semibold text-gray-700 dark:text-white">What are your opening house?</h1>

                                <span className="text-white bg-blue-500 rounded-full">
                                    <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                </span>
                            </button>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <p className="textToShow hidden p-8 text-sm text-gray-500 dark:text-gray-300">
                                3 wala
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                            </p>
                        </div>

                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <button className="flex items-center justify-between w-full p-8" onClick={() => handleClick(4)}>
                                <h1 className="font-semibold text-gray-700 dark:text-white">What can i expect at my first consultation?</h1>

                                <span className="text-white bg-blue-500 rounded-full">
                                    <img className='srcImg' src={plus} alt="plus" width={"28px"} />
                                </span>
                            </button>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            <p className="textToShow hidden p-8 text-sm text-gray-500 dark:text-gray-300">
                                4 wala
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Faqs
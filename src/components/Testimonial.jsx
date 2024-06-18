const Testimonial = () => {
    const showMoreTestimonials = () => {
        let testimonial = document.getElementsByClassName('showMore')[0];
        let showButton = document.getElementById('showButton');
        if (testimonial.classList.contains("hidden")) {
            testimonial.classList.add('flex');
            testimonial.classList.remove('hidden');
            showButton.innerText = "Show Less"

        } else {
            testimonial.classList.remove('flex');
            testimonial.classList.add('hidden');
            showButton.innerText = "Show More"
        }

    }
    return (
        <>
            <section id="studentReview" className="testimonial ">
                <div className="heading text-center text-[3rem] max-sm:text-3xl font-bold pt-20">
                    <h2>HERE WHAT OUR CURRENT STUDENT WANT TO SAY...</h2>
                </div>
                <div className="text-gray-400   body-font">
                    <div className="px-5 py-24 mx-auto max-sm:py-12 max-sm:px-0">
                        <div className="flex flex-wrap m-auto justify-evenly">

                            <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full   flex flex-col justify-center items-center rounded-3xl testimonialBox h-auto">
                                <div className="results_card-3 secondary flex flex-col justify-center items-center py-7 ">
                                    <div className="w-embed pb-4">
                                        <svg width="130" height="131" viewBox="0 0 130 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40.168 52.6209C41.842 52.6209 43.2783 52.8999 44.477 53.4579C45.6757 53.9952 46.647 54.7702 47.391 55.7829C48.1557 56.7749 48.7137 57.9219 49.065 59.2239C49.437 60.5259 49.623 61.9209 49.623 63.4089V64.7109C49.623 68.4722 48.662 71.3139 46.74 73.2359C44.818 75.1372 41.9867 76.0879 38.246 76.0879C37.4813 76.0879 36.727 76.0672 35.983 76.0259C35.239 75.9845 34.5157 75.9225 33.813 75.8399V71.5929C34.495 71.6549 35.2287 71.7169 36.014 71.7789C36.7993 71.8202 37.6053 71.8409 38.432 71.8409C40.0853 71.8409 41.3873 71.5722 42.338 71.0349C43.2887 70.4769 43.9603 69.6502 44.353 68.5549C44.7457 67.4595 44.942 66.1059 44.942 64.4939V62.1379L46.058 61.3939C46.0373 62.9439 45.717 64.2459 45.097 65.2999C44.4977 66.3332 43.6607 67.1082 42.586 67.6249C41.5113 68.1415 40.2713 68.3999 38.866 68.3999C37.2747 68.3999 35.9003 68.0899 34.743 67.4699C33.5857 66.8292 32.697 65.9405 32.077 64.8039C31.457 63.6672 31.147 62.3239 31.147 60.7739C31.147 59.1412 31.519 57.7152 32.263 56.4959C33.007 55.2559 34.0507 54.3052 35.394 53.6439C36.758 52.9619 38.3493 52.6209 40.168 52.6209ZM40.323 56.8369C39.4137 56.8369 38.6387 57.0022 37.998 57.3329C37.378 57.6635 36.8923 58.1182 36.541 58.6969C36.2103 59.2549 36.045 59.9162 36.045 60.6809C36.045 61.4662 36.2103 62.1482 36.541 62.7269C36.8717 63.2849 37.3367 63.7292 37.936 64.0599C38.556 64.3699 39.3103 64.5249 40.199 64.5249C41.005 64.5249 41.7387 64.3905 42.4 64.1219C43.082 63.8325 43.6193 63.4089 44.012 62.8509C44.4047 62.2722 44.601 61.5489 44.601 60.6809C44.601 59.9369 44.4357 59.2755 44.105 58.6969C43.795 58.1182 43.3197 57.6635 42.679 57.3329C42.0383 57.0022 41.253 56.8369 40.323 56.8369ZM53.1422 75.9019V71.2519C53.1422 70.2805 53.2972 69.4332 53.6072 68.7099C53.9379 67.9865 54.4546 67.3459 55.1572 66.7879C55.8599 66.2092 56.7899 65.6719 57.9472 65.1759L61.6052 63.5949C62.5352 63.2022 63.2172 62.7165 63.6512 62.1379C64.1059 61.5592 64.3332 60.8255 64.3332 59.9369C64.3332 59.0275 64.0542 58.2835 63.4962 57.7049C62.9382 57.1262 62.1219 56.8369 61.0472 56.8369C59.9726 56.8369 59.1562 57.1365 58.5982 57.7359C58.0402 58.3352 57.7612 59.1412 57.7612 60.1539H52.8322C52.8322 58.7279 53.1422 57.4465 53.7622 56.3099C54.3822 55.1525 55.3019 54.2432 56.5212 53.5819C57.7406 52.9205 59.2492 52.5899 61.0472 52.5899C62.8452 52.5899 64.3436 52.9102 65.5422 53.5509C66.7616 54.1915 67.6812 55.0492 68.3012 56.1239C68.9419 57.1985 69.2622 58.4075 69.2622 59.7509V60.1229C69.2622 61.8589 68.7869 63.2952 67.8362 64.4319C66.8856 65.5479 65.4182 66.5399 63.4342 67.4079L59.8072 68.9889C59.1872 69.2575 58.7429 69.5365 58.4742 69.8259C58.2262 70.1152 58.1022 70.5079 58.1022 71.0039V72.5539L56.8932 71.5309H69.2932V75.9019H53.1422ZM78.5261 75.9019L86.7721 53.2719H90.9261L82.7111 75.9019H78.5261ZM76.9761 65.7029C75.7568 65.7029 74.7338 65.4342 73.9071 64.8969C73.1011 64.3389 72.4915 63.6052 72.0781 62.6959C71.6855 61.7659 71.4891 60.7429 71.4891 59.6269V58.8209C71.4891 57.6429 71.6958 56.5992 72.1091 55.6899C72.5225 54.7805 73.1425 54.0675 73.9691 53.5509C74.7958 53.0342 75.7981 52.7759 76.9761 52.7759C78.1748 52.7759 79.1771 53.0342 79.9831 53.5509C80.8098 54.0675 81.4298 54.7805 81.8431 55.6899C82.2565 56.5992 82.4631 57.6429 82.4631 58.8209V59.6269C82.4631 60.7429 82.2565 61.7659 81.8431 62.6959C81.4505 63.6052 80.8511 64.3389 80.0451 64.8969C79.2391 65.4342 78.2161 65.7029 76.9761 65.7029ZM76.9761 62.3859C77.6168 62.3859 78.0818 62.1585 78.3711 61.7039C78.6811 61.2285 78.8361 60.4122 78.8361 59.2549C78.8361 58.0355 78.6811 57.1985 78.3711 56.7439C78.0611 56.2892 77.5961 56.0619 76.9761 56.0619C76.3561 56.0619 75.8911 56.2892 75.5811 56.7439C75.2711 57.1985 75.1161 58.0252 75.1161 59.2239C75.1161 60.3812 75.2711 61.1975 75.5811 61.6729C75.8911 62.1482 76.3561 62.3859 76.9761 62.3859ZM92.3831 76.4289C91.1431 76.4289 90.1201 76.1602 89.3141 75.6229C88.5081 75.0855 87.8985 74.3622 87.4851 73.4529C87.0925 72.5229 86.8961 71.4999 86.8961 70.3839V69.5779C86.8961 68.3792 87.1028 67.3252 87.5161 66.4159C87.9295 65.5065 88.5391 64.7935 89.3451 64.2769C90.1718 63.7602 91.1845 63.5019 92.3831 63.5019C93.5818 63.5019 94.5841 63.7602 95.3901 64.2769C96.1961 64.7935 96.8058 65.5065 97.2191 66.4159C97.6325 67.3252 97.8391 68.3792 97.8391 69.5779V70.3839C97.8391 71.4999 97.6325 72.5229 97.2191 73.4529C96.8265 74.3622 96.2271 75.0855 95.4211 75.6229C94.6358 76.1602 93.6231 76.4289 92.3831 76.4289ZM92.3831 73.1429C93.0238 73.1429 93.4888 72.9155 93.7781 72.4609C94.0881 71.9855 94.2431 71.1692 94.2431 70.0119C94.2431 68.7719 94.0881 67.9349 93.7781 67.5009C93.4681 67.0462 93.0031 66.8189 92.3831 66.8189C91.7631 66.8189 91.2878 67.0462 90.9571 67.5009C90.6471 67.9349 90.4921 68.7615 90.4921 69.9809C90.4921 71.1382 90.6471 71.9545 90.9571 72.4299C91.2671 72.9052 91.7425 73.1429 92.3831 73.1429Z" fill="white"></path>
                                            <circle cx="65" cy="65.775" r="62.582" stroke="#EEEEEE" strokeWidth="3"></circle>
                                            <mask id="path-3-inside-1_1823_812" fill="white">
                                                <path d="M65.0001 4.00853C65.0001 2.29275 66.3921 0.894071 68.1059 0.976193C81.2847 1.60763 93.9859 6.24573 104.492 14.3077C115.822 23.0013 123.967 35.1904 127.663 48.9846C131.359 62.7788 130.4 77.4071 124.935 90.6009C119.47 103.795 109.804 114.816 97.4367 121.957C85.0692 129.097 70.6911 131.957 56.5325 130.093C42.3739 128.229 29.2259 121.745 19.1279 111.647C9.02983 101.549 2.54598 88.4013 0.681954 74.2427C-1.04663 61.1128 1.28722 47.7943 7.32979 36.0653C8.11559 34.5401 10.0229 34.0339 11.5088 34.8918C12.9947 35.7497 13.4958 37.6465 12.7177 39.1757C7.35465 49.7167 5.29217 61.6581 6.84219 73.4317C8.52769 86.2342 14.3905 98.1229 23.5214 107.254C32.6523 116.385 44.541 122.247 57.3435 123.933C70.1461 125.618 83.147 123.032 94.33 116.576C105.513 110.119 114.253 100.153 119.195 88.2231C124.136 76.293 125.003 63.0658 121.661 50.5927C118.319 38.1197 110.955 27.098 100.71 19.2371C91.2887 12.0079 79.9159 7.8234 68.1056 7.19746C66.3923 7.10666 65.0001 5.72432 65.0001 4.00853Z"></path>
                                            </mask>
                                            <path d="M65.0001 4.00853C65.0001 2.29275 66.3921 0.894071 68.1059 0.976193C81.2847 1.60763 93.9859 6.24573 104.492 14.3077C115.822 23.0013 123.967 35.1904 127.663 48.9846C131.359 62.7788 130.4 77.4071 124.935 90.6009C119.47 103.795 109.804 114.816 97.4367 121.957C85.0692 129.097 70.6911 131.957 56.5325 130.093C42.3739 128.229 29.2259 121.745 19.1279 111.647C9.02983 101.549 2.54598 88.4013 0.681954 74.2427C-1.04663 61.1128 1.28722 47.7943 7.32979 36.0653C8.11559 34.5401 10.0229 34.0339 11.5088 34.8918C12.9947 35.7497 13.4958 37.6465 12.7177 39.1757C7.35465 49.7167 5.29217 61.6581 6.84219 73.4317C8.52769 86.2342 14.3905 98.1229 23.5214 107.254C32.6523 116.385 44.541 122.247 57.3435 123.933C70.1461 125.618 83.147 123.032 94.33 116.576C105.513 110.119 114.253 100.153 119.195 88.2231C124.136 76.293 125.003 63.0658 121.661 50.5927C118.319 38.1197 110.955 27.098 100.71 19.2371C91.2887 12.0079 79.9159 7.8234 68.1056 7.19746C66.3923 7.10666 65.0001 5.72432 65.0001 4.00853Z" stroke="white" strokeWidth="12" strokeLinejoin="round" mask="url(#path-3-inside-1_1823_812)"></path>
                                        </svg>
                                    </div>
                                    <p className="text-color-white-2 titlium-font">of students were served successfully*</p>
                                </div>
                            </div>

                            <div className="lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full testimonialBox  rounded-3xl">
                                <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed mb-6">I had no prior experience, but this program gave me the skills to build my own portfolio website. Now I feel confident applying for web development internships!</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-white">Ayush sharma</span>
                                            <span className="text-gray-500 text-sm">First-year Student</span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full   rounded-3xl testimonialBox">
                                <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed mb-6"> Thanks to this platform, I was able to learn Java and build a simple game. It was so rewarding to see my code come to life!.</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-white">Swati singh</span>
                                            <span className="text-gray-500 text-sm">First-year Student</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full rounded-3xl testimonialBox">
                                <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed mb-6"> Confused by theory? Me too! This platform was my game-changer. With real-world projects (think building a website!), I mastered HTML, CSS, and gained the confidence to impress. My portfolio landed me a summer internship at a tech startup, and even a part-time job! Feeling lost turned into launching a tech career all thanks to this platform!.</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-white">Rahul M.</span>
                                            <span className="text-gray-500 text-sm">Second-year Student</span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full rounded-3xl testimonialBox">
                                <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed mb-6"> This program helped me solidify my understanding of C programming concepts. Now I feel much more prepared for my computer science courses.</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-white">Aditya Singh</span>
                                            <span className="text-gray-500 text-sm">First-year Student</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full rounded-3xl testimonialBox">
                                <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed mb-6"> C programming always seemed intimidating, but the mentors on this platform made it so much easier. They helped me understand the concepts and solve complex coding challenges. Feeling much more prepared for my CS degree!</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-white">Krishna Y.</span>
                                            <span className="text-gray-500 text-sm">First-year Student</span>
                                        </span>
                                    </a>
                                </div>
                            </div>




                            <div className="showMore hidden flex-wrap m-auto justify-evenly">

                                <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full rounded-3xl testimonialBox">
                                    <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-6">I always loved creating games, but never knew how to code them. This platform&apos;s Java course was amazing! I built a simple game and learned so much in the process. Feeling like a coding rockstar now!.</p>
                                        <a className="inline-flex items-center">
                                            <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-white">Rohan Desai</span>
                                                <span className="text-gray-500 text-sm">Second-year Student</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full rounded-3xl testimonialBox">
                                    <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-6"> Never thought coding could be this fun! This platform&apos;s interactive lessons made learning web development enjoyable. Now I can build basic websites and impress my friends with my skills. Thanks!</p>
                                        <a className="inline-flex items-center">
                                            <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-white">Riya Sharma</span>
                                                <span className="text-gray-500 text-sm">First-year Student</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full rounded-3xl testimonialBox">
                                    <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-6"> The project-based approach was fantastic! I learned so much more by doing real web development tasks than just reading textbooks.</p>
                                        <a className="inline-flex items-center">
                                            <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-white">Anika Patel</span>
                                                <span className="text-gray-500 text-sm">Second-year Student</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>


                                <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full rounded-3xl testimonialBox">
                                    <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-6">Thanks to this platform,
                                            I landed a fantastic web development internship! The project-based learning helped me build a strong portfolio that impressed the company.</p>
                                        <a className="inline-flex items-center">
                                            <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-white">Zara Khan</span>
                                                <span className="text-gray-500 text-sm">First-year Student</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full rounded-3xl testimonialBox">
                                    <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-6">I love the supportive community on this platform! Fellow students and mentors are always there to answer questions and share resources</p>
                                        <a className="inline-flex items-center">
                                            <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-white">Vikram Joshi</span>
                                                <span className="text-gray-500 text-sm">Second-year Student</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className=" lg:w-[30%] max-sm:mx-2 max-sm:px-0  w-full rounded-3xl testimonialBox">
                                    <div className="h-full bg-gray-950 text-white z-30 bg-opacity-40 p-8 max-sm:py-7 max-sm:px-4 rounded-3xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  mb-4 text-red-500" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                        <p className="leading-relaxed mb-6"> C++ programming always seemed daunting,
                                            but the mentors on this platform made it clear and engaging. They helped me break down complex problems into manageable steps, and now I can tackle coding challenges with confidence. This platform is a lifesaver!</p>
                                        <a className="inline-flex items-center">
                                            <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-white">Navdeep Kaur</span>
                                                <span className="text-gray-500 text-sm">First-year Student</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <button id="showButton" className="btn btn-red hover:bg-red-700 bg-red-800 max-sm:px-24" onClick={showMoreTestimonials}>Show more</button>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimonial
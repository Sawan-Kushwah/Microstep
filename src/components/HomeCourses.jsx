import { NavLink } from "react-router-dom"


const HomeCourses = () => {
    return (
        <section id="courses" >
            <div className="heading text-center text-3xl pt-20 ">
                <div className="mb-4 font-bold">
                    <h1>Internships</h1>
                </div>
                <div className="text text-[3rem]">
                    BECOME SKILLED AT WHAT MATTER&apos;S
                </div>
            </div>
            <div className="coursesContainer">

                {/* web development */}

                <div className="container mx-auto flex px-16 my-16 md:flex-row flex-col items-center w-11/12 border rounded-[25px] py-16 box-shadow">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="box backdrop-blur-lg bg-gray-300 text-black py-3 px-14 text-lg rounded-r-3xl rounded-l-lg font-bold mb-4">
                            Web Development
                        </div>
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">THE WEB DEVELOPER :
                            <br className="hidden lg:inline-block" />MAKE WEBSITE  <br />CREATION OF YOUR CARRIER !
                        </h1>
                        <p className="mb-8 leading-relaxed"><strong>Ever dreamed of building websites? This is your launchpad!</strong> Master the skills for a full-time web dev career or a side hustle This is your first step to getting there.</p>
                        <div className="benifits py-3">
                            <ul>
                                <li className="py-1.5">
                                    <div className="courses_list-item flex items-center" >
                                        <div className="icon-1x1-small-2 w-embed">
                                            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5007 12.9874C13.0007 15.4874 11.1157 17.8414 8.47071 18.3674C7.1807 18.6243 5.84252 18.4676 4.64672 17.9197C3.45091 17.3719 2.45843 16.4607 1.81061 15.3159C1.16278 14.1712 0.892631 12.8512 1.03862 11.544C1.18461 10.2368 1.7393 9.00898 2.62371 8.03535C4.43771 6.03735 7.50071 5.48735 10.0007 6.48735M5.00071 11.9874L7.50071 14.4874L13.5007 7.98735" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg></div>
                                        <p className="courses_card-heading text-size-regular pl-3"><span className=" text-green-400 font-semibold">Learn by Doing: Build Real Websites, Not Just Code.</span> (hands-on experience).</p></div>
                                </li>
                                <li className="py-1.5">
                                    <div className="courses_list-item flex items-center" >
                                        <div className="icon-1x1-small-2 w-embed">
                                            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5007 12.9874C13.0007 15.4874 11.1157 17.8414 8.47071 18.3674C7.1807 18.6243 5.84252 18.4676 4.64672 17.9197C3.45091 17.3719 2.45843 16.4607 1.81061 15.3159C1.16278 14.1712 0.892631 12.8512 1.03862 11.544C1.18461 10.2368 1.7393 9.00898 2.62371 8.03535C4.43771 6.03735 7.50071 5.48735 10.0007 6.48735M5.00071 11.9874L7.50071 14.4874L13.5007 7.98735" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg></div>
                                        <p className="courses_card-heading text-size-regular pl-3"><span className=" text-green-400 font-semibold">Zero to Hero: Start with Basics, Master Advanced Techniques</span> </p></div>
                                </li>
                                <li className="py-1.5">
                                    <div className="courses_list-item flex items-center" >
                                        <div className="icon-1x1-small-2 w-embed">
                                            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5007 12.9874C13.0007 15.4874 11.1157 17.8414 8.47071 18.3674C7.1807 18.6243 5.84252 18.4676 4.64672 17.9197C3.45091 17.3719 2.45843 16.4607 1.81061 15.3159C1.16278 14.1712 0.892631 12.8512 1.03862 11.544C1.18461 10.2368 1.7393 9.00898 2.62371 8.03535C4.43771 6.03735 7.50071 5.48735 10.0007 6.48735M5.00071 11.9874L7.50071 14.4874L13.5007 7.98735" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg></div>
                                        <p className="courses_card-heading text-size-regular pl-3"><span className=" text-green-400 font-semibold">Stand Out from the Crowd: Gain Real-World Projects for Your Portfolio.</span></p>
                                    </div>
                                </li>
                                <li className="py-1.5">
                                    <div className="courses_list-item flex items-center" >
                                        <div className="icon-1x1-small-2 w-embed">
                                            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5007 12.9874C13.0007 15.4874 11.1157 17.8414 8.47071 18.3674C7.1807 18.6243 5.84252 18.4676 4.64672 17.9197C3.45091 17.3719 2.45843 16.4607 1.81061 15.3159C1.16278 14.1712 0.892631 12.8512 1.03862 11.544C1.18461 10.2368 1.7393 9.00898 2.62371 8.03535C4.43771 6.03735 7.50071 5.48735 10.0007 6.48735M5.00071 11.9874L7.50071 14.4874L13.5007 7.98735" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg></div>
                                        <p className="courses_card-heading text-size-regular pl-3"><span className=" text-green-400 font-semibold">No Experience Needed: Passion for Tech is All You Need</span>  (Welcomes beginners)</p></div>
                                </li>
                                <li className="py-1.5">
                                    <div className="courses_list-item flex items-center" >
                                        <div className="icon-1x1-small-2 w-embed">
                                            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5007 12.9874C13.0007 15.4874 11.1157 17.8414 8.47071 18.3674C7.1807 18.6243 5.84252 18.4676 4.64672 17.9197C3.45091 17.3719 2.45843 16.4607 1.81061 15.3159C1.16278 14.1712 0.892631 12.8512 1.03862 11.544C1.18461 10.2368 1.7393 9.00898 2.62371 8.03535C4.43771 6.03735 7.50071 5.48735 10.0007 6.48735M5.00071 11.9874L7.50071 14.4874L13.5007 7.98735" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg></div>
                                        <p className="courses_card-heading text-size-regular pl-3"><span className=" text-red-500 font-bold">Get Certified, Get Hired: Showcase Your Skills to Employers </span></p></div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center z-30">
                            <NavLink to={"/webdevelopment"}>
                                <button className="btn btn-green">
                                    getting started
                                </button>
                            </NavLink>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                </div>

                {/* programming */}
                <div className="container mx-auto flex px-16 my-16 md:flex-row-reverse flex-row-reverse items-center w-11/12 border rounded-[25px] py-16 box-shadow">
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-18 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="box backdrop-blur-lg bg-gray-300 text-black py-3 px-14 text-lg rounded-l-3xl rounded-r-lg font-bold mb-4">
                            Programmer
                        </div>
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">THE PROGRAMMER :
                            <br className="hidden lg:inline-block" />MAKE CODE  <br />CREATION OF YOUR CARRIER !
                        </h1>
                        <p className="mb-8 leading-relaxed">Have you ever dream of becoming a Software developer? This is your first step to getting there. Whether you want to take up Software development as a full time career or a part-time job, this all-in-one course is your perfect plan of action.</p>
                        <div className="benifits py-3">
                            <ul>
                                <li className="py-1.5">
                                    <div className="courses_list-item flex items-center" >
                                        <div className="icon-1x1-small-2 w-embed">
                                            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5007 12.9874C13.0007 15.4874 11.1157 17.8414 8.47071 18.3674C7.1807 18.6243 5.84252 18.4676 4.64672 17.9197C3.45091 17.3719 2.45843 16.4607 1.81061 15.3159C1.16278 14.1712 0.892631 12.8512 1.03862 11.544C1.18461 10.2368 1.7393 9.00898 2.62371 8.03535C4.43771 6.03735 7.50071 5.48735 10.0007 6.48735M5.00071 11.9874L7.50071 14.4874L13.5007 7.98735" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg></div>
                                        <p className="courses_card-heading text-size-regular pl-3"><span className=" text-green-400 font-semibold">Code Your Future: Master Powerful Programming Languages</span></p></div>
                                </li>
                                <li className="py-1.5">
                                    <div className="courses_list-item flex items-center" >
                                        <div className="icon-1x1-small-2 w-embed">
                                            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5007 12.9874C13.0007 15.4874 11.1157 17.8414 8.47071 18.3674C7.1807 18.6243 5.84252 18.4676 4.64672 17.9197C3.45091 17.3719 2.45843 16.4607 1.81061 15.3159C1.16278 14.1712 0.892631 12.8512 1.03862 11.544C1.18461 10.2368 1.7393 9.00898 2.62371 8.03535C4.43771 6.03735 7.50071 5.48735 10.0007 6.48735M5.00071 11.9874L7.50071 14.4874L13.5007 7.98735" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg></div>
                                        <p className="courses_card-heading text-size-regular pl-3"><span className=" text-green-400 font-semibold">Unlock the Logic: Solve Real-World Problems with Code</span></p></div>
                                </li>
                                <li className="py-1.5">
                                    <div className="courses_list-item flex items-center" >
                                        <div className="icon-1x1-small-2 w-embed">
                                            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5007 12.9874C13.0007 15.4874 11.1157 17.8414 8.47071 18.3674C7.1807 18.6243 5.84252 18.4676 4.64672 17.9197C3.45091 17.3719 2.45843 16.4607 1.81061 15.3159C1.16278 14.1712 0.892631 12.8512 1.03862 11.544C1.18461 10.2368 1.7393 9.00898 2.62371 8.03535C4.43771 6.03735 7.50071 5.48735 10.0007 6.48735M5.00071 11.9874L7.50071 14.4874L13.5007 7.98735" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg></div>
                                        <p className="courses_card-heading text-size-regular pl-3"><span className=" text-green-400 font-semibold">Games, Apps, and More: Build Anything You Imagine</span></p></div>
                                </li>
                                <li className="py-1.5">
                                    <div className="courses_list-item flex items-center" >
                                        <div className="icon-1x1-small-2 w-embed">
                                            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5007 12.9874C13.0007 15.4874 11.1157 17.8414 8.47071 18.3674C7.1807 18.6243 5.84252 18.4676 4.64672 17.9197C3.45091 17.3719 2.45843 16.4607 1.81061 15.3159C1.16278 14.1712 0.892631 12.8512 1.03862 11.544C1.18461 10.2368 1.7393 9.00898 2.62371 8.03535C4.43771 6.03735 7.50071 5.48735 10.0007 6.48735M5.00071 11.9874L7.50071 14.4874L13.5007 7.98735" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg></div>
                                        <p className="courses_card-heading text-size-regular pl-3"><span className=" text-green-400 font-semibold">Level Up Your Skills: From Beginner to Coding Pro</span></p></div>
                                </li>
                                <li className="py-1.5">
                                    <div className="courses_list-item flex items-center" >
                                        <div className="icon-1x1-small-2 w-embed">
                                            <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5007 12.9874C13.0007 15.4874 11.1157 17.8414 8.47071 18.3674C7.1807 18.6243 5.84252 18.4676 4.64672 17.9197C3.45091 17.3719 2.45843 16.4607 1.81061 15.3159C1.16278 14.1712 0.892631 12.8512 1.03862 11.544C1.18461 10.2368 1.7393 9.00898 2.62371 8.03535C4.43771 6.03735 7.50071 5.48735 10.0007 6.48735M5.00071 11.9874L7.50071 14.4874L13.5007 7.98735" stroke="#EEEEEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg></div>
                                        <p className="courses_card-heading text-size-regular pl-3"><span className=" text-red-500 font-bold">Get Certified, Showcase In-Demand Programming Skills</span></p></div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center z-30">
                            <NavLink to={"/programming"}>

                                <button className="btn btn-red">getting started</button>
                            </NavLink>


                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default HomeCourses
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useForm } from "react-hook-form"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const ApplyNow = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmitUserData = async (data) => {
    try {
      let formData = new FormData(); // formData is used because we are submitting file
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("email", data.email);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("collegeName", data.collegeName);
      formData.append("about", data.about);
      formData.append("resume", data.resume[0]);
      formData.append("internshipFor", data.internshipFor);

      let res = await axios.post("https://microstep-server.onrender.com/savedata", formData, { // axios is used instead of fetch for file type data submission
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      if (res.status === 200) {
        navigate("/successfullySubmitted");
      }
    } catch (error) {
      alert("Invalid information")
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0) // this is render page from the top
  }, [])
  return (
    <>
      <Navbar />
      <section className="px-10 py-28 bg-black">
        <div className="container w-3/5 m-auto max-sm:w-full">
          <form className=" max-lg:max-w-md max-lg:mx-auto" onSubmit={handleSubmit(onSubmitUserData)}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="firstName" id="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("firstName")} required />
                <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="lastName" id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("lastName")} required />
                <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input type="tel" name="phoneNumber" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("phoneNumber", { required: { value: true, message: "This field is required" }, minLength: { value: 10, message: "Minimum length is 10" } })} />
                <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                {errors.phoneNumber && <div className="text-sm text-red-500">{errors.phoneNumber.message}</div>}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("email")} value={isAuthenticated ? user.email ? user.email : user.name : ""} readOnly />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                {errors.email && <div className="text-sm text-red-500">{errors.email.message}</div>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("city")} required />
                <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <select type="text" name="internship" id="internship" className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer flex justify-center items-center cursor-pointer" placeholder=" " {...register("internshipFor")} required >
                  <option value="" className="text-white bg-red-500 p-0 m-0">Select Internship</option>
                  <option value="Basic Web Development Internship" className=" background-gray cursor-pointer text-white hover:bg-red-500 p-0 m-0">Basic Development</option>
                  <option value="Intermediate Web Development Internship" className=" background-gray cursor-pointer text-white p-0 m-0">Intermediate Development</option>
                  <option value="Advance Web Development Internship" className=" background-gray cursor-pointer text-white p-0 m-0">Advance Development</option>
                  <option value="Java Programming Internship" className=" background-gray cursor-pointer text-white p-0 m-0">JAVA Programming</option>
                  <option value="C++ Programming Internship" className=" background-gray cursor-pointer text-white p-0 m-0">C++ Programming</option>
                  <option value="C Programming Internship" className=" background-gray cursor-pointer text-white p-0 m-0">C Programming</option>
                </select>
                <label htmlFor="internship" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Internship For</label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="state" id="state" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("state")} required />
              <label htmlFor="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="college" id="collegeName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("collegeName")} required />
              <label htmlFor="collegeName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">College</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="about" id="about" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("about", { required: { value: true, message: "This field is required" }, minLength: { value: 20, message: "Minimum length is 20" } })} />
              <label htmlFor="about" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Something about you</label>
              {errors.about && <div className="text-sm text-red-500">{errors.about.message}</div>}
            </div>

            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" htmlFor="resume">Upload resume</label>
              <input className="block w-full text-center text-gray-900 border border-gray-100 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-950 dark:border-gray-800 dark:placeholder-gray-800 p-20 text-2xl max-sm:p-7 max-sm:text-sm" aria-describedby="resume_help" id="resume" type="file" placeholder="Drag and drop resume here" {...register("resume")} required />
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="resume_help">Drag and drop you resume here for better chance of selection</div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ApplyNow
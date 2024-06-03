import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useForm } from "react-hook-form"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const ApplyNow = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmitUserData = async (data) => {
    console.log(data)
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

    let res = await axios.post("http://localhost:3000/savedata", formData, { // axios is used instead of fetch for file type data submission
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    console.log(res.status === 200);
    if (res.status === 200) {
      navigate("/successfullySubmitted");
    }
  }
  return (
    <>
      <Navbar />
      <section className="px-10 py-28 bg-black">
        <div className="container w-3/5 m-auto">
          <form className=" max-lg:max-w-md max-lg:mx-auto" onSubmit={handleSubmit(onSubmitUserData)}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="firstName" id="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("firstName", { required: { value: true, message: "This field is required" } })} />
                <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                {errors.firstName && <div className="text-sm text-red-500">{errors.firstName.message}</div>}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="lastName" id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("lastName", { required: { value: true, message: "This field is required" } })} />
                <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                {errors.lastName && <div className="text-sm text-red-500">{errors.lastName.message}</div>}
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
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("city", { required: { value: true, message: "This field is required" } })} />
              <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
              {errors.city && <div className="text-sm text-red-500">{errors.city.message}</div>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="state" id="state" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("state", { required: { value: true, message: "This field is required" } })} />
              <label htmlFor="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
              {errors.state && <div className="text-sm text-red-500">{errors.state.message}</div>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="college" id="collegeName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("collegeName", { required: { value: true, message: "This field is required" } })} />
              <label htmlFor="collegeName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">College</label>
              {errors.collegeName && <div className="text-sm text-red-500">{errors.collegeName.message}</div>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="about" id="about" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("about", { required: { value: true, message: "This field is required" }, minLength: { value: 20, message: "Minimum length is 20" } })} />
              <label htmlFor="about" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Something about you</label>
              {errors.about && <div className="text-sm text-red-500">{errors.about.message}</div>}
            </div>

            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" htmlFor="resume">Upload resume</label>
              <input className="block w-full text-center text-gray-900 border border-gray-100 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-950 dark:border-gray-800 dark:placeholder-gray-800 p-20 text-2xl max-sm:p-7 max-sm:text-sm" aria-describedby="resume_help" id="resume" type="file" placeholder="Drag and drop resume here" {...register("resume", { required: { value: true, message: "This field is required" } })} />
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="resume_help">Drag and drop you resume here for better chance of selection</div>
              {errors.resume && <div className="text-sm text-red-500">{errors.resume.message}</div>}
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
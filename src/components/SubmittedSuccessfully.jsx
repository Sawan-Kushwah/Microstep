
import { NavLink } from "react-router-dom"
import submittedImg from "../assets/submitted.png"


const SubmittedSuccessfully = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh]  flex justify-center items-center bg-black">
        <div className="main text-center">
          <div className="img flex justify-center mb-2">
            <img src={submittedImg} alt="verify" className="w-[400px] max-sm:w-48" />
          </div>
          <div className="text-2xl mb-1">
            Submitted Successfully
          </div>
          <div className="text-md mb-4 ">
            Your response has been saved Successfully , we will get back to you in 1 - 2 working days
          </div>
          <NavLink to={"/"} className="text-blue-500 underline text-lg">

            Back to home

          </NavLink>
        </div>



      </div>
    </>
  )
}

export default SubmittedSuccessfully
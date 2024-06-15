import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onsubmit = async (data) => {
    let response = await fetch("https://microstep-server.onrender.com/querryFromStudent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data })
    });
    await response.json();
    toast.success('Your Querry has been sent successfully 🚀', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    reset();
  }
  useEffect(() => {
    window.scrollTo(0, 0) // this is render page from the top
  }, [])
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-48 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Ask Anytime ! , Ask Your Querry Here</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Confused about something? Don&apos;t let your doubts hold you back. Submit your questions and get accurate, timely responses from experts who care about your success. Let&apos;s tackle your queries together!</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto ">
            <form className="flex flex-wrap -m-2" onSubmit={handleSubmit(onsubmit)}>
              <div className="p-2 w-1/2 max-md:w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("name")} required />
                </div>
              </div>
              <div className="p-2 w-1/2 max-md:w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  {...register("email")} required />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"  {...register("querry", { minLength: { value: 20, message: "Minimum Length of your querry is 20 words" } })} required></textarea>
                </div>
                {errors.querry && <div className="text-sm text-red-500">{errors.querry.message}</div>}

              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Submit Querry</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />


    </>
  )
}

export default Contact
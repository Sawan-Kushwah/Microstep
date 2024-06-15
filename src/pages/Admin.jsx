import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";


const Admin = () => {
  const [studentInformation, setstudentInformation] = useState([]);
  const [task, setTask] = useState("");
  const [studentId, setStudentId] = useState("")

  const getAllUser = async () => {
    let response = await fetch('https://microstep-server.onrender.com/getDataFromDatabase');
    let student = await response.json();
    setstudentInformation(student);
  }

  const addTask = (e) => {
    setTask(e.target.value);
  }

  const openAddTaskForm = (id) => {
    setStudentId(id);
    let form = document.getElementById('addTask');
    form.classList.remove('hidden');
  }
  const closeFrom = () => {
    document.getElementById('addTask').classList.add('hidden');
  }

  const sendMail = async (id) => {
    if (confirm("Do you really want to select this student?")) {
      let response = await fetch("https://microstep-server.onrender.com/sendMailToSelectedStudent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, taskLink: task })
      });
      if (response.status === 200) {
        toast.success('Internship Task sent successfully 🚀', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        getAllUser();
        closeFrom();
      }
    }
  }
  const deleteStudent = async (id) => {
    if (confirm("Do you really want to delete this student?")) {
      let response = await fetch("https://microstep-server.onrender.com/rejectStudent", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      })
      if (response.status === 200) {
        toast.warn('Student Deleted successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        getAllUser();
      }
    }
  }

  const giveCertificate = async (id) => {
    if (confirm(`Do you want to give CERTIFIFCATE to this student? ${id}`)) {
      let response = await fetch("https://microstep-server.onrender.com/sendCertificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, certificateLink: task })
      });
      if (response.status === 200) {
        toast.success('Certificated has been sent successfully 🚀', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        getAllUser();
        closeFrom();
      }
    }
  }


  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
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
      <Navbar />

      <div id="addTask" className="border p-15 h-96  w-2/3 space-x-4 z-50 bg-slate-900 absolute top-[22%] left-[18%] hidden">
        <div className="close mb-5  text-end p-5 cursor-pointer" onClick={closeFrom}>Close</div>
        <div className="  m-0 form flex flex-col justify-center items-center">
          <div className="text font-bold text-3xl pb-6">
            Give Drive Link
          </div>
          <input type="text" className="p-2 border w-11/12 mx-auto bg-white mb-4 text-black font-bold text-lg" placeholder="Task Link" onChange={addTask} />
          <div className="flex">
            <button type="submit" className="btn px-10  b1n-green mx-2" onClick={() => sendMail(studentId)}>Send Task</button>
            <button type="submit" className="btn px-10  b1n-green mx-2" onClick={() => giveCertificate(studentId)}>Send Certificate</button>
          </div>
        </div>
      </div >

      <main className="container py-20">
        <div className="navbar flex justify-around items-center">
          <div className="heading text-3xl font-bold text-center text-white p-10">
            Admin , Welcome <span className="text-cyan-500">Sawan Kushwah</span>
          </div>
        </div>

        <div className="w-full overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap border">
            <thead>
              <tr className="border">
                <th className="px-1 py-4 font-bold text-center border title-font tracking-wider text-gray-200 text-lg bg-blue-900 rounded-tl rounded-bl">Applied for</th>
                <th className="px-1 py-4 font-bold text-center border title-font tracking-wider text-gray-200 text-lg bg-blue-900">Name</th>
                <th className="px-1 py-4 font-bold text-center border title-font tracking-wider text-gray-200 text-lg bg-blue-900">Email</th>
                <th className="px-1 py-4 font-bold text-center border title-font tracking-wider text-gray-200 text-lg bg-blue-900">Phone Number</th>
                <th className="px-1 py-4 font-bold text-center border title-font tracking-wider text-gray-200 text-lg bg-blue-900">Address</th>
                <th className="px-1 py-4 font-bold text-center border title-font tracking-wider text-gray-200 text-lg bg-blue-900">User Actions</th>
                <th className="px-1 py-4 font-bold text-center border title-font tracking-wider text-gray-200 text-lg bg-blue-900">Admin Actions</th>
              </tr>
            </thead>
            {studentInformation.map(item => {
              return (<tbody key={item._id}>
                <tr>
                  <td className="px-1 py-1 text-center border"  > {item.internshipFor}  </td>
                  <td className="px-1 py-1 text-center border">{item.firstName} {item.lastName}</td>
                  <td className="px-1 py-1 text-center border"  > {item.email}  </td>
                  <td className="px-1 py-1 text-center border"  > {item.phoneNumber}  </td>
                  <td className="px-1 py-1 text-center border">{item.city} {item.state}</td>
                  <td className="border cursor-pointer text-center p-2 space-x-0.5">
                    <a href={item.viewResume} target="__blank" className="w-full"><button className="flex justify-center delelteButton text-white bg-blue-500  p-2 focus:outline-none hover:bg-blue-600 rounded w-4/5 m-auto">Resume here</button></a>

                    {item.isTaskSubmitted &&
                      <div className=" mt-2 flex justify-center">
                        {/* <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg> */}
                        {/* <button className="flex justify-center w-full delelteButton text-white bg-green-500  p-[6px] focus:outline-none hover:bg-green-600 rounded items-center" onClick={showDrop}>Task Submitted 
                        </button> */}
                        <div className="dropdown z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mt-2 min-w-10 w-fit">
                          <ul className="py-1 text-sm text-gray-900 dark:text-gray-200 flex">
                            {item.driveLink &&
                              <li>
                                <a href={item.driveLink} className="block px-4 py-2 text-start  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Drive Link</a>
                              </li>
                            }
                            {item.linkedinLink &&
                              <li>
                                <a href={item.linkedinLink} className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Github Link</a>
                              </li>
                            }
                            {item.githubLink &&
                              <li>
                                <a href={item.githubLink} className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Linkedin Link</a>
                              </li>
                            }
                          </ul>
                        </div>
                      </div>
                    }
                  </td>

                  <td className="p-2 border text-lg text-white flex-col flex gap-2 justify-center items-center">
                    {item.isSelectedForInternship ? <>
                      <a href={item.taskForStudentLink} target="_blank" className=" w-full">
                        <button className="flex justify-center w-full  sendButton text-white bg-blue-500 p-[6px] focus:outline-none hover:bg-blue-600 rounded" >ViewTask✔</button>
                      </a>
                      <button className="flex justify-center w-full delelteButton text-white bg-red-500  p-[6px] focus:outline-none hover:bg-red-600 rounded" onClick={() => deleteStudent(item._id)}>Remove❌</button>
                      {item.isTaskSubmitted &&
                        <button className="flex justify-center w-full delelteButton text-white bg-green-500  p-[6px] focus:outline-none hover:bg-green-600 rounded" onClick={() => openAddTaskForm(item._id)}>Certification</button>
                      }
                    </>
                      :
                      <>
                        <button className="flex justify-center w-full  sendButton text-white bg-green-500 p-[6px] focus:outline-none hover:bg-green-600 rounded" onClick={() => openAddTaskForm(item._id)} >Select?</button>
                        <button className="flex justify-center w-full delelteButton text-white bg-red-500  p-[6px] focus:outline-none hover:bg-red-600 rounded" onClick={() => deleteStudent(item._id)}>Delete❌</button>
                      </>
                    }
                  </td>
                </tr>
              </tbody>
              )
            })}
          </table>
        </div>
      </main>


    </>
  )
}
export default Admin
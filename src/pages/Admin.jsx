import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from "@auth0/auth0-react";


const Admin = () => {
  const { logout } = useAuth0();
  const [studentInformation, setstudentInformation] = useState([]);
  const [task, setTask] = useState("");
  const [studentId, setStudentId] = useState("")

  const getAllUser = async () => {
    let response = await fetch('http://localhost:3000/getDataFromDatabase');
    let student = await response.json();
    setstudentInformation(student);
  }

  const addTask = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  }

  const openAddTaskForm = (id) => {
    console.log("clicked to open")
    setStudentId(id);
    let form = document.getElementById('addTask');
    form.classList.remove('hidden');
  }
  const closeFrom = () => {
    document.getElementById('addTask').classList.add('hidden');
  }

  const sendMail = async (id) => {
    if (confirm("Do you really want to select this student?")) {
      let response = await fetch("http://localhost:3000/sendMailToSelectedStudent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, taskLink: task })
      });
      if (response.status === 200) {
        toast.success('Mail send successfully 🚀', {
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
      let response = await fetch("http://localhost:3000/rejectStudent", {
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


      <div id="addTask" className="border p-15 h-96  w-2/3 space-x-4 bg-slate-900 absolute top-[22%] left-[18%] hidden">
        <div className="close mb-5  text-end p-5 cursor-pointer" onClick={closeFrom}>Close</div>
        <div className="  m-0 form flex flex-col justify-center items-center">
          <div className="text font-bold text-3xl pb-6">
            Give Drive Link Of Task
          </div>
          <input type="text" className="p-2 border w-11/12 mx-auto bg-white mb-4 text-black font-bold text-lg" placeholder="Task Link" onChange={addTask} />
          <button type="submit" className="btn px-10  b1n-green" onClick={() => sendMail(studentId)}>Send Mail</button>
        </div>
      </div >

      <main className="container">
        <div className="navbar flex justify-around items-center">
          <div className="heading text-3xl font-bold text-center text-white p-10">
            Admin Dashboard
          </div>
          <div className="logout">
            <button className="btn btn-red" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              logout
            </button>
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
                <th className="px-1 py-4 font-bold text-center border title-font tracking-wider text-gray-200 text-lg bg-blue-900">View Resume</th>
                <th className="px-1 py-4 font-bold text-center border title-font tracking-wider text-gray-200 text-lg bg-blue-900">Actions</th>
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
                  <td className="border cursor-pointer text-center" ><a href={item.viewResume} target="__blank" className=" bg-blue-500 p-2 hover:bg-blue-700">{item.firstName} resume here</a></td>
                  {item.isSelectedForInternship ? <td className="p-2 border text-lg text-white flex-col flex gap-2 justify-center items-center">
                    <a href={item.taskForStudentLink} target="_blank"><button className="flex justify-center w-full  sendButton text-white bg-blue-500 p-[6px] focus:outline-none hover:bg-blue-600 rounded" >ViewTask✔</button></a>
                    <button className="flex justify-center w-full delelteButton text-white bg-red-500  p-[6px] focus:outline-none hover:bg-red-600 rounded" onClick={() => deleteStudent(item._id)}>Remove❌</button>
                  </td> : <td className="px-2 py-2 border text-lg text-white flex-col flex gap-2 justify-center items-center">
                    <button className="flex justify-center w-full  sendButton text-white bg-green-500 p-[6px] focus:outline-none hover:bg-green-600 rounded" onClick={() => openAddTaskForm(item._id)} >Select?</button>
                    <button className="flex justify-center w-full delelteButton text-white bg-red-500  p-[6px] focus:outline-none hover:bg-red-600 rounded" onClick={() => deleteStudent(item._id)}>Delete❌</button>
                  </td>
                  }
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



// onClick={() => sendMail(item._id)}

export default Admin
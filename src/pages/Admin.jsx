import { useEffect, useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from "@auth0/auth0-react";


const Admin = () => {
  const { logout } = useAuth0();
  const [studentInformation, setstudentInformation] = useState([]);
  const sendButton = useRef();
  const deleteButton = useRef();

  const getAllUser = async () => {
    let response = await fetch('http://localhost:3000/getDataFromDatabase');
    let student = await response.json();
    setstudentInformation(student);
  }

  const sendMail = async (id) => {
    if (confirm("Do you really want to select this student?")) {
      let response = await fetch("http://localhost:3000/sendMailToSelectedStudent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
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
        getAllUser()
      }
    }
  }
  const deleteStudent = async (id) => {
    if (confirm("Do you really want to reject this student?")) {
      let response = await fetch("http://localhost:3000/rejectStudent", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      })
      if (response.status === 200) {
        toast.warn('Student Rejected', {
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

      <main className="container">
        <div className="navbar flex justify-around items-center">
          <div className="heading text-3xl font-bold text-center text-white p-10">
            Information About Students
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
                <th className="px-4 py-3 border title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Applied for</th>
                <th className="px-4 py-3 border title-font tracking-wider font-medium text-white text-sm bg-gray-800">Name</th>
                <th className="px-4 py-3 border title-font tracking-wider font-medium text-white text-sm bg-gray-800">Email</th>
                <th className="px-4 py-3 border title-font tracking-wider font-medium text-white text-sm bg-gray-800">Phone Number</th>
                <th className="px-4 py-3 border title-font tracking-wider font-medium text-white text-sm bg-gray-800">Address</th>
                <th className="px-4 py-3 border title-font tracking-wider font-medium text-white text-sm bg-gray-800">View Resume</th>
                <th className="px-4 py-3 border title-font tracking-wider font-medium text-white text-sm bg-gray-800 text-center">Actions</th>
              </tr>
            </thead>
            {studentInformation.map(item => {
              return (
                <tbody key={item._id}>
                  <tr>
                    <td className="px-4 py-3 border"  > {item.internshipFor}  </td>
                    <td className="px-4 py-3 border">{item.firstName} {item.lastName}</td>
                    <td className="px-4 py-3 border"  > {item.email}  </td>
                    <td className="px-4 py-3 border"  > {item.phoneNumber}  </td>
                    <td className="px-4 py-3 border">{item.city} {item.state}</td>
                    <td className="px-4 py-3 border cursor-pointer" ><a href={item.viewResume} target="__blank">{item.viewResume}</a></td>
                    {item.isSelectedForInternship ? <td className="px-4 py-2 border  text-lg text-white gap-2">
                      <button ref={sendButton} className="flex justify-center w-full  sendButton text-white bg-blue-500 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Success</button>
                    </td> : <td className="px-4 py-2 border text-lg text-white flex-col flex gap-2 justify-center items-center">
                      <button ref={sendButton} className="flex justify-center w-full  sendButton text-white bg-green-500 py-2 px-4 focus:outline-none hover:bg-green-600 rounded" onClick={() => sendMail(item._id)}>Send</button>
                      <button ref={deleteButton} className="flex justify-center w-full delelteButton text-white bg-red-500  py-2 px-4 focus:outline-none hover:bg-red-600 rounded" onClick={() => deleteStudent(item._id)} >Delete</button>
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

export default Admin
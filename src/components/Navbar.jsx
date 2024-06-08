// import { NavLink } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const navigate = useNavigate();
    const getAdmin = async () => {
        let res = await fetch("http://localhost:3000/getAdminPassword");
        let r = await res.json();
        if (r.adminID === user.email) {
            navigate(`/admin/u/login/state=FhxU3Frk6fje5MBCY8zAIroa4Y5k6UYgNeqsP5yJUWNu4ISBzC4YQmdra1ceFqsxoAhm7Scmn6I8DQdOYkMBfgjeMGaHROvYSNZz2EzC7iGxV1tpSV14L1lDcl`);
        }
    }
    if (isAuthenticated) {
        getAdmin()
    }

    return (

        <>
            <header id='navbarBox' className="text-gray-400 bg-transparent backdrop-blur-md body-font fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <NavLink className="flex title-font font-medium items-center text-white mb-4 md:mb-0 border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Microstep</span>
                    </NavLink>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <NavLink to={"/"} className="mr-5 hover:text-red-500 text-xl">Home</NavLink>
                        <NavLink to={"/webdevelopment"} className="mr-5 text-xl hover:text-red-500">Web development</NavLink>
                        <NavLink to={"/programming"} className="mr-5 text-xl hover:text-red-500">Programming</NavLink>
                        <NavLink to={"/about"} className="mr-5 text-xl hover:text-red-500">About</NavLink>
                        <NavLink to={"/contact"} className="mr-5 text-xl hover:text-red-500">Contact us</NavLink>
                    </nav>

                    {isAuthenticated && <div>
                        <img src={user.picture} className='useremailbutton absolute rounded-full w-10 bg-black top-6 right-40  cursor-pointer' /><div className='absolute accountBox top-20 right-12 py-2 pr-10 pl-2 text-start rounded-lg font-normal hidden'>
                            <span className=" text-gray-200 text-sm">Microstep Account</span>
                            <br /><span className=" text-gray-400 text-sm">{user.nickname}</span> <br />
                            <span className=" text-gray-400 text-sm">{user.email}</span>
                        </div>
                    </div>
                    }

                    {isAuthenticated ?
                        <button className="btn btn-red btn-logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button> :
                        <button className="btn btn-login " onClick={() => loginWithRedirect()}>Login
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    }

                </div>
            </header>
        </>



    )
}

export default Navbar
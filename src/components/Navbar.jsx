// import { NavLink } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const [isAdmin, setisAdmin] = useState(false);
    const checkForAdmin = (mail) => {
        if (mail === user.email) {
            setisAdmin(true);
        }
    }
    const getAdmin = async () => {
        let res = await fetch("https://microstep-server.onrender.com/getAdminPassword");
        let r = await res.json();
        checkForAdmin(r.adminID);
    }
    if (isAuthenticated) {
        getAdmin()
    }
    const showNavBar = () => {
        let navBox = document.getElementById('navItemBox');
        if (navBox.classList.contains('navItemsContainer')) {
            navBox.classList.remove('navItemsContainer');
            navBox.classList.add('max-md:hidden')
        } else {
            navBox.classList.add('navItemsContainer');
            navBox.classList.remove('max-md:hidden')
        }
    }
    return (

        <>
            <header id='navbarBox' className="text-gray-400 bg-transparent backdrop-blur-md body-font absolute top-0 left-0 w-full z-50">
                <div className="container mx-auto flex py-5 px-5 items-center max-md:justify-between max-md:pl-0 ">
                    <NavLink className="flex title-font font-medium items-center text-white mb-4 max-md:mb-0 border-none max-sm:pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Microstep</span>
                    </NavLink>



                    <nav id="navItemBox" className=" md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center max-md:hidden">
                        <NavLink to={"/"} className=" py-2 px-6 navItems text-xl">Home</NavLink>
                        <NavLink to={"/webdevelopment"} className="py-2 px-6  text-xl  navItems">Web development</NavLink>
                        <NavLink to={"/programming"} className="py-2 px-6  text-xl  navItems">Programming</NavLink>
                        <NavLink to={"/about"} className="py-2 px-6  text-xl  navItems">About</NavLink>
                        {!isAdmin && <NavLink to={"/contact"} className="py-2 px-6  text-xl max-sm:mb-44  navItems">Any Querry</NavLink>}
                        {isAdmin && <NavLink to={"/private/admin"} className="py-2 px-6  text-xl max-sm:mb-44  navItems">Admin Dashboard</NavLink>}
                    </nav>

                    {isAuthenticated && <div>
                        <img src={user.picture} className='useremailbutton absolute rounded-full w-10 bg-black top-6 right-40  cursor-pointer' />
                        <div className='absolute accountBox background-gray top-20 right-12 py-2 pr-10 pl-2 text-start rounded-lg font-normal hidden'>
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
                    <div className="burger btn btn-login max-sm:px-2 cursor-pointer z-[700] max-sm:absolute max-sm:top-16 hidden max-md:block" onClick={showNavBar}>
                        MENU
                    </div>
                </div>
            </header>
        </>



    )
}

export default Navbar
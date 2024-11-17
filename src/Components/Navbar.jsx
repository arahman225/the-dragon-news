import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {


    const {user, logOut} = useContext(AuthContext)


    const handleSingOut = () =>{

        logOut()
        .then(res =>{
            console.log(res)
        })
        .catch(res =>{
            console.log(res)
        })

    }


    const links = <>
    
        <NavLink to='/'>Home</NavLink>
        <Link to='/career'>Career</Link>
        <Link to='/about'>About</Link>
    </>
        
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4">
                                {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">{user && user.email}</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <i className="border p-3 rounded-full"><FaUser size={25}></FaUser></i>
                    {
                        user? <a onClick={handleSingOut} className="btn">Log Out</a>:<Link to='/auth/login' className="btn btn-neutral rounded-none px-10">Login</Link>
                    }
                     
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayout = () => {
    return (
        <div>
            <header className="py-2 w-4/5 mx-auto">
            <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
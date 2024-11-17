import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";


const Login = () => {

    const { loginUser, user } = useContext(AuthContext)

    const location = useLocation();

    const navigate = useNavigate();
  
  

    const handlLogIn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        loginUser(email, password)
        .then(res =>{
            console.log(res);
            navigate(location?.state? location.state : '/')
        })
        .catch(error =>{
            console.log(error)
        })


    }


    return (
        <div className="min-h-screen flex justify-center items-center bg-[#F3F3F3]">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-7 mx-auto ">
                <div>
                    <h3 className="text-3xl font-bold text-center">Login Your Account</h3>
                </div>
                <form onSubmit={handlLogIn} className="card-body">

                    {/* email -------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>

                    {/* password -------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div>

                    {/* submit ------ */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="flex items-center text-center">
                        <p>Don't have an account? <Link to='/auth/register' className="text-red-600">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;

        const form = new FormData(e.target)
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('photoUrl')
        console.log(email, password, photoUrl)

        // register user ---
        createUser(email, password)
        .then(res =>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })

    }
   
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center bg-[#F3F3F3]">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-7 mx-auto ">
                    <div>
                        <h3 className="text-3xl font-bold text-center"> Register Your Account</h3>
                    </div>
                    <form className="card-body" onSubmit={handleRegister}>

                        {/* Name -------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>

                        {/* photo url -------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photoUrl" className="input input-bordered" required />
                        </div>

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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* submit ------ */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="flex items-center text-center">
                            <p>have an account? <Link to='/auth/login' className="text-red-600">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
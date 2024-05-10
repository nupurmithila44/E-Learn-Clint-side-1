import { Link } from "react-router-dom";
import login from "../../assets/logg.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const {singInUser} =useContext(AuthContext);
    console.log(singInUser)

    const handleLogin = e => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        // if (password.length < 6) {
        //     toast('Length must be at least 6 character')
        // }
        // else if (!/[a-z]/.test(password)) {
        //     toast('Must have a Lowercase letter in the password')
        // }
        // else if (!/[A-Z]/.test(password)) {
        //     toast('Must have an Uppercase letter in the password')
        // }
        console.log(email, password)
        singInUser(email, password)
        .then(result =>{
            console.log(result)
            toast.success('sign in successfully')
        })
        .catch(error=>[
            console.error(error)
        ])
        // singInUser(email, password)
        //     .then(result => {
        //         console.log(result)
        //         // const loggedInUser = result.user;
        //         // console.log(loggedInUser)
        //         // navigata(location?.state ? location?.state : '/')
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })



    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl py-4 lg:mr-8 bg-base-100 ">
                    <img className=" rounded-lg" src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl py-4 lg:mr-16 bg-base-100">
                    <h1 className="text-2xl text-center font-bold text-[#ff724f]">WelCome to Login</h1>
                    <div className='flex cursor-pointer items-center justify-center mt-4 mx-5 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
                        <div className='px-4 py-2'>
                            <svg className='w-6 h-6' viewBox='0 0 40 40'>
                                <path
                                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                    fill='#FFC107'
                                />
                                <path
                                    d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                    fill='#FF3D00'
                                />
                                <path
                                    d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                    fill='#4CAF50'
                                />
                                <path
                                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                    fill='#1976D2'
                                />
                            </svg>
                        </div>

                        <span className='w-5/6 px-4 py-3 font-bold text-center'>
                            Sign in with Google
                        </span>
                    </div>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="sign In" />
                        </div>
                    </form>
                    <p className='text-center'>Now to E-Learn <Link className='text-xl font-semibold text-orange-500' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
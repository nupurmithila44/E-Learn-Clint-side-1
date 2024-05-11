import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import logg from '../../assets/logg.jpg'
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.confiq";


const Register = () => {
    const { registerUser,logOut, user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(registerUser)
    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password)
        registerUser(email, password)
        .then( result =>{
            console.log(result.user)
            toast('your register successfully')
            navigate('/login')
            
    
            // logOut()
            // .then(()=>{
            //     navigate('/login')
            // })
    
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            })
           
            .then(result =>{
                console.log(result.user)
                
            })
            .catch(error =>{
                console.log(error)
            })   
        })
        .catch(error =>{
            console.log(error)
        })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl py-4 mr-8 bg-base-100 ">
                <img className=" rounded-lg" src={logg} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-2xl text-center font-bold">Sign up</h1>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="photo" name='photo' placeholder="Photo URL" className="input input-bordered" required />
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
                <p className='text-center'>alrady have an account <Link className='text-xl font-semibold text-orange-500' to='/login'>Login</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Register;

import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login/login.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {
    const {signIn,signInWithGoogle,userUpdateProfile } = useContext(AuthContext)
    const navigate =useNavigate();
    const [show,setShow] = useState(false)
    const [success,setSuccess] = useState("");
    const [error,setError] = useState("");
    const location = useLocation();
    const from =location.state?.from?.pathname || '/'
    console.log('login page location',location)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setError("")
        setSuccess("")
        // const user ={email,password}
        // console.log(form,name,photo,email,password)

        signIn(email,password)
        .then(result=>{
            const user = result.user
             console.log(user)
             setSuccess("user Login Successfully");
             navigate(from , { replace: true })
             event.target.reset();
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
        userUpdateProfile(name,photo)
        .then(result=>{
            const update = result.user;
            console.log(update)
            setSuccess('user photo updated successfully')
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })
        
    }
    const handleGoogleSignIn =()=>{
        setError("")
        setSuccess("")
        signInWithGoogle()
        .then(result=>{
            setSuccess("user Google Signin Successfully")
            const gooGleUser = result.user
            console.log(gooGleUser)
            navigate(from , { replace: true })
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className=" w-1/2 mr-12" >
                <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Login!</h1>
                    <form onSubmit={handleLogin}>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name : " className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Your Photo URL : " className="input input-bordered" required />
                        </div>
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
                            <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                            <p className='text-right cursor-pointer' onClick={()=>setShow(!show)}><small>
                                {
                                    show ? <span>Hide Password</span> : <span> Show Password</span>
                                }
                                </small></p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>New To Car Doctors ? Please <Link className='text-orange-600 font-bold' to="/signup">SignUp</Link></p>

                    <button onClick={handleGoogleSignIn} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sign In With Google</button>
                    <p className='font-bold text-red-600'>{success}</p>
                    <p className='font-bold text-red-600'>{error}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;